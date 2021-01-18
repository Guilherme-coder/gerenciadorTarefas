## API criada em node.js para persistir os dados da SPA Angular.
#### Como usar:
1. É preciso ter as portas 3000 (API) e 3306 (DB MySql) sem uso.
2. Também é preciso ter um servidor MySql instalado e rodando na porta 3306.
3. A conexão do banco de dados tem que ser a seguite:

![](/api/img/db.png)

Ou seja, uma conexão na porta 3306, com usuário root, senha vazia e o nome do banco tem que ser tasks.

4. Após isso, é preciso instalar as depêndencias da api. No diretório raiz da api (api/) execute o comando npm i.
5. Após instalar as dependências e com o servidor MySql iniciado execute o comando npm start na raiz da api (api/).
6. Após esses dados, a api vai estar iniciada em conjunto com o servidor MySql.
