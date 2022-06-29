module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "p0stgr3s",
    DB: "miniapdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };