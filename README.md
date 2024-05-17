# Discrete Queue

Grab **data** and aplly to it ordered list of functions. The recipe should look like this:

```js
import dQ from 'discrete-queue'
dQ ( car, [ getTheCar, washIt, driveToTheGarage]).then ( result => .... )
/*    ^          ^                                       ^
      |          |                                       |
      |          |       Clean car in the garage  -------+
      |          |
      |          +---> list of tasks ( functions )
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
import dQ from 'discrete-queue'

```




## Task Functions
Every task function will receive two arguments.  Task is an [**ask-for-promise**](https://github.com/PeterNaydenov/ask-for-promise) object and controls execution of queue. Resolving/rejecting the promise will start next task. Data is available for all functions in task list.

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

### 1.0.1 (2024-05-17)
- [x] Library converted to ES6 module;
- [x] Documentation update;

### 0.0.4 (2023-10-30)
 - [x] Dependency update. Ask-for-promise@1.5.0;
 - [x] Dev dependency update. Chai@4.3.10;

### 0.0.2 (2017-02-18)
 - [x] Documentation update;

### 0.0.1 (2017-02-18)
 
 - [x] Initial code;
 - [x] Test package;
 - [x] Documentation;





## Credits
'discrete-queue' was created by Peter Naydenov.





## License
'discrete-queue' is released under the [MIT License](http://opensource.org/licenses/MIT).




