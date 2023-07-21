import User from "../modal/userschema.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(email);
  const isEmail = await User.findOne({ email });
  if (isEmail) return res.status(500).send("email already exist");
  const user = new User({ name, email, password });

  User.create(user);
  res.json({
    status: "success",
    data: user,
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const isEmail = await User.findOne({ email });
  console.log(isEmail);
  if (!isEmail) return res.status(500).send("email not found");
  if (isEmail.password !== password)
    return res.status(500).send("password incorrect");
  const secretKey = crypto.randomBytes(32).toString("hex");
  const token = jwt.sign({ email }, secretKey, {
    expiresIn: "1d",
  });
  res.json({
    status: "success",
    data: isEmail,
    token,
  });
};
