import Sequelize from 'sequelize'
import { sequelize } from '../db/dbConnect.js'

const Users = sequelize.define(
  'users',
  {
    user_id: {
      primaryKey: true,
      autoincrement: true,
      type: Sequelize.INTEGER,
      allowNull: true
    },
    user_name: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    user_email: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    user_password: {
      type: Sequelize.STRING(255),
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        fields: [{ name: 'user_id' }]
      }
    ]
  }
)

export default Users
