class UsuariosDAO {
    constructor(connection) {
        this._connection = connection();
    }
    inserirUsuario = function (dados) {
        /// É estabelecido a conexão com o servidor do Database
        this._connection.open(function (error, mongoCli) {
            mongoCli.collection("usuarios", function (errors, collection) {
                collection.insert(dados);
                mongoCli.close();
            });
        });
    };
}

module.exports = function () {
    return UsuariosDAO;
};
