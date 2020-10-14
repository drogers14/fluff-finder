const router = require('express').Router();
let Pet = require('../models/pet.model');

router.route('/').get((req, res) => {
    console.log('in PETS get')
    Pet.find()
    .then(pets => {
        res.json(pets)
    console.log(pets)
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//router.route('/plus').post((req, res) => {
    router.post('/plus', (req, res) => {
        console.log('pls pls');
    const name = req.body.name;
    const size = req.body.size;
    const species = req.body.species;
    const breed = req.body.breed;
    const location = req.body.location;
    const comments = req.body.comments;
    const date = req.body.date;

    console.log('date: ', date)
    const newPet = new Pet({name, size, species, breed, location, comments, date});

    console.log(newPet);
    newPet.save()
    .then(() => res.json('Pet added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;