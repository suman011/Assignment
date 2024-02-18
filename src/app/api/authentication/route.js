import User from "@/models/user";
import bcrypt from "bcryptjs";
import Connection from "@/app/database/config";

Connection();

export const POST = async (req, res, next) => {
  try {
    const body = await req.json();

    const { email, password } = body;

    if (!email || !password) {
      return res.send({
        message: "email and password is required",
        status: 401,
      });
    }

    const user = await User.findOne({ email: email });
    if (user) {
      return res.send({ message: "user already exists", status: 400 });
    }

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email: email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.send({ message: "login successful", status: 200 });
  } catch (error) {
    console.log(error);
  }
};
