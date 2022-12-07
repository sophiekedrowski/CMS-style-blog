const { Posts } = require('../models');

const postdata = [
    {
        "id": "11",
        "title":"My first blog post!",
        "content":"This is a paragraph about my first blog post",
        "date_created":"Insert date here"
    },
    {
        "id": "19",
        "title":"My second blog post!",
        "content":"This is a paragraph about my first blog post",
        "date_created":"Insert date here"
    },
    {
        "id": "30",
        "title":"My third blog post!",
        "content":"This is a paragraph about my first blog post",
        "date_created":"Insert date here"
    }
]

const seedPosts = () => Posts.bulkCreate(postdata);

module.exports = seedPosts;