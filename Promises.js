// Promises

/*
    Object -> represents a value that is not available yet
    but is expected to become available at some point in the future.


    Promise States:

    1. pending
    2. fulfilled
    3. rejected


*/

// let delayBySeconds = (seconds) => {
//     return new Promise(resolve => setTimeout(resolve, seconds));
// };

// delayBySeconds(3000).then(() => console.log('one second completed!'));

let promise = new Promise((resolve, reject) => {
    reject(new Error('promise rejected'));
});

promise.then(result => console.log(result), error => console.log(error.message));

/*
    (result) => {
        console.log(result);
    }

    resolve = (result) => {
        console.log(result);
    }

    resolve('promise resolved');

    result = 'promise resolved'
*/