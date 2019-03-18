module.exports = {
  port: process.env.PORT || 8082,
  db: {
    databse: process.env.DB_NAME || 'musicapp',
    user: process.env.DB_USER || 'musicauser',
    password: process.env.DB_PASS || 'musicapassword',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './musicapp.sqlite',
      operatorsAliases: false
    }
  }
}