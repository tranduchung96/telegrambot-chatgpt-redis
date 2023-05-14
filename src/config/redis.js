const redis = require('redis');
const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379
});
console.log("Starting redis");
module.exports = redisClient;
