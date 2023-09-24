import type { Country, Values } from '../types'
import { COUNTRIES } from '../constants'

export const useValues = <TValues extends Values>(
  values: TValues,
  country: Country
) => ({
  getValues: (value: Extract<keyof TValues, string>) =>
    values[value][COUNTRIES[country]],
})
