'use strict';
// discrete-queue
const 
       co = require ( 'co' )
     , askForPromise = require ( 'ask-for-promise')
     ;



function* execution ( data, taskList ) {
     for (let fx of taskList ) {
                                 let task = askForPromise()
                                 fx(task, data)
                                 yield task.promise
           }
     return data
} // execution func.



function queue ( data, order ) {
    return co ( execution(data, order)   )
}

module.exports = queue


