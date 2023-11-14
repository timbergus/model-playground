import type { Categories } from '../types'

export const useCategories = <TCategories extends Categories>(
  categories: TCategories
) => ({
  getCategories: () => Object.keys(categories),
  getSubcategories: (subcategory: Extract<keyof TCategories, string>) =>
    categories[subcategory],
})
