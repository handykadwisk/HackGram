const {ObjectId} = require('mongodb')
const {database} = require('../config/mongo')


class User {
  static collection() {
    return database.collection("users");
  }

  static async findByEmail() {
    return this.collection().findOne({
      email: email,
    });
  }

  static async findAll(){
    return this.collection().find().toArray()
  }

  // static async findById(){
  //   return database.collection('users').findOne({
  //     _id: ObjectId(String(id))
  //   })
  // }
  
  static async insert(data){
    return this.collection().insertOne(data)
  } 

}
module.exports=User
