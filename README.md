# Discrete Queue

**WARNING: Experimental stage**

Take `data` and aplly ordered list of functions. The recipie should look like this:

```js
let dQ = require ( 'descrete-quele' )
let dQ ( car, [ getTheCar, washIt, driveToTheGarage]).then ( result => .... )
/*        ^          ^                                       ^
          |          |                                       |
          |          |       Clean car in the garage  -------+
          |          |
          |          +---> list of activities ( functions )
          |
         Object
                     
*/
   
```










## Installation

Install by writing in your terminal:
```
npm install discrete-queue --save
```

Once it has been installed, it can be used by writing this line of JavaScript:
```js

let dQ = require ( 'discrete-queue' )

```




## Task Functions
Every task function will receive two arguments.  Task is an [**ask-for-promise**](https://github.com/PeterNaydenov/ask-for-promise) object and controls execution of queue. Resolving/rejecting the promise will start next task.

```js
let myTask = ( task, data ) => {
           // ...
           // Close your task by 
           task.done()   // if it success
           // task.cancel() // --> if it fails
     }

```



## Examples 

Find some examples in `./test` folder.






## Known bugs
_(Nothing yet)_










## Release History

### 0.0.1 (2017-02-18)
 
 - [x] Initial code;
 - [x] Test package;
 - [x] Documentation;





## Credits
'discrete-queue' was created by Peter Naydenov.





## License
'discrete-queue' is released under the [MIT License](http://opensource.org/licenses/MIT).




