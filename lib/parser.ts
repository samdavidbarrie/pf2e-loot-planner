import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const parsedDir = path.join(__dirname, './json/parsed')
const mergedDir = path.join(__dirname, './json/merged')

// Create merged directory if it doesn't exist
if (!fs.existsSync(mergedDir)) {
  fs.mkdirSync(mergedDir, { recursive: true })
}

const uniqueFieldsFilePath = path.join(mergedDir, 'uniqueFields.json')

if (!fs.existsSync(mergedDir)) {
  fs.mkdirSync(mergedDir, { recursive: true })
}

const getTypeApproximation = (value: any): string => {
  const type: string = typeof value
  let sampleValue: any

  if (Array.isArray(value) && value.length > 0) {
    sampleValue = value[0] // Take the first element as sample
  } else if (typeof value === 'object' && value !== null) {
    // For objects, check the keys and their types
    const keys = Object.keys(value)
  } else {
    sampleValue = value
  }

  return type
}

const extractUniqueFieldsPerFile = async () => {
  try {
    const files = fs
      .readdirSync(parsedDir)
      .filter((file) => file.endsWith('.json'))
    const uniqueFieldsPerFile: {
      [key: string]: { [field: string]: string }
    } = {}

    for (const file of files) {
      const filePath = path.join(parsedDir, file)
      const fileContents = fs.readFileSync(filePath, 'utf-8')
      const jsonData = JSON.parse(fileContents)

      const fieldTypes: { [field: string]: string } = {}
    }

    fs.writeFileSync(
      uniqueFieldsFilePath,
      JSON.stringify(uniqueFieldsPerFile, null, 2),
      'utf-8'
    )
    console.log(
      `Unique fields with type approximations per file written to ${uniqueFieldsFilePath}`
    )
  } catch (error) {
    console.error('Error extracting unique fields per file:', error)
  }
}

// void extractUniqueFieldsPerFile()

const jsonFilePath = 'lib/json/merged/merged.json'

const extractTermsBeforeAspx = () => {
  try {
    // Read the JSON file
    const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'))

    // Regular expression to match URLs ending with .aspx
    const regex = /(\w+)\.aspx/g
    const uniqueResults = new Set<string>()

    // Iterate over the data and extract terms before .aspx
    for (const key in jsonData) {
      if (Object.prototype.hasOwnProperty.call(jsonData, key)) {
        const value = jsonData[key]
        // Check if value is a string and match using regex
        if (typeof value === 'string') {
          let match
          while ((match = regex.exec(value)) !== null) {
            uniqueResults.add(match[1]) // Extracting the term before .aspx
          }
        }
      }
    }

    // Convert set to array if needed
    const uniqueResultsArray = Array.from(uniqueResults)

    console.log('Unique terms before .aspx:')
    console.log(uniqueResultsArray)

    return uniqueResultsArray
  } catch (error) {
    console.error('Error extracting terms:', error)
    return []
  }
}

// extractTermsBeforeAspx()

const postgresTableFilePath = path.join(mergedDir, 'postgresTables.json')

// Create merged directory if it doesn't exist
if (!fs.existsSync(mergedDir)) {
  fs.mkdirSync(mergedDir, { recursive: true })
}

const getPostgresType = (type: string): string => {
  switch (type) {
    case 'string':
      return 'VARCHAR(255)'
    case 'number':
      return 'NUMERIC' // Adjust as per your specific number type requirements
    case 'boolean':
      return 'BOOLEAN'
    default:
      return ''
  }
}

const generatePostgresTableDefinitions = async () => {
  try {
    const files = fs
      .readdirSync(parsedDir)
      .filter((file) => file.endsWith('.json'))
    const postgresTableDefinitions: {
      [key: string]: string
    } = {}

    for (const file of files) {
      const tableName = path.basename(file, '.json')
      const filePath = path.join(parsedDir, file)
      const fileContents = fs.readFileSync(filePath, 'utf-8')
      const jsonData = JSON.parse(fileContents)
      const tableFields: string[] = []

      if (Array.isArray(jsonData)) {
        jsonData.forEach((obj: any) => {
          if (typeof obj === 'object' && obj !== null) {
            Object.keys(obj).forEach((field) => {
              const fieldName = field.replace(/\W/g, '_').toLowerCase()
              if (
                getPostgresType(typeof obj[field]) !== '' &&
                !tableFields.includes(fieldName)
              ) {
                tableFields.push(
                  `${fieldName} ${getPostgresType(typeof obj[field])}`
                )
              }
            })
          }
        })
      } else {
        console.warn(
          `File ${filePath} does not contain a top-level array and will be skipped.`
        )
      }
      // Generate CREATE TABLE statement
      postgresTableDefinitions[tableName] =
        `CREATE TABLE IF NOT EXISTS ${tableName} (\n  id SERIAL PRIMARY KEY,\n  ${tableFields.join(',\n  ')}\n);`
      console.log(postgresTableDefinitions[tableName])
    }

    // Write PostgreSQL table definitions to file
    fs.writeFileSync(
      postgresTableFilePath,
      Object.values(postgresTableDefinitions).join('\n\n'),
      'utf-8'
    )
    console.log(
      `PostgreSQL table definitions written to ${postgresTableFilePath}`
    )
  } catch (error) {
    console.error('Error generating PostgreSQL table definitions:', error)
  }
}

// void generatePostgresTableDefinitions()

// Create merged directory if it doesn't exist
if (!fs.existsSync(mergedDir)) {
  fs.mkdirSync(mergedDir, { recursive: true })
}

interface TypeApproximation {
  type: string // Approximated type
  sampleValue?: any // Sample value for reference
}

const generateMorePostgresTableDefinitions = async () => {
  try {
    const files = fs
      .readdirSync(parsedDir)
      .filter((file) => file.endsWith('.json'))
    const postgresTableDefinitions: { [key: string]: string } = {}

    for (const file of files) {
      const filePath = path.join(parsedDir, file)
      const fileContents = fs.readFileSync(filePath, 'utf-8')
      const jsonData = JSON.parse(fileContents)

      const tableFields: string[] = []

      if (Array.isArray(jsonData)) {
        jsonData.forEach((obj: any) => {
          if (typeof obj === 'object' && obj !== null) {
            Object.keys(obj).forEach((field) => {
              const typeApproximation: TypeApproximation = {
                type: typeof obj[field],
                sampleValue: obj[field],
              }

              const postgresType = getPostgresType(typeApproximation.type)
              const fieldName = field.replace(/\W/g, '_').toLowerCase() // Clean field names for PostgreSQL

              if (!tableFields.includes(fieldName)) {
                tableFields.push(`${fieldName} ${postgresType}`)
              }
            })
          }
        })
      } else {
        console.warn(
          `File ${filePath} does not contain a top-level array and will be skipped.`
        )
      }

      // Generate CREATE TABLE statement
      const tableName = path.basename(file, '.json')
      postgresTableDefinitions[tableName] =
        `CREATE TABLE IF NOT EXISTS ${tableName} (\n  id SERIAL PRIMARY KEY,\n  ${tableFields.join(',\n  ')}\n);`
    }

    // Write PostgreSQL table definitions to file
    fs.writeFileSync(
      postgresTableFilePath,
      JSON.stringify(postgresTableDefinitions, null, 2),
      'utf-8'
    )

    console.log(
      `PostgreSQL table definitions written to ${postgresTableFilePath}`
    )
  } catch (error) {
    console.error('Error generating PostgreSQL table definitions:', error)
  }
}

void generateMorePostgresTableDefinitions()
