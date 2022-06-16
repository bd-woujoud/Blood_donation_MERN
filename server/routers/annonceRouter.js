
const annonceController = require("../Controllers/annonceController");
const express = require("express");
const route = express.Router();

route.post("/createAnnonce", annonceController.createAnnonce);
route.put("/updateAnnonce/:id", annonceController.updateAnnonce);
route.delete("/deleteAnnonce/:id", annonceController.deleteAnnonce);
route.get("/getAllAnnonce", annonceController.getAllAnnonce);
route.get("/getByIdAnnonce/:id", annonceController.getAnnonceById);
route.get("/getByUserId/:id", annonceController.getAnnonceByUserId);
route.get('/search',annonceController.Searchannonce)

module.exports = route;
