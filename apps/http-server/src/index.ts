import express from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    const response = await client.user.create({
      data: {
        username,
        password,
      },
    });

    res.json({
      message: "Signup success!",
      id: response.id,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: err,
    });
  }
});

app.listen(3001);
