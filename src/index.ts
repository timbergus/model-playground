import { program } from 'commander'
import { extractModel } from './tools/extractModel'
import { extractValues } from './tools/extractValues'
import { dirname } from 'node:path'

program.name('sas-cli').description('CLI for SAS').version('0.0.1')

program
  .command('install')
  .description('add the tools to manipulate models')
  .argument('<path>', 'path to install the tools')
  .action(async (path: string) => {
    const file = Bun.file(`${path}/useModel.ts`)
    if (await file.exists()) {
      console.log('Already installed. Please, update.')
    } else {
      Bun.spawn(['cp', '-R', 'src/hooks', path])
    }
  })

program
  .command('update')
  .description('updates the tools to manipulate models')
  .action(async () => {
    const { stdout } = Bun.spawn([
      'find',
      '.',
      '-iname',
      'useModel.ts',
      '!',
      '-path',
      '*/src/*',
    ])
    const stdoutStr = await new Response(stdout).text()
    if (stdoutStr) {
      const path = dirname(stdoutStr)
      console.log('🚀 ~ file: index.ts:38 ~ .action ~ path:', path)
      Bun.spawn(['rm', '-rf', path])
      Bun.spawn(['cp', '-R', 'src/hooks', 'pepe'])
    } else {
      console.log('Not installed. Please, install.')
    }
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
