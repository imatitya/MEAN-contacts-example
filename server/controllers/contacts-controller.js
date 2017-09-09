var contactsList = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john@example.com"
    },
    {
        "firstName": "Mary",
        "lastName": "Moe",
        "email": "mary@example.com"
    }
]

module.exports.list = function (req, res) {
    res.json(contactsList);
}

module.exports.add = function (req, res) {
    contactsList.push(req.body)
    return res.json(req.body)
}