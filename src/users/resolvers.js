
const resolvers = {
  Query: {
    login: async (_, { login }, { dataSource }) => {
      console.log(login)
      return await dataSource.userAPI.login(login);
    },
    getUser: async (_, { id }, { dataSource }) => {
      console.log(id)
      return await dataSource.userAPI.getUser(id);
    }
  },

  Mutation: {
    register: async (_, { register }, { dataSource }) => {
      return await dataSource.userAPI.register(register);
    },
  }
};

export default resolvers;