class OrcamentoProdutoService {
  static GETorcamento (codigo) {
    return axios.get(`/api/orcamento/${codigo}`).then(response => response.data)
  }
  
  static GETanunciantes (codigo) {
    return axios.get(`/api/anunciantes/${codigo}`).then(response => response.data)
  }
}



