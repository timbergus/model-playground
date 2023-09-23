import { COUNTRIES } from './constants'

export type Country = keyof typeof COUNTRIES

export type Row = (string | boolean | undefined)[]

export type Sheet = {
  name: string
  data: Row[]
}

export type Dependency = Record<string, any>

export type Result = Record<
  string,
  Record<string, Record<string, Dependency | string | boolean | undefined>>
>

export type Values = Record<string, Record<string, string[]>>
