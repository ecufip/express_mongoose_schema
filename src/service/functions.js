var repository = require('mongoose'),
  Example = repository.model('Example');

exports.list_all = function(req, res) {
  Example.find({}, function(err, document) {
    if (err)
      res.send(err);
    res.json(document);
  });
};

exports.create = function(req, res) {
  var new_document = new Example(req.body);
  new_document.save(function(err, document) {
    if (err)
      res.send(err);
    res.json(document);
  });
};

exports.read_a_document = function(req, res) {
  Example.findById(req.params.documentId, function(err, document) {
    if (err)
      res.send(err);
    res.json(document);
  });
};

exports.update_a_document = function(req, res) {
  Example.findOneAndUpdate({_id: req.params.documentId}, req.body, {new: true}, function(err, document) {
    if (err)
      res.send(err);
    res.json(document);
  });
};

exports.delete_a_document = function(req, res) {
  Example.remove({
    _id: req.params.documentId
  }, function(err, document) {
    if (err)
      res.send(err);
    res.json({ message: 'Document successfully deleted' });
  });
};

