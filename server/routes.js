const Shelter = require('./controllers/Shelter.controller');

module.exports = app => {
    // add routes here
    app.get("/api", Shelter.index);
    app.post("/api/newPet", Shelter.createPet);
    app.get("/api/pets", Shelter.all);
    app.get("/api/pets/:_id", Shelter.petInfo);
    app.put("/api/pets/:_id", Shelter.updatePet);
    app.delete("/api/pets/:_id", Shelter.adoptPet);
    app.put("/api/like/:_id", Shelter.increaseLikes);
}