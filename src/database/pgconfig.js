const Sequelize = require('sequelize');

const sequelize= new Sequelize({
    dialect: 'postgres',
    host:'localhost',
    port:5432, 
    username:'postgres',
    password:'francis',
    database:'ibenefit1.0',
    define: {
      underscored: true, 
    },
    pool: {
      max: 50000,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
module.exports=sequelize