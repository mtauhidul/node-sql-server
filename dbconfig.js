require('dotenv').config();

const { USER, PASSWORD, SERVER, DATABASE, PORT, INSTANCE_NAME } = process.env;

const config = {
  user: USER,
  password: PASSWORD,
  server: SERVER,
  database: DATABASE,
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    instancename: INSTANCE_NAME,
  },
  port: PORT,
};

module.exports = config;
