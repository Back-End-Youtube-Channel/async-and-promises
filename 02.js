import Promise from 'promise'

function stringAddition(original, chars) {
    return `${original} ${chars}`
}

const promise = Promise.resolve('')

promise.then((string) => {
    return stringAddition(string, 'abc')
}).then(console.log) // outputs "abc"


promise.then((string) => {
    return stringAddition(string, '123')
}).then(console.log) // outputs "123"

promise.then((string) => {
    return stringAddition(string, 'you and me')
}).then(console.log) // outputs "you and me"

/**
    Promise.then returns a new promise and the next then statement is not asoociated with the promise
    To not get this problem, you need to reassign your promise
 */ 

 let mPromise = Promise.resolve('')

 mPromise = mPromise.then((string) => {
     return stringAddition(string, 'abc')
 })

 mPromise = mPromise.then((string) => {
     return stringAddition(string, '123')
 })
 .then((string) => {
    return stringAddition(string, 'you and me')
 })
 