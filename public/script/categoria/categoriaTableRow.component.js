class UserTableRow {
  static getActionButtons(user) {
    return `<a href="/orcamento/${user.codigo}" class="btn btn-primary"> <span style="margin-top: 0px; font-family: FontAwesome;">&#xF002; </span>Fazer Orçamento</a>`;
  }

  static render(user) {

    

    return `<tr class="col-md-3" data-user='${JSON.stringify(user)}'> \
     <td>  
     <div style="border-radius: 10px; border-color: #F0EDED; background-color: #F0EDED; border-width: 0px; margin: 20px; " >            
     <div style="text-align: center; margin: 15px;">      
     <img class="imagem_logo" style="text-align: center; width: 200px; height: 200px; border-radius: 50%; margin-top: 15px;" src=${user.foto} alt="">
     </div>
     <div style="text-align: center;"> 
     <h3>${user.marca}</h3>       
     <h5>${user.nome}</h5>
     <h5>${user.descricao}</h5>
     </div>
     <div style="text-align: center; margin-top: -30px;">
     <a class="btn btn-primary" href="/orcamento/${user.codigo}"> <span style="margin-top: 0px; font-family: FontAwesome;">&#xF002; </span>Receber Orçamento</a>
     </div> 
     </div>
     </td> \
     </tr>`;
  }
}
