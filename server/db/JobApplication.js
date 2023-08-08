const { DATE, STRING, TEXT } = require("sequelize");
const db = require("./db");
const {UUID, UUIDV4 } = db.Sequelize;

const JobApplication = db.define("jobApplication",{
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  status:{
    type: STRING,
    allowNull: true,
  },
  url: {
    type: STRING,
    allowNull: true,
    validate:{
      isURL: true
    }
  },
  notes: {
    type: TEXT,
    allowNull: true,
  },
})

module.exports = JobApplication;