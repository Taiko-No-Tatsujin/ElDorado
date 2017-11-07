const env = require('./env.json');

exports = module.exports = env[process.env.NODE_ENV || 'local']