import axios from "axios";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_KEY = "http://localhost:4000";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_KEY + "/random");
    const result = response.data;
    console.log(result.music);
    res.render("index.ejs", {
      title: result.title,
      singer: result.singer,
      image: result.image,
      music: result.music,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
