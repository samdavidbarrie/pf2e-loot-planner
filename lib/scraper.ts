import { Client } from '@elastic/elasticsearch'
import fs from 'fs'
import path from 'path'
import { config } from './utils'
import sanitize from 'sanitize-filename'

const tracking: { [key: string]: boolean } = {}

const client = new Client({
  node: config.root,
})

export async function retrieveTargets() {
  for (const target of config.targets.sort()) {
    try {
      const search = await client.search({
        index: config.index,
        from: 0,
        size: 10000,
        query: { match: { category: target } },
      })

      console.log({
        action: 'saving',
        target,
        // count: search?.hits?.total.value
      })

      fs.mkdirSync(path.join('lib/json', 'raw'), {
        recursive: true,
      })
      fs.writeFileSync(
        path.join('lib/json', 'raw', `${target}.json`),
        JSON.stringify(search?.hits?.hits)
      )
      tracking[target] = true
    } catch (err) {
      console.error(err)
      tracking[target] = false
    }
  }
}

const filterFields = (entry: { [key: string]: boolean }, target: string) => {
  const filteredEntry = { ...entry }

  delete filteredEntry.exclude_from_search

  if (target !== 'creature') {
    delete filteredEntry.hp_scale_number
    delete filteredEntry.perception_scale_number
    delete filteredEntry.skill_mod
  }

  if (target !== 'creature' && target !== 'hazard') {
    delete filteredEntry.resistance
    delete filteredEntry.weakness
  }

  if (target !== 'creature' && target !== 'ancestry') {
    delete filteredEntry.speed
  }

  return filteredEntry
}

export async function parseTargets() {
  for (const target of config.targets.sort()) {
    console.log({ action: 'parsing', target })

    if (tracking[target]) {
      const raw = JSON.parse(
        fs.readFileSync(path.join('lib/json', 'raw', `${target}.json`), 'utf-8')
      )

      const parsed = raw.map((entry: { _source: any }) =>
        filterFields(entry._source, target)
      )

      try {
        fs.mkdirSync(path.join('lib/json', 'parsed'), {
          recursive: true,
        })

        fs.writeFileSync(
          path.join('lib/json', 'parsed', `${target}.json`),
          JSON.stringify(parsed, null, ' ')
        )
      } catch (err) {
        console.error(err)
      }
    }
  }
}

export async function sortTargets() {
  for (const target of config.targets.sort()) {
    console.log({ action: 'sorting', target })

    if (tracking[target] === true) {
      const parsed = JSON.parse(
        fs.readFileSync(
          path.join('lib/json', 'parsed', `${target}.json`),
          'utf-8'
        )
      )
      for (const entry of parsed) {
        try {
          fs.mkdirSync(path.join('lib/json', 'sorted', `${target}`), {
            recursive: true,
          })

          fs.writeFileSync(
            path.join(
              'lib/json',
              'sorted',
              `${target}`,
              `${sanitize(entry?.name)}.json`
            ),
            JSON.stringify(entry, null, ' ')
          )
        } catch (err) {
          console.error(err)
        }
      }
    }
  }
}

async function run() {
  await retrieveTargets()
  await parseTargets()
  await sortTargets()
}

run().catch(console.log)
