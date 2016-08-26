# Not found middlweare

A simple Express middleware to return `HTTP 404 - Not found` when no route matches the request.

### Usage

```javascript
var Express = require('express');
var notFoundExpress = require('not-found-express');

var express = Express();
express.use(notFoundExpress({
    message: 'Not found'
}));
```

### Notes
The message it's optional and will default to `Not found`. The error generated is an `http-error` and can be dealt by `http-error-express` (see related modules).
