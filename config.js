const {
  conform,
  boolean: makeBoolean,
  string: makeString
} = require("dotenv-utils");

const dotenv = require("dotenv");
dotenv.load();

const schema = {
  NODE_ENV: makeString,
  PORT: makeString
};

const config = conform(process.env, schema);

module.exports = config;