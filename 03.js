
/**
 * Optimized promise handling
 */


function stringAddition(chars) {
    return (original) => {
        return `${original} ${chars}`
    }
}

const promise = Promise.resolve('')
    .then(stringAddition('abc'))
    .then(stringAddition('123'))
    .then(stringAddition('one two trhee'))

promise.then(console.log)