const connection = require('../infrastructure/connection')

class Tasks{
    add(task, res){
        const sql = 'INSERT INTO Tasks SET ?'

        connection.query(sql, task, (error, results) => {
            if(error){
                res.status(400).json(error)
            }else{
                res.status(200).json(task)
            }
        })
    }

    list(res){
        const sql = 'SELECT * FROM Tasks'

        connection.query(sql, (error, results) => {
            if(error) { 
                res.status(400).json(error);    
            }else{
                res.status(201).json(results)
            }
        })
    }

    listId(id, res){
        const sql = `SELECT * FROM Tasks WHERE id=${id}`
        connection.query(sql, (error, results) => {
            if(error){
                res.status(400).json(error);
            }else{
                res.status(201).json(results)
            }
        })
    }

    change(id, values, res){
        const sql = 'UPDATE Tasks SET ? WHERE id=?'

        connection.query(sql, [values, id], (error, results) => {
            if(error){
                res.status(400).json(error)
            }else{
                res.status(201).json({...values, id})
            }
        })
    }

    exclude(id, res) {
        const sql = 'DELETE FROM Tasks WHERE id=?'

        connection.query(sql, id, (error, results) => {
            if(error) {
                res.status(400).json(error)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Tasks