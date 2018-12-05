import Promise from 'promise'
import http from 'http'

/**
 * Network request example with promise
 */

 function requestJSON(url) {
     return new Promise((resolve, reject) => {
        const request = http.get(url)

        request.on('data', (data) => {
            try {
                resolve(JSON.parse(data))
            } catch(e) {
                reject(e)
            }
        })
     })
 }

 const todos = []

 requestJSON('https://jsonplaceholder.typicode.com/todos/1')
    .then(todo => todos.push(todo))
    .then(() => {
        return requestJSON('https://jsonplaceholder.com/todos/2')
    })
    .then(todo => todos.push(todo))
    .then(console.log)