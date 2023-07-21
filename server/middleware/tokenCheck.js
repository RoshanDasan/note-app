import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const secretKey =
    "be0692b67ba270b4f1e2ed3f604c5be27098f2266aaa04d42939dcd8124acd95";
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) throw new Error("token not found");
    try {
      const payload = jwt.verify(token, secretKey);
      if (!payload) throw new Error("verification failed");
      next()
    } catch (error) {
      throw new Error(error);
    }
  }
};
