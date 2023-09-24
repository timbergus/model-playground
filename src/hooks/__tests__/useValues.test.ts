import { describe, test, expect } from 'bun:test'
import { useValues } from '../useValues'
import values from './__mocks__/values.json'

describe('useValues', () => {
  test('should have VALUES', () => {
    const { getValues } = useValues(values, 'Spain')
    expect(getValues('VALUES')).toEqual(['AAA', 'BBB', 'CCC'])
  })

  test('should have MORE_VALUES', () => {
    const { getValues } = useValues(values, 'Spain')
    expect(getValues('MORE_VALUES')).toEqual(['#000', '#111', '#222'])
  })
})
