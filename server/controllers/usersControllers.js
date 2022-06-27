
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { userValidation } = require("../validation/userValidation");
require("../passportConfig");
const bcrypt = require("bcrypt");
require("dotenv").config();
function signToken(userID) {

  return jwt.sign(
    {
      iss: "moonServer",
      sub: userID,
    },
    process.env.PRIVATE_KEY,
    { expiresIn: "1h" }
  );
}

module.exports = {

  register: (req, res) => {
    const { email, password, role } = req.body;

    const { error } = userValidation(req.body);

    if (error)
    return res.status(422).json({
        success: false,
        errors: error,
        message: 'user data validation error'
    })

    else {

      userModel.findOne({ email }, function (err, user) {

        if (err) return res.status(500).json({ msg: err.message, error: true });

        if (user)
            return res.status(422).json({
                message: "user with this email is already exist!",
                errors: {
                    details: [
                        {

                            "path": [
                                "email"
                            ],
                            "message": [
                                "email déja utilisé"
                            ]
                        }
                    ]
                }
            })

        else {

          const newUser = new userModel(req.body);
            (newUser.email = req.body.email),
            (newUser.password = req.body.password),
            (newUser.confirmPassword = req.body.confirmPassword),
            (newUser.prenom = req.body.prenom),
            (newUser.nom_famille = req.body.nom_famille),
            (newUser.gouvernorat = req.body.gouvernorat),
            // (newUser.code_postal = req.body.code_postal),
            // (newUser.date_naissance = req.body.date_naissance),
            (newUser.groupe_sanguin = req.body.groupe_sanguin),
            (newUser.tel = req.body.tel),

            newUser.save((err, user) => {
              if (err)
                return res.status(500).json({ msg: err.message, error: true });
              else {
                return res.status(200).json({
                  isAuthenticated: true,
                  user: { email, role },
                  error: false,
                });
              }
            });
        }
      });
    }
  },

  login: (req, res) => {
    const { _id, email, role } = req.user;
    const token = signToken(_id);
    console.log("eeeeeeeeeeeee", req.body);
    res.cookie("access_token", token, {
      maxAge: 3600 * 1000,
      httpOnly: true,
      sameSite: true,
    });

    return res
      .status(200)
      .json({ isAuthenticated: true, user: { email, role, _id } });
  },
  //Admin and normal user can access
  protectedData: function (req, res) {
    return res.status(200).json({ data: "Protected data...hehehe" });
  },

  //only Admin can access
  AdminprotecteData: function (req, res) {
    const { role } = req.user;
    if (role === "admin")
      return res.status(200).json({ data: "Admin Protected data...hehehe" });

    return res.status(403).json({ data: "" });
  },

  //Check auth status everytime front-end app refreshes
  authenticated: function (req, res) {
    const {
      email,
      _id,
      role,
      avatar,
      nom_famille,
      prenom,
      tel,
      gouvernorat,
      password,
      groupe_sanguin
    } = req.user;
    return res.status(200).json({
      isAuthenticated: true,
      user: {
        email,
        _id,
        role,
        avatar,
        nom_famille,
        prenom,
        tel,
        gouvernorat,
        password,
        groupe_sanguin
      },
    });
  },

  logout: (req, res) => {
    res.clearCookie("access_token");
    return res
      .status(200)
      .json({ success: true, user: { email: "", role: "" } });
  },

  getAllUsers: function (req, res) {
    userModel.find({}, (err, users) => {
      if (err) {
        res.json({
          message: "error get all users" + err,
          data: null,
          status: 500,
        });
      } else {
        res.json({
          message: "all users in system",
          size: users.length,
          data: users,
          status: 200,
        });
      }
    });
  },

  getUserById: function (req, res) {
    userModel
      .findById({ _id: req.params.id })

      .exec((err, user) => {
        if (err) {
          res.json({
            message: "error get one user" + err,
            data: null,
            status: 500,
          });
        } else {
          res.json({ message: " user in system", data: user, status: 200 });
        }
      });
  },

  getUserbyRole: function (req, res) {
    userModel.find({ role: req.params.role }, function (err, user) {
      if (err) {
        res.json({
          message: "error get one User" + err,
          data: null,
          status: 500,
        });
      } else {
        res.json({ message: "User in system", data: user, status: 200 });
      }
    });
  },

  deleteUserById: function (req, res) {
    userModel.findByIdAndDelete({ _id: req.params.id }, (err, User) => {
      if (err) {
        res.json({
          message: "error delete  one User" + err,
          data: null,
          status: 500,
        });
      } else {
        res.json({
          message: "one User delete system",
          data: User,
          status: 200,
        });
      }
    });
  },

  updateuserById: async function (req, res) {

    const passwordhash = await bcrypt.hash(req.body.password, 10) // cryptage password 

         req.body.password = passwordhash

    userModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true },function (err, user) {
      
        if (err) {
          res.json({
            message: "error update  user by id " + err,
            data: null,
            status: 500,
          });
        } else {
          res.json({
            message: "user updated successufly",
            data: user,
            status: 200,
          });
        }
      }
    );
  },

  
  uploadavatar: (req, res) => {
    const data = {
      avatar: req.file.filename,
    };

    console.log("fiiiiiiilllleee", req.file);

    if (
      req.file.mimetype === "image/jpeg" ||
      req.file.mimetype === "image/png"
    ) {
      userModel.findByIdAndUpdate({ _id: req.params.id }, data, (err, user) => {
        if (err) {
          res.status(500).json({ message: "avatar not uploaded" });
        } else {
          userModel.findById({ _id: user.id }, (err, user) => {
            if (err) {
              res.json("error");
            } else {
              res.status(200).json({
                message: "user updated",
                data: user,
              });
            }
          });
        }
      });
    } else {
      res.json({ msg: "please enter a valid extention" });
    }
  },
};
