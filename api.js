import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/random", (req, res) => {
  var randomNumber = Math.floor(Math.random() * music.length);
  res.json(music[randomNumber]);
});

app.get('/all' , (req , res)=>{
  res.json(music);
})

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);

var music = [
  {
    id: 1,
    title: "Lose Yourself",
    singer: "Eminem",
    image: "images/lose_yourself.jpg",
    music: "sounds/Lose Yourself.mp3",
  },
  {
    id: 2,
    title: "Espresso",
    singer: "Sabrina Carpenter",
    image: "images/espresso.jpg",
    music: "sounds/Espresso.mp3",
  },
  {
    id: 3,
    title: "ERE",
    singer: "JK Labajo",
    image: "images/ere.jpg",
    music: "sounds/ERE.mp3",
  },
  {
    id: 4,
    title: "Versace on the floor",
    singer: "Bruno Mars",
    image: "images/versace_on_the_floor.jpg",
    music: "sounds/Versace on the Floor.mp3",
  },
  {
    id: 5,
    title: "Love",
    singer: "Keyshia Cole",
    image: "images/love.jpg",
    music: "sounds/Love.mp3",
  },
];
