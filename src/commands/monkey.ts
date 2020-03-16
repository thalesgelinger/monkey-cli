import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'monkey',
  run: async toolbox => {
    const {
      print: { info }
    } = toolbox

    info('Welcome to monkey')
  }
}

module.exports = command
