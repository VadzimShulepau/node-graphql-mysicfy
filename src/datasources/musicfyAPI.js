import { RESTDataSource } from 'apollo-datasource-rest';

class MusicfyAPI extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = process.env.USER;
  }

  // willSendRequest(req) {
  //   req.headers.set('Authorization', this.context.token);
  // }

  async register(register) {
    console.log(register)
    // return await register
    return this.post(`${USER}/register`, register);
  }

  async login(body) {
    console.log(body)
    return this.get(`${USER}/login`, body);
  }

  async getUser(id) {
    console.log(id)
    // return this.get(`${USER}/${id}`);
  }


};

export default MusicfyAPI;