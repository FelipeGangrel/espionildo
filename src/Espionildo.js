'use strict'

class Espionildo {
  constructor(Config) {
    this.defaultStatus = 400
    this.defaultMessage = 'Mensagem de erro padrão e bem bobaiona'

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

module.exports = Espionildo
