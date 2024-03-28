const { ObjectId } = require('mongodb')
const { database } = require('../config/mongo')


class Follow {
    static followCollection() {
      return database.collection("follows");
    }
  
    static async createFollow(payload) {
      const newFollow = await this.followCollection().insertOne(payload);
      return newFollow;
    }
    static async findAll() {
      const data = await this.followCollection().find().toArray();
      return data;
    }
  }
module.exports = Follow
