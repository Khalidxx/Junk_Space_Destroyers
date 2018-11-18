# Promise

The `Promise` object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

## Syntax

```javascript
new Promise( /* executor */ function(resolve, reject) { ... } );
```

### Parameters

#### executor

* A function that is passed with the arguments `resolve` and `reject`.
* The `executor` function is executed immediately by the `Promise` implementation, passing `resolve` and `reject` functions (the `executor` is called before the Promise constructor even returns the created object)
* The `resolve` and `reject` functions, when called, resolve or reject the promise, respectively
* The executor normally initiates some asynchronous work, and then, once that completes, either calls the resolve function to resolve the promise or else rejects it if an error occurred
* If an error is thrown in the executor function, the promise is rejected. The return value of the executor is ignored.

## Description

* A `Promise` is a proxy for a value not necessarily known when the promise is created.
* It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.
* **This lets asynchronous methods return values like synchronous methods**: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A `Promise` is in one of these states:

* `pending`: initial state, neither fulfilled nor rejected.
* `fulfilled`: meaning that the operation completed successfully.
* `rejected`: meaning that the operation failed.

* A pending promise can either be fulfilled with a value, or rejected with a reason (error).
* When either of these options happens, the associated handlers queued up by a promise's `then` method are called.(If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.)

As the `Promise.prototype.then()` and `Promise.prototype.catch()` methods return promises, they can be chained.

![promises](assets/promises.png)
