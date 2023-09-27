import type { Sheet, Values } from '../../types'
import { getIndices } from './getIndices'
import { isCountryISO3 } from './isCountryISO3'
import { parseRow } from './parseRow'

export const parseSheet = (sheet: Sheet) => {
  const sheetName = sheet.name
  const sheetData = sheet.data

  const values: Values = {
    [sheetName]: {},
  }

  const countries = parseRow(sheetData.at(0))?.filter((country) => country)

  const indices = getIndices(sheetData.at(0))

  if (indices) {
    for (let iter = 0; iter < indices.length; iter++) {
      const country = countries?.[iter]
      if (typeof country === 'string' && isCountryISO3(country)) {
        values[sheetName][country] = []
        for (let a = 2; a < sheetData.length; a++) {
          const value = sheetData[a][indices[iter]]
          if (value === 'Not required') break
          if (typeof value === 'string') {
            values[sheetName][country]?.push(value)
          }
        }
      }
    }
  }

  return values
}
