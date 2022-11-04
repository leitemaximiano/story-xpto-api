const { generateTemplateFiles } = require('generate-template-files')

generateTemplateFiles([
  {
    option: 'Create colletion of test for component',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/template-test.ts'
    },
    stringReplacers: ['__FOLDER__', '__COMPONENT__'],
    output: {
      path: './src/components/__FOLDER__/__COMPONENT__.spec.ts',
      pathAndFileNameDefaultCase: '(pascalCase)'
    },
    onComplete: (results) => {
      console.log('results', results)
    }
  }
])
