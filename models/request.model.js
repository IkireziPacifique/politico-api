import Sequelize from 'sequelize'
import { sequelize } from '../db/dbConnect.js'

const Requests = sequelize.define(
  'requests',
  {
    request_id: {
      primaryKey: true,
      autoincrement: true,
      type: Sequelize.INTEGER,
      allowNull: true
    },
    requester_name: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    party: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    position: {
      type: Sequelize.STRING(255),
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'requests',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        fields: [{ name: 'request_id' }]
      }
    ]
  }
)

export default Requests
