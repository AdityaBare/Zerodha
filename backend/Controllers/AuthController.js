const User = require("../model/UserModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, phone } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists", success: false });
    }

    const user = await User.create({ email, password, username, phone });
    const token = createSecretToken(user._id);

    res.cookie( "token", token, {
      withCredentials: true,
      httpOnly: true,
      maxAge:60* 60 * 1000,
       sameSite: "None"
    });
    res.cookie("email", email, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge:60* 60 * 1000,
    });

    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    res.json(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password, phone } = req.body;
    if (!email || !password || !phone) {
      return res.json({ message: "All fields are required" ,success:false});
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email",success:false });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" ,success:false  });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      maxAge:60* 60 * 1000,
       sameSite: "None"

    });
    res.cookie("email", email, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge:60* 60 * 1000,
    });
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
    next();
  } catch (error) {
    console.error(error);
  }
};
