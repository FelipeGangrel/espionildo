'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class ErrorHandlerProvider extends ServiceProvider {
  register() {
    this.app.singleton('Espionildo/Helper/Espionildo', () => {
      const Config = this.app.use('Adonis/Src/Config')
      const Espionildo = require('../src/Espionildo')

      return new Espionildo(Config)
    })

    this.app.alias('Espionildo/Helper/Espionildo', 'Espionildo')
  }
}

module.exports = ErrorHandlerProvider
