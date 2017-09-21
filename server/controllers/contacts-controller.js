var Contact = require('../schemes/contact-scheme');

module.exports.list = function (req, res) {
    Contact.find({}, function (err, results) {
        return res.json(results);
    });
}

module.exports.add = function (req, res) {
    var contact = new Contact(req.body)

    contact.save(function (err, result) {
        if (err) {
            return res.send(err)
        } else {
            return res.json(result)
        }
    })
}

module.exports.delete = function (req, res) {
    var email = req.params.id;
    Contact.remove({ email: email }, function (err, resource) {
        if (err) {
            return res.send(err);
        } else {
            return res.send(resource);
        }
    })
} 