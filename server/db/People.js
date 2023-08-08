const { STRING } = require("sequelize");
const db = require("./db");
const { UUID, UUIDV4 } = db.Sequelize;

const People = db.define("people",{
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  firstName: {
    type: STRING,
    allowNull: true,
  },
  lastName: {
    type: STRING,
    allowNull: true,
  },
  email: {
    type: STRING,
    allowNull: true,
    validate: {
      isEmail: true,
    },
  },
  phoneNumber: {
    type: STRING,
    allowNull: true,
  },
  linkedin: {
    type: STRING,
    unique: true,
    allowNull: true,
    validate: {
      isUrl: true
		}
  },
})

module.exports = People;