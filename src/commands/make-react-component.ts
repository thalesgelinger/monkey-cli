import { GluegunToolbox } from 'gluegun'

import toPascalCase from '../utils/toPascalCase'

module.exports = {
  name: 'make:react-component',
  description: 'Create a bootstrap backend project for node js',
  run: async (toolbox: GluegunToolbox) => {
    const {
      print: { success, error, info },
      parameters,
      template,
      filesystem
    } = toolbox

    const name = parameters.first

    if (!name) {
      error('You must type the name of the component')
      return
    }

    const nameCamelCase = toPascalCase(name)

    const exportLine = `export { ${nameCamelCase} } from './${nameCamelCase}/${name}' \n`

    filesystem.append('src/components/index.js', exportLine)

    info(`Creating component ${name}`)

    await template.generate({
      template: 'js/react-js/component/component.css',
      target: `src/components/${name}/${name}.css`
    })

    await template.generate({
      template: 'js/react-js/component/component.js.ejs',
      target: `src/components/${name}/${name}.js`,
      props: { name, value: toPascalCase(name) }
    })

    success(`Generated ${name}`)
  }
}
