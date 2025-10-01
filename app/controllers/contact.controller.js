// Controller xử lý logic cho Contact
exports.create = (req, res) => {
    res.send({ message: "Create contact handler" });
};

exports.findAll = (req, res) => {
    res.send({ message: "Find all contacts handler" });
};

exports.findOne = (req, res) => {
    res.send({ message: `Find one contact with id ${req.params.id}` });
};

exports.update = (req, res) => {
    res.send({ message: `Update contact with id ${req.params.id}` });
};

exports.delete = (req, res) => {
    res.send({ message: `Delete contact with id ${req.params.id}` });
};

exports.deleteAll = (req, res) => {
    res.send({ message: "Delete all contacts handler" });
};

exports.findAllFavorite = (req, res) => {
    res.send({ message: "Find all favorite contacts handler" });
};
