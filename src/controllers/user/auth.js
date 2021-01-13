const User= require('../../models/user');
const bcrypt =require('bcrypt');
const jwt= require('jsonwebtoken');

// Generate Token
const generateJwtToken = (_id, role) => {
    return jwt.sign({ _id, role }, process.env.JWT_SECRET);
  };

var signUpAction = function(req,res){
User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (user)
      return res.status(400).json({
        error: "User already registered",
      });

    const { firstName, lastName, email, password } = req.body;
    const hash_password = await bcrypt.hash(password, 10);
    const _user = new User({
      firstName,
      lastName,
      email,
      hash_password,
      //username: nanoid(),
    });

    _user.save((error, user) => {
      if (error) {
        return res.status(400).json({
          message: "Something went wrong",
        });
      }

      if (user) {
        const token = generateJwtToken(user._id, user.role);
        const { _id, firstName, lastName, email, role, fullName } = user;
        return res.status(201).json({
          token,
          user: { _id, firstName, lastName, email, role, fullName },
        });
      }
    });
  });
}

var signInAction = function (req,res) {
    User.findOne({ email: req.body.email }).exec(async (error, user) => {
        if (error) return res.status(400).json({ error });
        if (user) {
          const isPassword = await user.authenticate(req.body.password);
          if (isPassword && user.role === "user") {
            // const token = jwt.sign(
            //   { _id: user._id, role: user.role },
            //   process.env.JWT_SECRET,
            //   { expiresIn: "1d" }
            // );
            const token = generateJwtToken(user._id, user.role);
            const { _id, firstName, lastName, email, role, fullName } = user;
            res.status(200).json({
              token,
              user: { _id, firstName, lastName, email, role, fullName },
            });
          } else {
            return res.status(400).json({
              message: "Something went wrong",
            });
          }
        } else {
          return res.status(400).json({ message: "Something went wrong" });
        }
      });
    
}
  module.exports={
      signup: signUpAction,
      signin: signInAction
  };