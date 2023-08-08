const db = require("./db");
const Date = require("./Date");
const User = require("./User");
const People = require("./people");
const JobApplication = require("./JobApplication");
const Company = require("./Company");


//Company Associations
Company.hasMany(People);
People.belongsTo(Company);


//User Associatons
User.hasMany(People);
People.belongsTo(User);

User.hasMany(Date);
Date.belongsTo(User);

User.hasMany(Company);
Company.belongsTo(User);

User.hasMany(JobApplication);
JobApplication.belongsTo(User);

//Date Associations
Date.hasMany(JobApplication)
JobApplication.belongsTo(Date);

People.hasMany(Date);
Date.belongsToMany(People, {through: "reachouts"});

//Company Associations
Company.hasMany(People);
People.belongsTo(Company);

Company.hasMany(JobApplication);
JobApplication.belongsTo(Company);


module.exports = { User, People, Company, Date, JobApplication,
};