import { Country } from '../utils/parseRow'

import model from '../../build/business.model.json'

export const useModel = (country: Country, type: string) => {
  return {
    isVisible: (property: string) => {},
    isRequired: (property: string) => {},
  }
}
