require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./src/models');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Сервер работает! 🚀' });
});

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Подключение к PostgreSQL успешно');
    await sequelize.sync({ alter: true });
    console.log('Таблицы в базк данных созданы/обновлены');

    app.listen(PORT,'0.0.0.0', () => {
      console.log(`Сервер запущен: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Ошибка:', error.message);
    process.exit(1);
  }
})();
