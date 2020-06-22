const bcrypt = require("bcrypt");

module.exports = [
  {
    firstName: "Aguste",
    lastName: "Bumpass",
    email: "abumpass0@businessinsider.com",
    username: "abumpass086",
    password: bcrypt.hashSync("hP9YOx", 8),
    created_at: "2019-11-04 02:01:24",
  },
  {
    firstName: "Ely",
    lastName: "Bullerwell",
    email: "ebullerwell1@reuters.com",
    username: "ebullerwell199",
    password: bcrypt.hashSync("8IIYtNJqK7", 8),
    created_at: "2020-01-18 02:01:24",
  },
  {
    firstName: "Hugibert",
    lastName: "Kimm",
    email: "hkimm2@vistaprint.com",
    username: "hkimm223",
    password: bcrypt.hashSync("YnrOdT", 8),
    created_at: "2020-03-18 02:01:24",
  },
  {
    firstName: "Boris",
    lastName: "Dignall",
    email: "bdignall3@woothemes.com",
    username: "bdignall335",
    password: bcrypt.hashSync("qQZv2gm", 8),
    created_at: "2020-02-20 02:01:24",
  },
  {
    firstName: "Hurlee",
    lastName: "Holbie",
    email: "hholbie4@bloomberg.com",
    username: "hholbie447",
    password: bcrypt.hashSync("pLOetgRI1YwE", 8),
    created_at: "2020-02-23 02:01:24",
  },
];
