const { Comments } = require('../models');

const commentdata = [
    {
        "id": "11",
        "comment":"Nice",
    },
    {
        "id": "11",
        "comment":"Sick!",
    },
    {
        "id": "11",
        "comment":"Welcome!",
    }
]

const seedComments = () => Comments.bulkCreate(commentdata);

module.exports = seedComments;