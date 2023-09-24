import { COUNTRIES } from '../../constants'
import type { CountryISO3 } from '../../types'

export const isCountryISO3 = (country: string): country is CountryISO3 =>
  Object.values(COUNTRIES).includes(country as CountryISO3)
