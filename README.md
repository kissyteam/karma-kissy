karma-kissy
============

A Karma plugin - adapter for kissy framework.

Installation
------------

Install the plugin from npm:

```sh
$ npm install karma-kissy --save-dev
```

Add `kissy` to the `plugins` property in your Karma configuration:

```js
module.exports = function(config) {
  config.set({

    plugins: ['karma-kissy']

   //...
```

---

Add `kissy` of the version you need to the `frameworks` property in your Karma configuration:
```js
module.exports = function(config) {
  config.set({

    frameworks: ['kissy-1.4.2']
    
    //...
```

Note: configure plugin under `karma-kissy` name, in the frameworks array speify as `kissy-<version>`. Current version of the package is bundled with following kissy versions:
 * 1.4.0
 * 1.4.1
 * 1.4.2
 * 1.4.3
 * 1.4.4
 * 1.4.5

