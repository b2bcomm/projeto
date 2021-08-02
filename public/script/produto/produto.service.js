class UsersService {
  static getAll () {
    return axios.get(`/api`).then(response => response.data)
  }

  static removeById (userId) {
    return axios.delete(`/usuarios/${userId}`)
  }
}
