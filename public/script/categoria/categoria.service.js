class UsersService {

  static getAll() {
    return axios.get(`/api`).then((response) => response.data);
  }

  static getID(userId) {
    return axios.get(`/api/produto/${userId}`).then((response) => response.data);
  }

}
