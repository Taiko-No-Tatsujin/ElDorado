const env = require('./env.json');
exports = module.exports = env[typeof process.env.NODE_ENV =="undefined"? process.env.NODE_ENV:'local'];