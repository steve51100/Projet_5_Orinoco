var path = require('path');

exports.getIndex = (req, res, next) => {
    res.sendFile(path.join(__dirname + '../index.html'));
  };