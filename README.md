Projeto B2Bcomm - Orçamentos instantâneo / Segmento atual Papelaria e Armarinho com objetivo de expandir para outros segmentos.

- Cadastro de empresa para anunciar seus produtos.

- Cadastro de empresa que quer comprar mas precisa fazer orçamentos, cenário comum em qualquer empresa fazer 3 orçamento antes de fechar a compra. Com plataforma B2Bcomm é possível fazer isso de forma rápida o comprador faz a busca do produto e consegui visualizar os preços de todos os fornecedores cadastrados.Ajudando a comparar os preços e criar uma lista dos orçamentos para facilitar a negociação com o fornecedor.

- Fica à negociação por parte do comprador e do fornecedor a forma de pagamento e o tipo de entrega.

- Utilizando web api dos fornecedores, as informações é totalmente atualizadas a cada busca feita pelo comprador garantindo a existência do produto e os valores informado pela plataforma B2Bcomm.

"B2Bcomm faz a união entre empresas que precisa fazer orçamento & empresas que vende a melhor preço do segmento"

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