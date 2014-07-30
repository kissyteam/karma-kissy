var path = require('path'),
    fs = require('fs');

var createPattern = function(path, included) {
    return {pattern: path, included: included, served: true, watched: false};
};

var createFramework = function(files) {
    var kissyPath = path.dirname(require.resolve('kissy'));
    files.unshift(createPattern(path.join(kissyPath, '**/*.js'), false));
    files.unshift(createPattern(path.join(kissyPath,'seed.js'), true));
};

createFramework.$inject = ['config.files'];
module.exports['framework:kissy'] = ['factory', createFramework];