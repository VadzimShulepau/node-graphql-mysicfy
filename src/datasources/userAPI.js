import { RESTDataSource } from 'apollo-datasource-rest';

class UserAPI extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = process.env.USERS;
  }

  willSendRequest(req) {
    req.headers.set('Authorization', this.context.token);
  }

  async register(register) {
    return this.post(`/register`, register);
  }

  async login(body) {
    return this.get(`/login`, body);
  }

  async getUser(id) {
    return this.get(`/${id}`);
  }


};

export default UserAPI;