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
      }
    });
    return Blog;
  };