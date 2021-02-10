module.exports = function(sequelize, DataTypes) {
  var Posts = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thoughts: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   autoIncrement: true,
    //   primaryKey: true,
    // },
    // userId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'users',
    //     key: 'id',
    //    } 
    //   },
      
    // category: {
    //   type: DataTypes.STRING,
    //   defaultValue: "Personal"
    // }
  });
  return Posts;
};