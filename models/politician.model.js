import Sequelize from 'sequelize'
import { sequelize } from '../db/dbConnect.js'

const Politician = sequelize.define(
  'politician',
  {
    politician_id: {
      primaryKey: true,
      autoincrement: true,
      type: Sequelize.INTEGER,
      allowNull: true
    },
    politician_name: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    politician_party: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    position: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    votes: {
      type: Sequelize.INTEGER(255),
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'politician',
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

export default Politician
