import { COUNTRIES } from '../constants'
import { Country, Model } from '../types'

export const useModel = <TModel extends Model>(
  model: TModel,
  country: Country,
  type: Extract<keyof TModel[keyof TModel], string>
) => ({
  isVisible: (property: Extract<keyof TModel, string>) => {
    const value = model[property]?.[type]?.[COUNTRIES[country]]
    return Boolean(model[property]) && (value || value === undefined)
  },
  isRequired: (property: Extract<keyof TModel, string>) => {
    const value = model[property]?.[type]?.[COUNTRIES[country]]
    return Boolean(model[property]) && value
  },
})
