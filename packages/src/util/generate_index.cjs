const os = require('os')
const { fdir } = require('fdir')
const { join } = require('path')
const fs = require('fs')

const generate_export = (filename, path) => {
  return `export { default as ${filename} } from "./${path}"\n`
}
const folder = process.argv[2]
console.log('Looking for modules in ', folder)
const files = new fdir().withBasePath().crawl(folder).sync()

const index = files.find((f) => !f.includes('node_modules') && f.includes('index.js')) || './src/index.js'

let svelte_files = files.filter((f) => f.includes('.svelte'))

if (svelte_files.length === 0) {
  console.log('No svelte files found')
  process.exit(0)
}
svelte_files = svelte_files.map((f) => f.replace(/\\/g, '/'))

const list_of_svelte_paths = svelte_files.map((f) => f.split('/').slice(2).join('/'))
console.log('Found svelte files: ', list_of_svelte_paths)

const generated_exports = list_of_svelte_paths.map((f) => generate_export(f.split('/').pop().split('.')[0], f))
fs.writeFileSync(index, '')

generated_exports.forEach((f) => fs.appendFileSync(index, f))

console.log('Exported to ', index)
