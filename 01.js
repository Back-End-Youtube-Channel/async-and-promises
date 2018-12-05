

function networkCall(url, callback) {
    // Fake it
    setTimeout(() => {
        const result = {
            hello: 'world'
        }
        callback(null, result)
    }, 400)
}

// Old way of doing things, add a callback
networkCall('http://fakeurl.nl', (error, result) => {
    if (error) {
        throw error
    }

    networkCall('http://fakeurl.com', (error, otherResult) => {
        if (error) {
            throw error
        }
        console.log(result, otherResult)
    })
})