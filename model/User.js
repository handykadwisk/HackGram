const {ObjectId} = require('mongodb')
const {database} = require('../config/mongo')

/**
 * User model class.
 *
 * Provides static methods for interacting with the users collection in the database.
 */
class User {
  static collection() {
    return database.collection("users");
  }

  static async findByEmail() {
    return database.collection("users").findOne({
      email: email,
    });
  }

  static async findById(){
    return database.collection('users').findOne({
      _id: ObjectId(String(id))
    })
  }

  // static async getDetails(id){
  //   const agg =[
  //     {
  //       $match: {
  //         _id: ObjectId(String(id))
  //       }
  //     },
  //     {
  //       $lookup: {
  //         from: "follows",
  //         localField: "_id",
  //         foreignField: "following",
  //         as: "folloers"
  //       },
  //       {
  //         $lookup: {
  //           from: "users",
  //           localField: "_id",
  //           foreignField: "_id",
  //           as: "followerDetail"
  //         },
  //       },

  //     }

      
  //   ]
}
