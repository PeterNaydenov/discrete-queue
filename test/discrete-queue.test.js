import { describe, it, expect } from 'vitest'
import dQ from '../src/main.js'

describe ( 'Discrete Queue', () => {

  it ( 'Ordered Async functions', async () => {
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

      let taskList = [ firstStep, secondStep, final ]
      let data = { 'name' : 'Peter' }

      const results = await dQ ( taskList, data )

      expect ( data ).toHaveProperty('name')
      expect ( data['name'] ).toBe('Stefan')
      expect ( data['name'] ).not.toBe('Ivan')
      expect ( results ).toBeInstanceOf(Array)
      expect ( results.length ).toBe(3)
      expect ( results[0] ).toBe ( 'first_response' )
      expect ( results[1] ).toBe ( undefined )
  })

})
