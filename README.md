## API criada em node.js para persistir os dados da SPA Angular.
#### Como usar:
1. Supondo que você já tenha o node.js (https://nodejs.org/en/download/) e os MySql (https://www.apachefriends.org/download.html) instalados na sua máquina, é preciso ter as portas 3000 (para a API) e 3306 (para o DB MySql) sem uso.
2. É preciso subir o servidor MySql na porta 3306.
3. A conexão do banco de dados tem que ser a seguite:

![](/api/img/db.png)

Ou seja, uma conexão na porta 3306, com usuário root, senha vazia e o nome do banco tem que ser tasks.

4. Após isso, é preciso instalar as depêndencias da api. No diretório raiz da api (api/) execute o comando __npm install__.
5. Após instalar as dependências e com o servidor MySql iniciado execute o comando __npm start__ na raiz da api (api/).
6. Após esses dados, a api vai estar iniciada em conjunto com o servidor MySql.


## Aplicação criada com Angular
#### Como usar:
1. Caso não tenha o Angular CLI na sua máquina use o comando __npm install -g @angular/cli__.
2. Com a api e o servidor MySql rodando, vá até a pasta onde se encontra a raiz da aplicação (gerenciador-tarefas/)
 e execute o comando __npm install__ para instalar as dependências e depois __ng serve -o__ para rodar a aplicação.
