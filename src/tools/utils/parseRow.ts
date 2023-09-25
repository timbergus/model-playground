import { COUNTRIES } from '../../constants'
import type { Country, Row } from '../../types'

function isCountry(country: Country): country is Country {
  return COUNTRIES[country] !== undefined
}

export const parseRow = (row?: Row): Row | undefined => {
  if (row && row?.length <= 1) {
    return undefined
  }
  return row?.map((item) => {
    switch (item) {
      case '✅':
        return true
      case '⭕️':
        return undefined
      case '❌':
        return false
      default:
        if (typeof item === 'string' && isCountry(item as Country)) {
          return COUNTRIES[item as Country]
        }
        return item
    }
  })
}
