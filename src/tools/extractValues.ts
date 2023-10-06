import { parse } from 'node-xlsx'
import { parseSheet } from './utils/parseSheet'
import { parseTranslations } from './utils/parseTranslations'
import type { Sheet, Values } from '../types'

export const extractValues = (file: string, path: string) => {
  const sheets: Sheet[] | undefined = parse(file)

  let values: Values = {}

  sheets.forEach((sheet) => {
    values = { ...values, ...parseSheet(sheet) }
  })

  const annotations = parseTranslations(values)

  Bun.write(`${path}/values.json`, `${JSON.stringify(values, null, 2)}\n`)
  Bun.write(`${path}/valuesStrings.ts`, `${annotations}\n`)
}
