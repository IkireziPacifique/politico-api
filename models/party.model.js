import Sequelize from 'sequelize'
import { sequelize } from '../db/dbConnect.js'

const Party = sequelize.define(
  'parties',
  {
    party_id: {
      primaryKey: true,
      autoincrement: true,
      type: Sequelize.INTEGER,
      allowNull: true
    },
    party_name: {
      type: Sequelize.STRING(255),
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'parties',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        fields: [{ name: 'party_id' }]
      }
    ]
  }
)
export default Party
