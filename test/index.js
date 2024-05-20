'use strict';

import dQ from '../src/main.js'
import { expect } from 'chai'

// async queue test
describe ( 'Discrete Queue', () => {


it ( 'Ordered Async functions', function ( endTest ) {
    // setup 3 functions
    let firstStep   = (task,data) => {
                                data.name = 'Ivan'
                                setTimeout ( () => task.done('first_response'), 100 )
                                return task.promise
                              }
    let secondStep  = ( task, data ) => task.done ()
    let final       = ( task, data ) => {
                                        data.name = "Stefan"
                                        task.done ()
                                      }

    // arrange ordered list of functions
    let taskList = [ firstStep, secondStep, final ] 
    // prepare some simple data to work with
    let data = { 'name' : 'Peter' }

    dQ ( taskList, data ).then ( results  => {
             expect ( data ).to.have.property('name')
             expect ( data['name'] ).to.be.equal('Stefan')
             expect ( data['name'] ).to.not.be.equal('Ivan')
             expect ( results ).to.be.an('array')
             expect ( results.length ).to.be.equal(3)
             expect ( results[0] ).to.be.equal ( 'first_response' ) 
             expect ( results[1] ).to.be.equal ( undefined ) 
             endTest ()
          })
}) // it order async.

}) // describe






