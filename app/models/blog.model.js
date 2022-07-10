module.exports = (sequelize, Sequelize) => {
    const Blog = sequelize.define("blog", {
      title: {
        type: Sequelize.STRING
      },
      created: {
        type: Sequelize.DATE
      },
      content: {
        type: Sequelize.STRING
      },
      public: {
        type: Sequelize.BOOLEAN
      },
      //Think I'll remove this and create a comments object which is an object array of comment so each comment can link to blog post by post id
      comments: {
        type: Sequelize.ARRAY
      }
    });
    return Blog;
  };