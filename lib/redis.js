var Promise = require('bluebird')
var env = process.env.NODE_ENV || 'development'
var config = require(__dirname + '/../config/config.json')[env]
var redis = require('redis')

Promise.promisifyAll(redis.RedisClient.prototype)
Promise.promisifyAll(redis.Multi.prototype)

var getRedisClient = function () {
  var redis_options = {
    host: config.redis.host,
    port: config.redis.port
  }
  var redis_client = redis.createClient(redis_options)
  redis_client.on('error', function (err) {
    console.log(config.redis, 'RedisError', err)
  })
  return redis_client
}

var redis_client = getRedisClient()
var redis_pub = getRedisClient()
var redis_sub = getRedisClient()

if (config.redis.password !== '') {
  redis_client.auth(config.redis.password)
  redis_pub.auth(config.redis.password)
  redis_sub.auth(config.redis.password)
}

module.exports = {
  redis: redis_client,
  redis_pub: redis_pub,
  redis_sub: redis_sub
}
