import type { Sheet } from '../../../types'
import { getIndices } from '../../../utils/getIndices'
import { parseRow } from '../../extractModel/utils/parseRow'

export const parseSheet = (sheet: Sheet) => {
  const sheetName = sheet.name
  const sheetData = sheet.data

  console.log(getIndices(sheetData.at(0)))

  return sheet
}
