import { parse } from 'node-xlsx'
import { parseModel } from './utils/parseModel'
import type { Sheet } from '../types'

export const extractModel = (file: string, path: string) => {
  const sheet: Sheet | undefined = parse(file).at(0)

  const modelName = sheet?.name
  const model = sheet?.data

  Bun.write(
    `${path}/${modelName?.toLowerCase()}.model.json`,
    `${JSON.stringify(parseModel(model), null, 2)}\n`
  )
}
