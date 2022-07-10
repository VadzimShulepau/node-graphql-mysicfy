
const resolvers = {
  Query: {
    login: async (_, { login }, { dataSources }) => {
      return await dataSources.userApi.login(login);
    },
    getUser: async (_, { id }, { dataSources }) => {
      return await dataSources.userAPI.getUser(id);
    }
  },

  Mutation: {
    register: async (_, { register }, { dataSources }) => {
      return await dataSources.userAPI.register(register);
    },
  }
};

export default resolvers;