#! /usr/bin/env bun

import { Command } from 'commander'
import { extractModel } from './tools/extractModel'
import { extractValues } from './tools/extractValues'
// import { dirname } from 'node:path'
import { existsSync, mkdirSync } from 'node:fs'
import { textSync } from 'figlet'
import chalk from 'chalk'
import { extractCategories } from './tools/extractCategories'

const program = new Command()

program.name('model-cli').description('CLI for XLSX models').version('0.0.1')

// TODO Make hooks install option.
// program
//   .command('install')
//   .description('add the tools to manipulate models')
//   .argument('<path>', 'path to install the tools')
//   .action(async (path: string) => {
//     const file = Bun.file(`${path}/useModel.ts`)
//     if (await file.exists()) {
//       console.log('Already installed. Please, update.')
//     } else {
//       Bun.spawn(['cp', '-R', 'src/hooks', path])
//     }
//   })

// TODO Make hooks update option.
// program
//   .command('update')
//   .description('updates the tools to manipulate models')
//   .action(async () => {
//     const { stdout } = Bun.spawn([
//       'find',
//       '.',
//       '-iname',
//       'useModel.ts',
//       '!',
//       '-path',
//       '*/src/*',
//     ])
//     const stdoutStr = await new Response(stdout).text()
//     if (stdoutStr) {
//       const path = dirname(stdoutStr)
//       console.log('🚀 ~ file: index.ts:38 ~ .action ~ path:', path)
//       Bun.spawn(['rm', '-rf', path])
//       Bun.spawn(['cp', '-R', 'src/hooks', 'pepe'])
//     } else {
//       console.log('Not installed. Please, install.')
//     }
//   })

program
  .command('extract')
  .description('extract logic and values from model')
  .argument('<file>', 'model or values file (xlsx)')
  .option('-p, --path <path>', 'extract model or values', 'model')
  .action((file: string, options: { path: string }) => {
    if (!existsSync(options.path)) {
      mkdirSync(options.path, { recursive: true })
    }
    if (file.toLowerCase().includes('model.xlsx')) {
      extractModel(file, options.path)
      console.log(chalk.cyan('✅', 'Model extracted successfully', '\n'))
    } else if (file.toLowerCase().includes('values.xlsx')) {
      extractValues(file, options.path)
      console.log(chalk.cyan('✅', 'Values extracted successfully', '\n'))
    } else if (file.toLowerCase().includes('categories.xlsx')) {
      extractCategories(file, options.path)
      console.log(chalk.cyan('✅', 'Categories extracted successfully', '\n'))
    } else {
      console.log(
        chalk.red('❗️', 'Please, select a model or values XLSX file', '\n')
      )
    }
  })
  .configureOutput({
    outputError: (error, write) => write(chalk.red('❗️', error, '\n')),
  })

console.log(chalk.blue(textSync('Model CLI')))

program.parse()
