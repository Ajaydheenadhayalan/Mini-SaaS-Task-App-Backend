const { Sequelize } = require('sequelize');
require('dotenv').config();

const dbConfig = process.env.DATABASE_URL 
  ? {
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    }
  : {
      host: process.env.DB_HOST,
      dialect: 'postgres',
      logging: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    };

const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL, dbConfig)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, dbConfig);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ PostgreSQL connected via Sequelize');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error.message);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
