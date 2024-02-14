//Import User Model & auth
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return User.find({params});
          },
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);

            if (!user) {
                return res.status(400).json({ message: 'Something is wrong!' });
              }

            const token = signToken(user);

            return { token, user};
        },
        login: async (parent, args) => {
            const user = await User.findOne({ $or: [{ username: args.username }, { email: args.email }] });

            if (!user) {
                return res.status(400).json({ message: "Can't find this user" });
            }
            
            const correctPw = await user.isCorrectPassword(body.password);

            if (!correctPw) {
                return res.status(400).json({ message: 'Wrong password!' });
            }

            const token = signToken(user);

            return { token, user };
        },
        saveBook: async (parent, args) => {
            try {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: user._id },
                    { $addToSet: { savedBooks: args.bookId } },
                    { new: true, runValidators: true }
                );
                return updatedUser
            } catch (err) {
                console.log(err)
                return err;
            }
        },
    }
}

module.exports = resolvers;