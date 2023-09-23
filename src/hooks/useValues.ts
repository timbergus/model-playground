import { Country } from '../utils/parseRow'

import model from '../../build/business.model.json'

export const useValues = (country: Country, type: string) => {
  return {
    getValues: (value: string) => {},
  }
}
