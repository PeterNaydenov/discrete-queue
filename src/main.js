'use strict';
// discrete-queue

import askForPromise from 'ask-for-promise'


function queue ( order, data={}, ...args ) {
    const ls = order.map ( fn => {
                        let t = askForPromise ()
                        return function step () {
                                 fn ( t, data )
                                 return t.promise
                            }
                    })
                   
    const task = askForPromise ();
    askForPromise
        .sequence   ( ls, data, ...args )
        .onComplete ( r =>  task.done ( r )   )
    return task.promise
} // queue func.



export default queue


