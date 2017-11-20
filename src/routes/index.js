module.exports = function(app) {
  var functions = require('../service/functions');

  // gs Routes
  app.route('/documents')
    .get(functions.list_all)
    .post(functions.create);

  app.route('/documents/:documentId')
    .get(functions.read_a_document)
    .put(functions.update_a_document)
    .delete(functions.delete_a_document);
};