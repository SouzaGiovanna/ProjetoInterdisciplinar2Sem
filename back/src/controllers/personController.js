exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso');
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send('Requisição recebida com sucesso para o id: ' + id);
}

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send('Requisição recebida com sucesso para o id: ' + id);
}