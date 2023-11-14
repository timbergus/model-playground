import { describe, test, expect } from 'bun:test'
import { useCategories } from '../useCategories'
import categories from './__mocks__/categories.json'

describe('useCategories', () => {
  test('should have categories', () => {
    const { getCategories } = useCategories(categories)
    expect(getCategories()).toEqual(['Category A', 'Category B', 'Category C'])
  })

  test('should have subcategories', () => {
    const { getSubcategories } = useCategories(categories)
    expect(getSubcategories('Category B')).toEqual(['Subcategory BB'])
  })
})
