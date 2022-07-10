
const resolvers = {
  Query: {
   async login(_, { login }, { dataSource }){
      return await dataSource.musicfyAPI.login(login);
    },
    async getUser(_, {id}){
      return await dataSource.musicfyAPI.getUser(id);
    }
  },

  Mutation: {
    async register(_, { register }, { dataSource }){
      return await dataSource.musicfyAPI.register(register);
    },
  }
};

export default resolvers;