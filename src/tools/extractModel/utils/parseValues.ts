import type { Result, Row } from '../../../types'
import { parseDependencies } from './parseDependencies'

export const parseValues = (
  row: Row,
  indices: number[],
  types: string[],
  propertiesRow: Row
): Result => {
  const result: Result = {}

  const property = row.at(0)

  if (typeof property === 'string') {
    result[property] = {}
    types.forEach((type, index) => {
      result[property][type] = {}
      for (let iter = indices[index]; iter < indices[index + 1]; iter++) {
        const country = propertiesRow[iter]
        if (typeof country === 'string') {
          result[property][type][country] = row[iter]
        }
      }
      const end = indices.at(-1)
      if (end) {
        result[property].metadata = {}
        for (let iter = end; iter < propertiesRow.length; iter++) {
          const prop = propertiesRow[iter]
          if (typeof prop === 'string') {
            const value = row[iter]
            if (prop === 'dependencies' && typeof value === 'string') {
              result[property].metadata[prop] = parseDependencies(value)
            } else {
              result[property].metadata[prop] = value
            }
          }
        }
      }
    })
  }

  return result
}
