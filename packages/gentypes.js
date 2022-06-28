import { sveld } from 'sveld'
import * as pkg from './package.json' assert { type: 'json' }

sveld({
  input: './src/index.js',
  glob: true,
  markdown: true,
  markdownOptions: {
    onAppend: (type, document, components) => {
      if (type === 'h1') document.append('quote', `${components.size} components exported from ${pkg.name}@${pkg.version}.`)
    },
    outFile: '../components.md',
  },
  json: true,
  jsonOptions: {
    // outFile: 'docs/src/COMPONENT_API.json',
    outDir: 'docs',
  },
})
