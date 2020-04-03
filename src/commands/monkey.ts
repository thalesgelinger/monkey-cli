import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'monk',
  run: async (toolbox: GluegunToolbox) => {
    toolbox.print.success('Welcome to monkey')
  }
}
