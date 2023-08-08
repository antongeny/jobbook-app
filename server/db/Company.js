const { STRING, TEXT } = require("sequelize");
const db = require("./db");
const { UUID, UUIDV4 } = db.Sequelize;

const Company = db.define("company",{
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  companyName: {
    type: STRING,
    allowNull: true,
  },
  linkedIn: {
    type: STRING,
    allowNull: true,
    validate: {
      isUrl: true
    },
  },
  website: {
    type: STRING,
    unique: true,
    allowNull: true,
    validate: {
      isUrl: true
		}
  },
  notes: {
    type: TEXT,
    allowNull: true,
  },
})

module.exports = Company;