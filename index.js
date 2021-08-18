import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json()); //using json in whole application

app.listen(PORT, () => console.log("welcome")); //callback function after server is loaded

app.get("/", (req, res) => {
  res.send("homepageee");
});

app.use("/users", usersRoutes);
