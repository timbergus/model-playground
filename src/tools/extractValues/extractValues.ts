import { parse } from 'node-xlsx'
import { parseSheet } from './utils/parseSheet'
import type { Sheet, Values } from '../../types'

const sheets: Sheet[] | undefined = parse(Bun.argv[2])

let values: Values = {}

sheets.forEach((sheet) => {
  values = { ...values, ...parseSheet(sheet) }
})

Bun.write('build/values.json', `${JSON.stringify(values, null, 2)}\n`)
