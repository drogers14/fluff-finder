const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//router.route('/add').post((req, res) => {
    router.post('/add', (req, res) => {
    const username = req.body.username;
    const fullName = req.body.fullName;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({username, fullName, email, password});

    console.log(newUser);
    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;