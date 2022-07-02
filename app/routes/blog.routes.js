module.exports = app => {
    const blogs = require("../controllers/blog.controller");//maybe add .js
    var router = require("express").Router();
    //Create new Blog
    router.post("/blog", blogs.create);
    //Retrieve all public Blog posts
    router.get("/blogs", blogs.findAll);
    //Retrieve all Blog posts
    router.get("/allBlogs", blogs.findAllPublic);
    //Retrieve a single Blog post using id
    router.get("/blog/:id", blogs.findOne)
    //Update a Blog post using id
    router.put("/blog/:id", blogs.update)
    //Delete a Blog post using id
    router.delete("/blog/:id", blogs.delete)
}