module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Task", {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    category: DataTypes.STRING,
    due_date: DataTypes.DATEONLY,
    status: { type: DataTypes.STRING, defaultValue: "pending" },
  });
};
