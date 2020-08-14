'use strict'

const path = require('path')

module.exports = async (cli) => {
  try {
    const inputFile = path.join(__dirname, './config', 'index.js')
    const outputFile = path.join(cli.helpers.configPath(), 'espionildo.js')
    await cli.copy(inputFile, outputFile)
    cli.command.completed('create', 'config/espionildo.js')
  } catch (error) {
    // fazer nada com o error
  }
}
