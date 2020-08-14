'use strict'

class ErrorHandler {
  defaultStatus = 400
  defaultMessage = 'Mensagem de erro padrão e bem bobaiona'

  constructor(Config) {
    this.config = Config.merge('espionildo', {
      defaultStatus: this.defaultStatus,
      defaultMessage: this.defaultMessage
    })
  }

  handle(response, error) {
    const {
      status = this.config.defaultStatus,
      message = this.config.defaultMessage
    } = error
    return response.status(status).send({
      error: { message }
    })
  }
}

module.exports = ErrorHandler
