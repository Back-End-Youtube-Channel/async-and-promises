

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

new Promise.all([
    requestJSON('https://jsonplaceholder.typicode.com/todos/1'),
    requestJSON('https://jsonplaceholder.typicode.com/todos/2')
]).then(console.log)