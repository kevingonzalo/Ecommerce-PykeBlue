import bcrypt from "bcrypt";

const login = async (req, res) => {
  const { email, pass } = await req.body;
  res.json(email);
};

export default login;
