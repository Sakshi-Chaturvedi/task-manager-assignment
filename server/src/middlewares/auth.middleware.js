const jwt = require("jsonwebtoken");

exports.isAuth = (req, res, next) => {
  try {
    // token cookie se lo
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ msg: "No token provided" });
    }

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // user data attach karo request me
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ msg: "Invalid or expired token" });
  }
};