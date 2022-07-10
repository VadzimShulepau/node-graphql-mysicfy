import { RESTDataSource } from 'apollo-datasource-rest';

class UserAPI extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = process.env.USER;
  }

  willSendRequest(req) {
    req.headers.set('Authorization', this.context.token);
  }

  async register(register) {
    return this.post(`${USER}/register`, register);
  }

  async login(body) {
    return this.get(`${USER}/login`, body);
  }

  async getUser(id) {
    return this.get(`${USER}/${id}`);
  }


};

export default UserAPI;