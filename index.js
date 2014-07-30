var path = require('path'),
    fs = require('fs');

var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var createFramework = function(files) {
    var kissyPath = path.dirname(require.resolve('kissy'));
    files.unshift(createPattern(path.join(kissyPath, 'seed.js')));
};

createFramework.$inject = ['config.files'];
module.exports['framework:kissy'] = ['factory', createFramework];
