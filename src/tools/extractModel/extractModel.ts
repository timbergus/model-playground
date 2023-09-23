import { parse } from 'node-xlsx'
import { parseModel } from './utils/parseModel'
import type { Sheet } from '../../types'

const sheet: Sheet | undefined = parse(Bun.argv[2]).at(0)

const modelName = sheet?.name
const model = sheet?.data

Bun.write(
  `build/${modelName?.toLowerCase()}.model.json`,
  `${JSON.stringify(parseModel(model), null, 2)}\n`
)
