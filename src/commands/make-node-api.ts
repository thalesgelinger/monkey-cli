import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'make:node-api',
  description: 'Create a bootstrap backend project for node js',
  run: async (toolbox: GluegunToolbox) => {
    const {
      print: { success, error, info, spin },
      parameters: { first },
      system,
      template,
      filesystem
    } = toolbox

    const name = first

    if (!name) {
      error('You must type the name of the project')
      return
    }

    info(`Creating ${name}:`)

    let spinner = spin('Creating main files')
    await template.generate({
      template: 'js/node/template-node-api/src/index.js.ejs',
      target: `${name}/src/index.js`
    })

    await template.generate({
      template: 'js/node/template-node-api/src/routes.js.ejs',
      target: `${name}/src/routes.js`,
      props: { name }
    })

    await template.generate({
      template: 'js/node/template-node-api/.babelrc',
      target: `${name}/.babelrc`
    })

    await template.generate({
      template: 'js/node/template-node-api/package.json.ejs',
      target: `${name}/package.json`,
      props: { name }
    })
    spinner.stop()
    spinner.succeed('Created main files')

    spinner = spin('Downloading node_modules')
    await system.run(`cd ${name} && npm install`)

    spinner.stop()
    spinner.succeed('Downloaded node_modules')

    filesystem.append(`${name}/.gitignore`, 'node_modules')

    success(`Generated ${name}`)
  }
}
