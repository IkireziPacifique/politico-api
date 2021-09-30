import Sequelize from 'sequelize'
import { sequelize } from '../db/dbConnect.js'

const Admin = sequelize.define(
  'admin',
  {
    admin_id: {
      primaryKey: true,
      autoincrement: true,
      type: Sequelize.INTEGER,
      allowNull: true
    },
    admin_email: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    admin_password: {
      type: Sequelize.STRING(255),
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'admin',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        fields: [{ name: 'admin_id' }]
      }
    ]
  }
)

export default Admin
