import express from "express";

const port = 3200;

const app = express();

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

app.get("/tiles", (req, res) => {
  res.send({ test: 1 });
});
