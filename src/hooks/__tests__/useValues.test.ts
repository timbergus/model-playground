import { describe, test, expect } from 'bun:test'
import { useValues } from '../useValues'
import values from './__mocks__/values.json'

describe('useValues', () => {
  test('should have VALUES', () => {
    const { getValues } = useValues(values, 'Spain')
    expect(getValues('VALUES')).toEqual([
      {
        label: 'L_AAA',
        value: 'AAA',
      },
      {
        label: 'L_BBB',
        value: 'BBB',
      },
      {
        label: 'L_CCC',
        value: 'CCC',
      },
    ])
  })

  test('should have MORE_VALUES', () => {
    const { getValues } = useValues(values, 'Spain')
    expect(getValues('MORE_VALUES')).toEqual([
      {
        label: 'L_#000',
        value: '#000',
      },
      {
        label: 'L_#111',
        value: '#111',
      },
      {
        label: 'L_#222',
        value: '#222',
      },
    ])
  })

  test('should have STATIC_VALUES', () => {
    const { getValues } = useValues(values, 'Spain')
    expect(getValues('STATIC_VALUES')).toEqual([
      {
        value: '#S000',
        default: 'Default value A',
      },
      {
        value: '#S111',
        default: 'Default value B',
      },
      {
        value: '#S222',
        default: 'Default value C',
      },
    ])
  })
})
