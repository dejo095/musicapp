const { User } = require('../models');

module.exports = {
  async register(req, res) {
    try {

      const user  = await User.create(req.body)

      res.send(user.toJSON())

    } catch (error) {
      // email exists
      res
        .status(400)
        .send({ error: 'Error occured! Please retry later or with different credentials.' })
    }
  },
  async login(req, res) {
    try {
      const {email, password} = req.body
      const user  = await User.findOne({
        where: {
          email: email
        }
      })

      if (!!user) {
        return res.send(403).send({
          error: 'Login creds not working!'
        })
      }

      const isPasswordValid = password === user.password
      if (!isPasswordValid) {
        return res.send(403).send({
          error: 'Login creds not working!'
        })
      }

      const userJson = user.JSON()

      res.send({
        user: userJson
      })

    } catch (error) {
      // email exists
      res
        .status(500)
        .send({ error: 'An error occured during login' })
    }
  }
};
