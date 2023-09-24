import { program } from 'commander'
import { extractModel } from './tools/extractModel'
import { extractValues } from './tools/extractValues'

program.name('sas-cli').description('CLI for SAS').version('0.0.1')

program
  .command('install')
  .description('add the tools to manipulate models')
  .argument('<path>', 'path to install the tools')
  .action((path: string) => {
    console.log('🚀 ~ file: index.ts:9 ~ .action ~ path:', path)
  })

program
  .command('update')
  .description('updates the tools to manipulate models')
  .argument('<path>', 'path to update the files')
  .action((path: string) => {
    console.log('🚀 ~ file: index.ts:9 ~ .action ~ path:', path)
  })

program
  .command('extract')
  .description('extract logic and values from model')
  .argument('<file>', 'model or values file')
  .option('-p, --path <path>', 'extract model or values', '.')
  .action((file: string, options: { path: string }) => {
    if (file.toLowerCase().includes('model.xlsx')) {
      extractModel(file, options.path)
    } else if (file.toLowerCase().includes('values.xlsx')) {
      extractValues(file, options.path)
    } else {
      console.log('Please select a model or values XLSX file')
    }
  })

program.parse()
