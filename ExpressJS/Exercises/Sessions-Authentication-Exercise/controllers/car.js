const Car = require('../models/Car');
const Rent = require('../models/Rent');
const User = require('../models/User');

module.exports = {
    addCarGet: (req, res) => {
        res.render('car/add');
    },
    allCarsGet: (req, res) => {
        res.render('car/all');
    },
    rentCarDetals: (req, res) => {

    },
    rentCar: (req, res) => {

    },
    myRentedCars: (req, res) => {

    },
    editedCarView: (req, res) => {

    },
    editedCar: (req, res) => {

    },
};