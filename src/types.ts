import { COUNTRIES } from './constants'

export type Country = keyof typeof COUNTRIES
export type CountryISO3 = (typeof COUNTRIES)[keyof typeof COUNTRIES]

export type Row = (string | number | boolean | undefined)[]

export type Sheet = {
  name: string
  data: Row[]
}

export type Dependency = Record<string, any>

export type Result = Record<
  string,
  Record<
    string,
    Record<string, Dependency | string | number | boolean | undefined>
  >
>

type CountryStatus = Partial<Record<CountryISO3, boolean>>

type CountryValues = Partial<
  Record<CountryISO3, { value: string; label?: string; default?: string }[]>
>

type Metadata = Record<
  string,
  string | boolean | Record<string, string | number | boolean>
>

export type Values = Record<string, CountryValues>
export type Model = Record<string, Record<string, CountryStatus | Metadata>>
export type Categories = Record<string, string[]>

export const isISOCountry = (country: any): country is CountryISO3 => {
  return Object.values(COUNTRIES).includes(country)
}
