const Sequelize = require('sequelize')
const db = require('../db/database')
const Department = require('../models/Department')

const Group = db.define('group', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    },
    department_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'departments',
            key: 'id'
        }
    }
})

module.exports = Group