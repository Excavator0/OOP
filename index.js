const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cars', 'root', 'superpass100', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Подключение успешно установлено.');
  })
  .catch((error) => {
    console.error('Ошибка подключения:', error);
  });
  
const Car = sequelize.define('Car', {
  CarID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  Brand: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Model: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Color: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  HorsePower: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

sequelize.sync()
  .then(() => {
    console.log('Модель синхронизирована с базой данных.');
  })
  .catch((error) => {
    console.error('Ошибка синхронизации модели:', error);
  });

