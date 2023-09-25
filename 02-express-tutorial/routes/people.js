const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPeople,
  createPersonInsomnia,
  updatePerson,
  deletePerson,
} = require("../controller/people");

router.get("/", getPeople);

router.post("/", createPeople);

router.post("/insomnia", createPersonInsomnia);

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);

module.exports = router;
