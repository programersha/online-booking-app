const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  studentId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  lessonId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('pending', 'confirmed', 'cancelled', 'attended', 'no_show'),
    defaultValue: 'confirmed'
  },
  notes: {
    type: DataTypes.TEXT
  },
  cancelledAt: {
    type: DataTypes.DATE
  },
  cancelReason: {
    type: DataTypes.STRING
  }
}, {
  indexes: [
    {
      unique: true,
      fields: ['studentId', 'lessonId']
    }
  ]
});

module.exports = Booking;
