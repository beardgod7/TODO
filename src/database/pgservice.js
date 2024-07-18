const sequelize = require('./pgconfig')
const syncDatabase=async()=> {
    try {
      await sequelize.sync();
      console.log('Database synchronized.');
    } catch (error) {
      console.error('Database synchronization failed:', error);
    }
  }
  module.exports=  syncDatabase