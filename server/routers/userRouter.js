const Route = require("express").Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

require("../passportConfig");
const upload = require("../midleWare/uploadFile");
const userController = require("../controllers/usersControllers");

Route.post("/register", userController.register);
Route.post(
  "/login",
  passport.authenticate("local", { session: false }),
  userController.login
);

Route.get(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  userController.logout
);
Route.get(
  "/allUser",
  passport.authenticate("jwt", { session: false }),
  userController.getAllUsers
);

Route.get(
  "/getUserbyid/:id",
  passport.authenticate("jwt", { session: false }),
  userController.getUserById
);
Route.get(
  "/getUserbyrole/:role",
 
  userController.getUserbyRole
);
Route.delete(
  "/deleteUserbyid/:id",
 
  userController.deleteUserById
);

//Admin and normal user can access
Route.get(
  "/protectedData",
  passport.authenticate("jwt", { session: false }),
  userController.protectedData
);
//only Admin can access
Route.get(
  "/admin/protectedData",
  passport.authenticate("jwt", { session: false }),
  userController.AdminprotecteData
);

//Check auth status everytime front-end app refreshes
Route.get(
  "/authenticated",
  passport.authenticate("jwt", { session: false }),
  userController.authenticated
);
Route.put("/avatar/:id", upload.single("avatar"), userController.uploadavatar);
Route.put("/update/:id", userController.updateuserById);

module.exports = Route;
