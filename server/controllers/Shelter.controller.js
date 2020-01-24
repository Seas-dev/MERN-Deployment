const Shelter = require('../models/Shelter.model');

class ShelterController {
    // add query methods here
    index(req,res) {
        res.json({
            msg: "Hello Pet Shelter!",
        });
    }

    createPet(req,res) {
        let newPet = new Shelter(req.body)
        newPet.save()
            .then(() => res.json({msg: 'pet created'}))
            .catch(err => res.json(err));
    }

    all(req,res) {
        Shelter.find({}).sort({"type":1}).exec()
            .then(pets => res.json(pets))
            .catch(err => res.json(err));
    }

    petInfo(req,res) {
        Shelter.findOne({_id: req.params._id})
            .then(pet => res.json(pet))
            .catch(err => res.json(err));
    }

    updatePet(req,res) {
        Shelter.updateOne({_id: req.params._id}, req.body, {runValidators: true})
            .then(upPet => res.json(upPet))
            .catch(err => res.json(err));
    }

    adoptPet(req,res) {
        Shelter.deleteOne({_id: req.params._id})
            .then(delConf => res.json(delConf))
            .catch(err => res.json(err)); 
    }

    increaseLikes(req,res) {
        Shelter.updateOne({_id: req.params._id}, {$inc:{likes:1}})
            .then(() => res.json({msg:"pet liked"}))
            .catch(err => res.json(err));
    }

}

module.exports = new ShelterController();