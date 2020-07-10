module.exports.index = function (application, req, res) {
    res.render("index", { validacao: {} });
};

module.exports.autenticar = function (application, req, res) {
    const dados = req.body;

    req.assert("usuario", "Usuário não pode ser vazio").notEmpty();
    req.assert("senha", "Senha não pode ser vazia").notEmpty();

    const errors = req.validationErrors();

    if (errors) {
        res.render("index", { validacao: errors });
        return;
    }

    res.send("Tudo ok para criar a sessão");
};
