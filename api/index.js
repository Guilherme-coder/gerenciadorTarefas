const customExpress = require('./config/customExpress')
const connection = require('./infrastructure/connection')
const Tables = require('./infrastructure/tables')


connection.connect((erro) => {
    if(erro){
        console.log(erro);
    }else{
        console.log('Conectou com sucesso ao banco de dados')
        Tables.init(connection)
        const app = customExpress()
        
        app.listen(3000, () => console.log('Seervidor rodando na porta 3000'))
    }
})


