const { ObjectId, Long } = require('mongodb');
const Follow = require('../models/follow');
const followResolvers = {
    Query: {
        follows: async () => {
            const follows = await Follow.findAll();
            return follows;
        },
    },
    Mutation: {
        followUser: async (_, { _id }, { auth }) => {
            auth();
            const currentUser = auth();
            const followerId = new ObjectId(String(currentUser.id));
            const followingId = new ObjectId(String(_id));

            const newFollow = {
                followingId,
                followerId,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };
            const result = await Follow.createFollow(newFollow);
            newFollow._id = result.insertedId;
            return newFollow;
        },
    },
}

module.exports = { followResolvers }