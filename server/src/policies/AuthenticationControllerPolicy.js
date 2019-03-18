const Joi = require('joi')

module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email().required(),
      password: Joi.string().required().regex(
        new RegExp('^[a-zA-Z0-9]{4,32}$')
      )
    }

    const { error, value } = Joi.validate(req.body, schema);
    if (error) {
      switch(error.details[0].context.key) {
        case 'email':
          res.status(400).send({error: 'Problem with email!'});
          break
        case 'password':
          res.status(400).send({error: 'Problem with password!'});
          break
        default:
          res.status(400).send({error: 'wrong data supplied!'})
      }
    } else {
      next(); // important!
    }
  }
};
