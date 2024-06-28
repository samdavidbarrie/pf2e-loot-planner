import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const config = {
  root: 'https://elasticsearch.aonprd.com/',
  index: 'aon',

  // Comment out any targets you do not want to scrape.
  targets: [
    'action',
    'ancestry',
    'archetype',
    'armor',
    'armor-group',
    'article',
    'background',
    'condition',
    'class',
    'creature',
    'creature-family',
    'deity',
    'equipment',
    'feat',
    'hazard',
    'rules',
    'skill',
    'shield',
    'spell',
    'source',
    'trait',
    'weapon',
    'weapon-group',
  ],
}
