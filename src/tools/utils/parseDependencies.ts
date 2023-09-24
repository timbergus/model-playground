import type { Dependency } from '../../types'

export const parseDependencies = (dependencies: string): Dependency => {
  const segments = dependencies.split(';')
  const result: Dependency = {}
  segments.forEach((segment) => {
    let [key, value] = segment.split('=')
    let realValue: string | number | boolean = value
    if (Number(value)) {
      realValue = Number(value)
    } else if (value === 'true') {
      realValue = true
    } else if (value === 'false') {
      realValue = false
    }
    result[key] = realValue
  })
  return result
}
