'use strict';

import dQ from '../discrete-queue.js'
import askForPromise from 'ask-for-promise'
import { expect } from 'chai'

// async queue test
describe ( 'Discrete Queue', () => {


it ( 'Ordered Async functions', function ( endTest ) {
    // setup 3 functions
    let firstStep   = (task,data) => {
                                data.name = 'Ivan'
                                setTimeout ( () => task.done(), 100 )
                              }
    let secondStep  = (task,data) => task.done()
    let final       = (task,data) => {
                                        data.name = "Stefan"
                                        task.done()
                                      }

    // arrange ordered list of functions
    let taskList = [ firstStep, secondStep, final ] 
    // prepare some simple data to work with
    let data = { 'name' : 'Peter' }

    dQ ( data, taskList ).then ( result => {
             expect ( result ).to.have.property('name')
             expect ( result['name'] ).to.be.equal('Stefan')
             expect ( result['name'] ).to.not.be.equal('Ivan')
            
             endTest()
          })
}) // it order async.

}) // describe






