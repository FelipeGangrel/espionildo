'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class ErrorHandlerProvider extends ServiceProvider {
  register() {
    this.app.singleton('Espionildo/Helper/ErrorHandler', (app) => {
      const Config = app.use('Adonis/Src/Config')
      const ErrorHandler = require('../src/ErrorHandler')

      return new ErrorHandler(Config)
    })

    this.app.alias('Espionildo/Helper/ErrorHandler', 'ErrorHandler')
  }
}

module.exports = ErrorHandlerProvider
