import { useModel } from './hooks/useModel'
import { useValues } from './hooks/useValues'

console.log('Hello via Bun!')

const { isVisible, isRequired } = useModel('Spain', 'Type A')
const { getValues } = useValues('Spain', 'Type A')
