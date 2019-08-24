const { STRING, DATE } = require("sequelize");
const db = require("../db.js");

const Session = db.define("Session", {
  sid: {
    type: STRING,
    primaryKey: true
  },
  expires: {
    type: DATE
  },
  data: {
    type: STRING
  }
});

module.exports = Session;
