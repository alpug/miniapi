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
        public: request.body.public
    }
};

exports.findAll = (req, res) => {

};

exports.findOne = (rqe, res) => {

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.findAllPublic = (req, res) => {

};