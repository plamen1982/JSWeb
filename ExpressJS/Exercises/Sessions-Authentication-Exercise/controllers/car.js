const Car = require('../models/Car');
const Rent = require('../models/Rent');
const User = require('../models/User');

module.exports = {

    addGet: (req, res) => {
        res.render('car/add');
    },
    addPost: (req, res) => {
        res.render('car/add');
    },
    allCars: (req, res) => {
        res.render('car/all');
    },
    rent: (req, res) => {

    },
    editGet: (req, res) => {

    },
    editPost: (req, res) => {

    },
};