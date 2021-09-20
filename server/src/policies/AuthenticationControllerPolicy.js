const Joi = require('joi')

module.exports ={
  register (req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().pattern(
        new RegExp(/^[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,32}$/)
      )
    })
    const {error, value} = schema.validate(req.body)
    console.log(value)
    if(error) {
      switch (error.details[0].context.key){
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email addresss'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
            <br>
            1. It most contain ONLY the following characters: lower case a-z, upper case A-Z, numbers 0-9, punctuation
            2. It must be at least 8 characters in length and not great than 32 characters. `
          })
          break
          default:
            res.status(400).send({
              error: 'Invalide registration information'
            })
      }
    } else {
    next()
    }
  }
}