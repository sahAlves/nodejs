const baseQuery = require('./baseQuery');

class Series{

    lista(){
        return baseQuery('SELECT * FROM series');
    }

    insere(serie){
        return baseQuery('INSERT INTO series SET ?', serie);            
    }

    buscaPorId(id){
        return baseQuery('SELECT * FROM series WHERE id = ?', id);
    }

    delete(id){
        return baseQuery('DELETE FROM series WHERE id = ?',id);          
    }

    atualiza(serie){
        return baseQuery('UPDATE series SET ? WHERE id = ?', [serie,serie.id]);
    }

}

module.exports = Series;