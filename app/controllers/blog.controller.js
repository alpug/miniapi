const { request } = require("express");
const db = require("../models");
const Blog = db.blog;
const Op = db.Sequelize.Op;

//create and save blogs
exports.create = (req, res) => {
    //validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content invalid."
        });
        return;
    }
    //create a blog
    const blog = {
        title: req.body.title,
        created: req.body.created,
        content: req.body.content,
        public: request.body.public ? req.body.public : false
    }
    //save blog to db
    Blog.create(blog)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Unspecified error occurred while creating this Blog post."
            });
        });
};

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%{title}%` } } : null;
    Blog.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Unspecified error occurred during retrieval of Blog posts."
            })
        })
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Blog.findByPk(id)
        .then(data => {
            if (data) {
            res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find a Blog post with id = ${id}`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Unspecified error occurred updating Blog with id = ${id}`
            })
        })
};

exports.update = (req, res) => {
    const id = req.params.id;
    Blog.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Blog post successfully updated."
                });
            } else {
                res.send({
                    message: `Cannot update Blog with id = ${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Unspecified error updating Blog with id = ${id}`
            })
        })
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Blog.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `Blog with id = ${id} deleted successfully.`
                });
            } else {
                res.send({
                    message: `Cannot delete Blog with id = ${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Unspecified error occurred while trying to delete Blog with id = ${id}`
            });
        });
};

exports.findAllPublic = (req, res) => {
    Blog.findAll({ where: { public: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "Unspecified error occurred retrieving all Blog posts."
            });
        });
};