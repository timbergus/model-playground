import { parse } from 'node-xlsx'
import type { Sheet } from '../types'
import { parseCategories } from './utils/parseCategories'

export const extractCategories = (file: string, path: string) => {
  const sheet: Sheet | undefined = parse(file).at(0)

  const categoriesName = sheet?.name
  const categories = sheet?.data

  Bun.write(
    `${path}/${categoriesName?.toLowerCase()}.categories.json`,
    `${JSON.stringify(parseCategories(categories), null, 2)}\n`
  )
}
