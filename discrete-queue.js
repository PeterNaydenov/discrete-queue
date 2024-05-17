'use strict';
// discrete-queue

import askForPromise from 'ask-for-promise'
import co from 'co'


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



export default queue


