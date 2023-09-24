import { describe, test, expect } from 'bun:test'
import { useModel } from '../useModel'
import model from './__mocks__/business.model.json'

describe('useModel', () => {
  test('firstProperty should be visible and required for type A in Spain', () => {
    const { isVisible, isRequired } = useModel(model, 'Spain', 'Type A')
    expect(isVisible('firstProperty')).toBe(true)
    expect(isRequired('firstProperty')).toBe(true)
  })

  test('secondProperty should be visible and not required for type A in Spain', () => {
    const { isVisible, isRequired } = useModel(model, 'Spain', 'Type A')
    expect(isVisible('secondProperty')).toBe(true)
    expect(isRequired('secondProperty')).toBe(undefined)
  })

  test('thirdProperty should be not visible and not required for type A in Spain', () => {
    const { isVisible, isRequired } = useModel(model, 'Spain', 'Type A')
    expect(isVisible('thirdProperty')).toBe(false)
    expect(isRequired('thirdProperty')).toBe(false)
  })
})
