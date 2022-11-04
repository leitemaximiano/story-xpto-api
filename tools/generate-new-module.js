const sh = require('shelljs')
const moduleName = process.argv[2] || `novo-${(new Date()).getMilliseconds()}-module`

sh.exec(`
  cd src/module && 
  mkdir ${moduleName} && 
  cd ${moduleName} && 
  mkdir entities infra protocols use-case
  touch entities/.gitkeep infra/.gitkeep protocols/.gitkeep use-case/.gitkeep
`)
