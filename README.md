# Discrete Queue

![version](https://img.shields.io/github/package-json/v/peterNaydenov/discrete-queue)
![license](https://img.shields.io/github/license/peterNaydenov/discrete-queue)
![issues](https://img.shields.io/github/issues/peterNaydenov/discrete-queue)
![language](https://img.shields.io/github/languages/top/peterNaydenov/discrete-queue)
![npm bundle size](https://img.shields.io/bundlephobia/min/discrete-queue)



Execute ordered list of functions. Add data-arguments and they will be passed to each function in the list:

```js
import dQ from 'discrete-queue'
const car = { ... }; // Car object definition
dQ ( [ getTheCar, washIt, driveToTheGarage], car ).then ( result => .... )
/*          ^                                 ^               ^
/*          |                Extra data argument              |
            |                                                 |
            |                Array of function returns -------+
            |
            +---> list of tasks ( functions )          
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
Every task function will receive two arguments.  Task is an [**ask-for-promise**](https://github.com/PeterNaydenov/ask-for-promise) object and controls execution of queue. Resolving the promise will start next task. Data is available for all functions in task list.

```js
let myTask = ( task, data ) => {
           // ... do something here
           task.done ( 'myTaskResult' )   // finishing the task. Provide result if needed 
           // return task.promise // --> if function has asynchronous code and we have to wait until it is done
     }

```



## Examples 

Find some examples in `./test` folder.






## Known bugs
_(Nothing yet)_




## Credits
'discrete-queue' was created by Peter Naydenov.





## License
'discrete-queue' is released under the [MIT License](https://github.com/PeterNaydenov/discrete-queue/blob/master/LICENSE).




