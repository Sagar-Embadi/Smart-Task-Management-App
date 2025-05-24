const { Task, AuditLog } = require("../models");

exports.getAll = async (req, res) => {
  const tasks = await Task.findAll({ where: { UserId: req.user.id } });
  res.json(tasks);
};

exports.create = async (req, res) => {
  const task = await Task.create({ ...req.body, UserId: req.user.id });
  await AuditLog.create({
    action: "CREATE",
    entity_type: "Task",
    entity_id: task.id,
    new_value: task.toJSON(),
    user_id: req.user.id,
  });
  res.json(task);
};
