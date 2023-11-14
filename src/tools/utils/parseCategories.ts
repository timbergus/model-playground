import type { Row } from '../../types'

export const parseCategories = (categories?: Row[]) => {
  const result: Record<string, string[]> = {}

  let lastCategory = ''

  // Remove the titles row.
  categories?.shift()

  if (categories) {
    for (const row of categories) {
      const category = row.at(0)?.toString()
      const subcategory = row.at(1)?.toString()
      // Only add categories that are required. Ignore the rest.
      if (category === 'Not required') {
        break
      }
      if (category) {
        lastCategory = category
        result[lastCategory] = [subcategory ?? '']
      } else {
        result[lastCategory].push(subcategory ?? '')
      }
    }
  }

  return result
}
