const sequelize = require('../config/database');
const User = require('./User');
const Lesson = require('./Lesson');
const Booking = require('./Booking');

// Учитель имеет много занятий
User.hasMany(Lesson, { foreignKey: 'teacherId', as: 'lessons' });
Lesson.belongsTo(User, { foreignKey: 'teacherId', as: 'teacher' });

// Ученик записывается на занятия через таблицу Booking
User.belongsToMany(Lesson, { through: Booking, foreignKey: 'studentId', as: 'bookedLessons' });
Lesson.belongsToMany(User, { through: Booking, foreignKey: 'lessonId', as: 'students' });

// Прямые связи с Booking
Booking.belongsTo(User, { foreignKey: 'studentId', as: 'student' });
Booking.belongsTo(Lesson, { foreignKey: 'lessonId', as: 'lesson' });
User.hasMany(Booking, { foreignKey: 'studentId', as: 'bookings' });
Lesson.hasMany(Booking, { foreignKey: 'lessonId', as: 'bookings' });

module.exports = { sequelize, User, Lesson, Booking };
