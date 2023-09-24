import { parseValues } from './parseValues'
import { parseRow } from './parseRow'
import type { Result, Row } from '../../types'
import { getIndices } from './getIndices'

export const parseModel = (model?: Row[]) => {
  let result: Result = {}

  const parsedModel = model?.map((row) => parseRow(row))

  const typesRow = parsedModel?.at(0)
  const types = typesRow?.filter((type) => typeof type === 'string') as string[]
  const typesIndex = getIndices(typesRow)

  const propertiesRow = parsedModel?.at(1)

  const end = propertiesRow?.findIndex((item) => item === 'value')

  if (end) {
    typesIndex?.push(end)
  }

  if (parsedModel) {
    for (let i = 2; i < parsedModel.length ?? 2; i++) {
      const valuesPerProperty = parseValues(
        parsedModel[i] ?? [],
        typesIndex ?? [],
        types ?? [],
        propertiesRow ?? []
      )
      result = { ...result, ...valuesPerProperty }
    }
  }

  return result
}
