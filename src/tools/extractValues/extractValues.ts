import { parse } from 'node-xlsx'
import { parseSheet } from './utils/parseSheet'
import type { Sheet } from '../../types'

const sheets: Sheet[] | undefined = parse(Bun.argv[2])

sheets.forEach((sheet) => {
  console.log(parseSheet(sheet))
})

Bun.write(
  'build/values.json',
  `${JSON.stringify({ values: 'work in progress' }, null, 2)}\n`
)
