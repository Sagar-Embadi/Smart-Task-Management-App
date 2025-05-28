const bcrypt = require("bcryptjs");
const { User } = require("../models");
const { generateToken } = require("../utils/jwt");

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const ifUserExist = await User.findOne({ where: { email } });
  if(ifUserExist){
    return res.status(400).json("User Already Exist")
  } 
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hash , role});
  return res.json({ token: generateToken(user) });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if(!user.is_active){
    return res.status(400).json({error: "Accout is Deactivated"});
  }
  if (!user){
    return res.status(401).json({ error: "User Not Found" });
  }
  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  res.json({ token: generateToken(user), user });
};

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll({
    attributes: ["id", "name", "email", "is_active",'role']
  });
  res.json(users);
};

exports.updateUserStatus = async (req, res) => {
  const { id } = req.params;
  const { active } = req.body;

  const user = await User.findByPk(id);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.is_active = active;
  await user.save();

  res.json({ message: "Status updated", user });
};