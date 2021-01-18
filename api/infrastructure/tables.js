class Tables {
    init(connection){
        this.connection = connection
        this.createTasks()
        
    }

    createTasks(){
        const sql = 'CREATE TABLE IF NOT EXISTS Tasks (id int NOT NULL AUTO_INCREMENT, title varchar(40) NOT NULL, description text, responsible varchar(50) NOT NULL, priority varchar(15) NOT NULL, status varchar(20) NOT NULL, deadline date NOT NULL, PRIMARY KEY(id))'
        this.connection.query(sql, (erro) => {
            if(erro){
                console.log(erro);
            }else{
                console.log('Tabelas criadas com sucesso');
            }
        })
    }
}

module.exports = new Tables