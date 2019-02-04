const Car = require('../models/Car');
const Rent = require('../models/Rent');
const User = require('../models/User');

module.exports = {

    addGet: (req, res) => {
        res.render('car/add');
    },
    addPost: (req, res) => {
        //TODO validation for input fields
        const carBody = req.body;
        carBody.pricePerDay = Number(carBody.pricePerDay);

        Car.create(carBody) 
            .then(() => {
                res.redirect('/')
            })
            .catch(console.error)
    },
    allCars: (req, res) => {
        Car.find({})
        .then((cars) => {
            res.render('car/all', { cars });
        })
        .catch(console.error);
    },
    rentGet: (req, res) => {
        const carId = req.params.id;

        Car.findById(carId)
            .then((car) => {
                res.render('car/rent', car);
            })
    },
    rentPost: (req, res) => {
        const carId = req.params.id;
        //req.user is comming from passport.js with the whole user object
        const userId = req.user._id;
        const days = Number(req.body.days);

        Rent.create({
            days,
            user: userId,
            car: carId,
        }).then(() => {
            res.redirect('/car/all');
        }).catch(console.error)
    },
    editGet: (req, res) => {

    },
    editPost: (req, res) => {

    },
};