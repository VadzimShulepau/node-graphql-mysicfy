
const resolvers = {
  Query: {
    login: async (_, { login }, { dataSource }) => {
      console.log(login)
      return await dataSource.musicfyAPI.login(login);
    },
    getUser: async (_, { id }, { dataSource }) => {
      console.log(id)
      return await dataSource.musicfyAPI.getUser(id);
    }
  },

  Mutation: {
    register: async (_, { register }, { dataSource }) => {
      return await dataSource.musicfyAPI.register(register);
    },
  }
};

export default resolvers;