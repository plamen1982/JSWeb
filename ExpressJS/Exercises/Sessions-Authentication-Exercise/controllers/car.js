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
    rent: (req, res) => {

    },
    editGet: (req, res) => {

    },
    editPost: (req, res) => {

    },
};