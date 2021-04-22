Projeto B2Bcomm - Orçamentos instantâneo / Segmento atual Papelaria e Armarinho com objtivo de expandir o segmento.

- cadastro de empresa quer anunciar seus produtos.

- cadastro de empresa que quer comprar mas precisar fazer orçamentos, cenario comum em qualquer empresa fazer 3 orçamento antes de fechar a compra e a nossa plataforma B2Bcomm oferece isso de forma rapida, o comprador faz a busca do produto e conseguir visualizar os preços de todos os fornecedores cadastrados ajudando a comparar os preços e possibilitando a criar orçamento. E possivel criar uma lista de meus orçamento para facilitar a negociaçao com o fornecedor.

- a forma de pagamento e tipo entrega fica a parte do comprador e fornecedor

- utilizando web api dos fornecendos as informações e totalmente atualizadas a cada busca feita pelo comprador garantido a existencia do produto e os valores informado pela plataforma B2Bcomm

"B2B faz a união entre empresas que precisa fazer orçamento e empresas que vender a melhor preço do segmento"

+++++++++++++++++++++PARA INICIAR O PROJETO++++++++++++++++++++++++++++++++

Abrir o Terminal na pasta do projeto e executar:

1- Digitar o comando:  npm install
 
   voce vai instalar as dependências:

    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "ejs": "~2.6.1",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "morgan": "~1.9.1",
    "nodemon": "^2.0.7"
  
2-  Digitar o comando: npm run dev

O servidor (nodemon) vai usar a porta 3000 
http://localhost:3000/


************************************************************************************************************

Paginas de navegação do projeto: (  Difinição das rotas ), criando controler

quem_somos
faq
politica_de_privacidade
fale_conosco
criar_conta_usuário
anunciar
meus_orcamentos
login



************Utilizando referências do playground.digitalhouse.com***************


Trabalhando com Arquivos

14 de abril

Estrutura de Arquivos - Utilizando pasta src na estrutura do projeto (aqui deixaremos todo nosso projeto Node)


-----------------------------------------------------------------------

Controller

31 de março

Controller - e o que faz a comunicação entre a View e a Model , criamos uma pasta Controller para retirar da routes as suas funções 

-----------------------------------------------------------------------

Express Generator

31 de março

Express Generator - utilizando arquitetura mvc criada pelo
express generator com diferencial estou
utilizando ejs - template engine que permite criar uma estrutura dinamica
e  o servidor nodemon fica ativo e atualizar sozinho conforme alteração
npm install express-generator -g
express myaap --ejs ( serviço de exibição )