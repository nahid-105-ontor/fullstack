require("dotenv").config();
const express = require("express");
const app = express();
// const cors = require("cors");
const port = process.env.PORT;
// app.use(
//   cors({
//     origin: process.env.FRONTEND,
//   }),
// );

app.get("/", (req, res) => {
  res.send("Hello I am Working Fine");
});
app.get("/twitter", (req, res) => {
  res.send("Hello I am twitter Route");
});
app.get("/instagram", (req, res) => {
  res.send("Hello I am Instagram Route");
});
app.get("/facebook", (req, res) => {
  res.send("This is your Facebook Page");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A Joke",
      content: "This Is a Joke",
    },
    {
      id: 2,
      title: "Another Jokes",
      content: "This Is Second Jokes",
    },
    {
      id: 3,
      title: "Third Jokes",
      content: "This is Third Jokes",
    },
    {
      id: 4,
      title: "Fouthy Jokes",
      content: "This is My Fouthy Jokes",
    },
    {
      id: 5,
      title: "Fifth Jokes",
      content: "This Is My fifth Jokes",
    },
  ];

  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server is Running At Port ${port}`);
});
