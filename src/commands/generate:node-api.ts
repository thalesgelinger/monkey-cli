import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'generate:node-api',
  description: 'Create a bootstrap backend project for node js',
  run: async (toolbox: GluegunToolbox) => {
    const {
      print: { success, error, info, spin },
      parameters: { first },
      system,
      template
    } = toolbox

    const projetcName = first

    if (!projetcName) {
      error('You must type the name of the project')
      return
    }

    info(`Creating ${projetcName}:`)

    let spinner = spin('Creating main files')
    await template.generate({
      template: 'js/node/template-node-api/src/index.js',
      target: `${projetcName}/src/index.js`
    })

    await template.generate({
      template: 'js/node/template-node-api/src/routes.js.ejs',
      target: `${projetcName}/src/routes.js`,
      props: { name: projetcName }
    })

    await template.generate({
      template: 'js/node/template-node-api/.babelrc',
      target: `${projetcName}/.babelrc`
    })

    await template.generate({
      template: 'js/node/template-node-api/.gitignore',
      target: `${projetcName}/.gitignore`
    })

    await template.generate({
      template: 'js/node/template-node-api/package.json.ejs',
      target: `${projetcName}/package.json`,
      props: { name: projetcName }
    })
    spinner.stop()
    spinner.succeed('Created main files')

    spinner = spin('Downloading node_modules')
    await system.run(`cd ${projetcName} && npm install`)
    spinner.stop()
    spinner.succeed('Downloaded node_modules')

    success(`Generated your project called ${projetcName}`)
  }
}
