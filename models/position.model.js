import Sequelize from 'sequelize'
import { sequelize } from '../db/dbConnect.js'

const Position = sequelize.define(
  'position',
  {
    position_id: {
      primaryKey: true,
      autoincrement: true,
      type: Sequelize.INTEGER,
      allowNull: true
    },
    position_name: {
      type: Sequelize.STRING(255),
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'position',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        fields: [{ name: 'position_id' }]
      }
    ]
  }
)

export default Position
