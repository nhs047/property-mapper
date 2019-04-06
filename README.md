# property-mapper v1.0.4
property mapper is a package which will use for mapping with model
## Installation

Using npm:
```shell
$ npm i -g npm
$ npm i --save property-mapper
```

In Node.js:
```js
// Load the full build.
var propertyMapper = require('property-mapper');

```

See the [package source](https://github.com/nhs047/property-mapper) for more details.

**Usage:**<br>
```js
var model = ['userName', 'userMail', 'age'];
var obj = { userName: 'mark', userMail: 'mark@gmail.com', interest: 'gaming' }
propertyMapper(model, obj);
//output: { userName: 'mark', userMail: 'mark@gmail.com' }
```