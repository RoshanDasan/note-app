import User from "../modal/userschema.js";
import jwt from "jsonwebtoken";

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
  const secretKey = "be0692b67ba270b4f1e2ed3f604c5be27098f2266aaa04d42939dcd8124acd95"
  const { email, password } = req.body;
  const isEmail = await User.findOne({ email });
  console.log(isEmail);
  if (!isEmail) return res.status(500).send("email not found");
  if (isEmail.password !== password)
    return res.status(500).send("password incorrect");
  console.log(secretKey);
  const token = jwt.sign({ email }, secretKey, {
    expiresIn: "1d",
  });
  res.json({
    status: "success",
    data: isEmail,
    token,
  });
};
