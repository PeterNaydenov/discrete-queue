# Migration Guides


## From v1.x.x to v2.x.x

### Function arguments changed
Position of arguments was changed. dQ requires only one argument - an array of functions. Extra arguments are optional and will be passed to each function. 
```js
// v.1.x.x
dQ ( car, [ getTheCar, washIt, driveToTheGarage]).then ( result => ... )
// car - an object
// [ getTheCar, washIt, driveToTheGarage] - an array of functions that should be executed in order
// result == modified 'car' object

// v.2.x.x
dQ ( [ getTheCar, washIt, driveToTheGarage], car ).then ( results => ... )
// car - an object - will be provided as argument to each function call
// [ getTheCar, washIt, driveToTheGarage] - an array of functions that should be executed in order
// results - an array of responses from each function call
```

In version 2.x.x the result is not the modified object. Old functionallity can be achieved like this:
```js
const car = {}; // define car object outside of the function call
dQ ( [ getTheCar, washIt, driveToTheGarage], car ).then ( results => {
    // modified 'car' object is available here    
})
```

