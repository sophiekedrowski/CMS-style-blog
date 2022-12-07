const { Users } = require('../models');

const userdata = [
    {
        "id": "12",
        "username": "SuperCool",
        "password": "thecoolestpassword99"
    },
    {
        "id": "13",
        "username": "FunUserz",
        "password": "thefunnestpassword67"
    },
    {
        "id": "12",
        "username": "ThenewestUser",
        "password": "cantthinkofapassword123"
    }
]

const seedUsers = () => Users.bulkCreate(userdata);

module.exports = seedUsers;