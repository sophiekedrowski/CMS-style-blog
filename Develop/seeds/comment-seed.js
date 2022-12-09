const { Comments } = require('../models');

const commentdata = [
    {
        "user_id": 12,
        "post_id":11,
        "comment":"Nice",
    },
    {
        "user_id": 13,
        "post_id":19,
        "comment":"Sick!",
    },
    {
        "user_id": 14,
        "post_id":30,
        "comment":"Welcome!",
    }
]

const seedComments = () => Comments.bulkCreate(commentdata);

module.exports = seedComments;