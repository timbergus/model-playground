import type { Row } from '../types'

export const getIndices = (row?: Row) =>
  row?.map((_, index) => index).filter((index) => row[index])
