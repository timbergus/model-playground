import { parse } from 'node-xlsx'
import { parseSheet } from './utils/parseSheet'
import type { Sheet, Values } from '../types'

export const extractValues = (file: string, path: string) => {
  const sheets: Sheet[] | undefined = parse(file)

  let values: Values = {}

  sheets.forEach((sheet) => {
    values = { ...values, ...parseSheet(sheet) }
  })

  Bun.write(`${path}/values.json`, `${JSON.stringify(values, null, 2)}\n`)
}
