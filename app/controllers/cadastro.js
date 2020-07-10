module.exports.cadastro = function (application, req, res) {
    res.render("cadastro", { validacao: {}, dadosForm: {} });
};

module.exports.cadastrar = function (application, req, res) {
    const reqBody = req.body;

    req.assert("nome", "Nome não pode ser vazio").notEmpty();
    req.assert("usuario", "Usuário não pode ser vazio").notEmpty();
    req.assert("senha", "Senha não pode ser vazia").notEmpty();
    req.assert("casa", "Casa não pode ser vazia").notEmpty();

    const errors = req.validationErrors();

    if (errors) {
        res.render("cadastro", { validacao: errors, dadosForm: reqBody });
        return;
    }

    const connection = application.config.dbConnection;
    const usuarioDAO = new application.app.models.usuarioDAO(connection);

    usuarioDAO.inserirUsuario(reqBody);

    res.send("Podemos cadastrar");

    //res.render("cadastro");
};
