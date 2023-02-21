const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user.model");
const saltrounds = 5;

const usersRouter = express.Router();

usersRouter.get("/", (req, res, next) => {
  User.find(req.query)
    .then((r) => res.send(r))
    .catch(next);
});

usersRouter.post("/register", (req, res, next) => {
  const { email, pwd } = req.body;
  User.find({ email })
    .then((r) =>
      r.length
        ? next(new Error("Email already has an account"))
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
      if (!found.length) next(new Error("Email is not registered"));
      bcrypt.compare(pwd, found[0].pwd).then((match) => {
        if (match) {
          const token = jwt.sign({ id: found[0]._id }, process.env.KEY);
          res.send({ message: "User successfully logged in", token });
        }
        next(new Error("Password does not match the given email"));
      });
    })
    .catch(next);
});

module.exports = { usersRouter };
