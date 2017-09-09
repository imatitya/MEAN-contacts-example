var express = require('express');
var router = express.Router();
var contactsController = require('./controllers/contacts-controller');

router.get('/', function (req, res) {
  res.send('API :: Hello World!');
});

// --- Contacts API---//
router.get('/contacts', contactsController.list);
//router.post('/contacts', contactsController.create);
//router.delete('/contacts/:id', contactsController.delete);

module.exports = router;