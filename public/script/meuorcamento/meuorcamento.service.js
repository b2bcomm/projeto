class OrcamentoService {
  static postOrcamento (payload) {
    return axios.post('/api/meuorcamento', payload).then(response => response.data)
  }
  
  static postOrcamentoCadastrado (payload) {
    return axios.post('/api/meusorcamentocadastrado', payload).then(response => response.data)
  }
}
