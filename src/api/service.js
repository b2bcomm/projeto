
const axios = require('axios');
const { LIST_GERAL_PRODUTO, VERIFICA_SE_CONSTA_CNPJ, CADASTRAR_PARTICIPANTE, CADASTRAR_ORCAMENTO, LISTA_ANUNCIATE_PARA_ENVIAR, RESULTADO_ORCAMENTO, DADOS_ANUNCIANTES, DADOS_COMPRADOR, ATUALIZAR_STATUS_DO_ENVIOU } = require('./database')


class Service {

    async LIST_GERAL_PRODUTO()  {

        // const  { data }  = await axios('http://localhost:8080/images/produtos.txt')
        return LIST_GERAL_PRODUTO()  
    }

    async DADOS_ANUNCIANTES(id_anunciante){

        return DADOS_ANUNCIANTES(id_anunciante)
    }

     async ATUALIZAR_STATUS_DO_ENVIOU(id_comprado)
     {
        return ATUALIZAR_STATUS_DO_ENVIOU(id_comprado)
     }

    async LISTA_ANUNCIATE_PARA_ENVIAR(id_comprado, cm_statu){
     
        return LISTA_ANUNCIATE_PARA_ENVIAR(id_comprado, cm_statu)
        
    }

    async DADOS_COMPRADOR(id_comprador){

        return DADOS_COMPRADOR(id_comprador)
    }

    async RESULTADO_ORCAMENTO(id_anunciante, id_comprador, cm_statu){
        return RESULTADO_ORCAMENTO(id_anunciante, id_comprador, cm_statu)
    }

    async CADASTRAR_ORCAMENTO(id_comprador, id_produto, id_anunciante, cm_status, cm_quantidade, cm_custo, desc_produto){

        return CADASTRAR_ORCAMENTO(id_comprador, id_produto, id_anunciante, cm_status, cm_quantidade, cm_custo, desc_produto)
    }


    async VERIFICA_SE_CONSTA_CNPJ(CNPJ)  {

        return VERIFICA_SE_CONSTA_CNPJ(CNPJ)  
    }


    async CADASTRAR_PARTICIPANTE(cnpj, email, nomecompleto, nomedaempresa, senha, telefone, celular, cep, cidade, estado, endereco, bairro ){
        return CADASTRAR_PARTICIPANTE(cnpj, email, nomecompleto, nomedaempresa, senha, telefone, celular, cep, cidade, estado, endereco, bairro)
    }

}


    const UserService = new Service()
  
    module.exports = UserService