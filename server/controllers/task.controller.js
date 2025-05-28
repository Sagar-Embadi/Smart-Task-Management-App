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

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({ where: { id, UserId: req.user.id } });
    if (!task) return res.status(404).json({ error: "Task not found" });

    const oldValue = task.toJSON();

    await task.update(req.body);

    await AuditLog.create({
      action: "UPDATE",
      entity_type: "Task",
      entity_id: task.id,
      old_value: oldValue,
      new_value: task.toJSON(),
      user_id: req.user.id,
    });

    res.json(task);
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({ where: { id, UserId: req.user.id } });
    if (!task) return res.status(404).json({ error: "Task not found" });

    const oldValue = task.toJSON();

    await task.destroy();

    await AuditLog.create({
      action: "DELETE",
      entity_type: "Task",
      entity_id: task.id,
      old_value: oldValue,
      new_value: null,
      user_id: req.user.id,
    });

    res.json({ message: "Task deleted" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
