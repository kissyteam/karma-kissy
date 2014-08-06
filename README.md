karma-kissy
============
> A Karma plugin. Adapter for kissy framework.

Installation
------------

Install kissy from npm:
```sh
$ npm install kissy@1.4.2 --save-dev
```

Note: Current only support with following kissy versions:
 * 1.4.2
 * 1.4.3
 * 1.4.4

Install the plugin from npm:

```sh
$ npm install karma-kissy --save-dev
```

Add `kissy` of the version you need to the `frameworks` property in your Karma configuration:
```js
module.exports = function(config) {
  config.set({

    frameworks: ['kissy']
    
    //...
```

Example
-------

```js
// karma.conf.js
module.exports = function(config) {
    config.set({
        files: [
            {
                pattern: 'src/package.js',
                watched: true,
                included: true,
                served: true
            },
            {
                pattern: 'test/index.js',
                watched: true,
                included: true,
                served: true
            },
            {
                pattern: 'src/**/*.js',
                watched: true,
                included: false,
                served: true
            }
        ],
        frameworks: ['mocha', 'sinon', 'chai', 'kissy'],
        browsers: ['Chrome', 'PhantomJS']
    });
};
```
