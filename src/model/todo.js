const { DataTypes } = require('sequelize');
const sequelize = require('../database/pgconfig'); 

const Todo = sequelize.define('Todo', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Todo;
