const { Sequelize } = require("sequelize");
const dbConfig = require("../config/config").development;

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: "postgres",
    port: dbConfig.port || 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.User = require("./user.model")(sequelize, Sequelize);
db.Task = require("./task.model")(sequelize, Sequelize);
db.AuditLog = require("./auditLog.model")(sequelize, Sequelize);

// Associations
db.User.hasMany(db.Task);
db.Task.belongsTo(db.User);

module.exports = db;
