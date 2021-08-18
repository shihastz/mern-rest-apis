import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [];

//all are starting with users
router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  const userId = uuidv4();

  const userWithId = { ...user, id: userId };

  users.push(userWithId);
  res.send(req.body);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const findUser = users.find((user) => user.id === id);

  res.send(findUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id != id);

  res.send("user deleted");
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;

  const { firstName, secondName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) {
    user.firstName = firstName;
  }
  if (secondName) {
    user.secondName = secondName;
  }
  if (age) {
    user.age = age;
  }

  res.send("user updated");
});

export default router;
