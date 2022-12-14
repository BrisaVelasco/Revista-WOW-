const News = require("../models/News");
const express = require("express");
const newsRouter = express.Router();

newsRouter.get("/", (req, res, next) => {
  const emotion = [
    "Alegria",
    "Tristeza",
    "Misterio",
    "Reflexion",
    "Naturaleza",
    "Diversion",
    "Paz",
    "Amor",
    "Pasion",
    "Accion",
  ];
  const promises = emotion.map((sentiment) => {
    return News.find({ emotion: sentiment })
      .then((result) => {
        const shuffled = result.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
      })
      .catch((err) => console.error);
  });
  Promise.all(promises)
    .then((result) => res.send(result))
    .catch((err) => console.error);
});

newsRouter.get("/newses", (req, res, next) => {
  News.find({})
    .then((data) => {
      res.send(data);
    })
    .catch(next);
});

newsRouter.get("/:id", (req, res, next)=>{
    const {id}=req.params
    News.findById(id)
    .then((data) => {
        res.send(data);
      })
      .catch(next);
})

module.exports = newsRouter;