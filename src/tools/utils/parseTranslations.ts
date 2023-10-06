import { Values, isISOCountry } from '../../types'

export const parseTranslations = (values: Values) => {
  const annotations = new Set()

  annotations.add(
    `/**
 * This file was created automatically on ${new Date().toISOString()}
 *
 * Please, do not edit!
 */
`
  )

  Object.keys(values).forEach((key: keyof typeof values) => {
    const namespace = key.toLowerCase().replaceAll('_', '-')
    const countries = Object.keys(values[key])
    countries.forEach((country) => {
      if (isISOCountry(country)) {
        values[key][country]?.forEach((item) => {
          if (item.default) {
            annotations.add(
              `// translation('${namespace}.${item.value}', '${item.default}')`
            )
          }
        })
      }
    })
  })

  annotations.add('\nexport {};')

  return Array.from(annotations).join('\n')
}
