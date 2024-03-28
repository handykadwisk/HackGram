const Redis = require('ioredis');

const redis = new Redis({
    port: 14252,
    host: 'redis-14252.c1.ap-southeast-1-1.ec2.cloud.redislabs.com',
    username: 'default',
    password: process.env.REDIS || "P3KqxjuuJeUsSchFvC8Y2Xnyzf9qmmaD",
    db:0
})
module.exports = redis