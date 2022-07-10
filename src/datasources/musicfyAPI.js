import { RESTDataSource } from 'apollo-datasource-rest';

class MusicfyAPI extends RESTDataSource {
  constructor() {
    super();
    this.usersURL = process.env.USERS;
  }

  willSendRequest(req) {
    req.headers.set('Authorization', this.context.token);
  }

  async register(body) {
    console.log(body)
    return await this.post(`${this.usersURL}register`, body);
  }

  async login(body) {
    console.log(body)
    return await this.get(`${this.usersURL}login`, body);
  }

  async getUser(id){
    console.log(id)
    return await this.get(`${this.usersURL}${id}`);
  }


}

export default MusicfyAPI;