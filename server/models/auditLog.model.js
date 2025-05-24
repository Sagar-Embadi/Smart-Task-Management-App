module.exports = (sequelize, DataTypes) => {
  return sequelize.define("AuditLog", {
    action: DataTypes.STRING,
    entity_type: DataTypes.STRING,
    entity_id: DataTypes.INTEGER,
    old_value: DataTypes.JSONB,
    new_value: DataTypes.JSONB,
    user_id: DataTypes.INTEGER,
  });
};
