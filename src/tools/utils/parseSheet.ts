import type { Sheet, Values } from '../../types'
import { getIndices } from './getIndices'
import { isCountryISO3 } from './isCountryISO3'
import { parseRow } from './parseRow'

export const parseSheet = (sheet: Sheet) => {
  const isStatic = /\w+(_S)$/.test(sheet.name)

  const sheetName = isStatic ? sheet.name.replace(/_S$/, '') : sheet.name
  const sheetData = sheet.data

  let notRequiredIndex = NaN

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
          const label = isStatic ? sheetData[a][indices[iter] + 1] : undefined
          if (value === 'Not required' || a === notRequiredIndex) {
            // This value is always in the first column.
            // We stored it the first time around.
            if (isNaN(notRequiredIndex)) notRequiredIndex = a
            break
          }
          if (
            typeof value === 'string' &&
            (typeof label === 'string' || typeof label === 'undefined')
          ) {
            values[sheetName][country]?.push({ value, label })
          }
        }
      }
    }
  }

  return values
}
