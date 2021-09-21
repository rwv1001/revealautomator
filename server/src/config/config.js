module.exports = {
    port: process.env.PORT || 5000,
    db: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      options: {
        dialect: process.env.DIALECT || 'mysql',
        host: process.env.HOST || 'localhost',
        }
    },
    authentication: {
      jwtSecret: process.env.JWT_SECRET || 'secret'
    }
  }