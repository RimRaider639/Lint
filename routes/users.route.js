const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const authenticate = require("../middlewares/authenticate.middleware");
const isAdmin = require("../middlewares/authorise.middleware");
const saltrounds = 5;

const usersRouter = express.Router();

usersRouter.post("/register", (req, res, next) => {
  const { email, pwd } = req.body;
  User.find({ email })
    .then((r) =>
      r.length
        ? res.status(409).send({ message: "Email already has an account" })
        : bcrypt.hash(pwd, saltrounds, (err, hash) => {
            if (err) next(err);
            User.insertMany([{ ...req.body, pwd: hash }])
              .then((r) =>
                res.send({ message: "User successfully registered" })
              )
              .catch(next);
          })
    )
    .catch(next);
});

usersRouter.post("/login", (req, res, next) => {
  const { email, pwd } = req.body;
  User.find({ email })
    .then((found) => {
      if (!found.length)
        res.status(409).send({ message: "Email is not registered" });
      bcrypt.compare(pwd, found[0].pwd).then((match) => {
        if (match) {
          const token = jwt.sign({ id: found[0]._id }, process.env.KEY);
          res.send({ message: "User successfully logged in", token });
        }
        res
          .status(401)
          .send({ message: "Password does not match the given email" });
      });
    })
    .catch(next);
});

usersRouter.use(authenticate);

usersRouter.get("/", (req, res, next) => {
  User.findById(req.body.userID)
    .then((data) => res.send(data))
    .catch(next);
});

usersRouter.patch("/", (req, res, next) => {
  User.findByIdAndUpdate(req.body.userID)
    .then((_) => res.send({ message: "User account successfully updated" }))
    .catch(next);
});

usersRouter.delete("/:id", (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
    .then((_) => res.send({ message: "User account successfully deleted" }))
    .catch(next);
});

usersRouter.get("/all", isAdmin, (req, res, next) => {
  const { sort, order, page, limit } = req.query;
  User.find(req.query)
    .limit(limit)
    .skip(limit * page)
    .sort({ [sort]: order == "desc" ? -1 : 1 })
    .then((r) => res.send(r))
    .catch(next);
});

module.exports = { usersRouter };
