const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Lesson = sequelize.define('Lesson', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false
  },
  teacherId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  startTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  maxStudents: {
    type: DataTypes.INTEGER,
    defaultValue: 10,
    validate: { min: 1 }
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0
  },
  locationType: {
    type: DataTypes.ENUM('online', 'offline'),
    defaultValue: 'online'
  },
  meetingLink: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.ENUM('scheduled', 'in_progress', 'completed', 'cancelled'),
    defaultValue: 'scheduled'
  }
});

module.exports = Lesson;
