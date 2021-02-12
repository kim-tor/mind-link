module.exports = function(sequelize, DataTypes) {
 // in the sample I referenced this was green, but mine isn't, I'm missing something ...
    var Article = sequelize.define("Article", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
      },
      link: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
      },
     summary: {
          type: DataTypes.STRING,
          required: true
      }

    });
    return Article;
  };