const add = (a, b) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
};


// Making use of promise chaining
add(1, 1).then((sum) => {
    console.log(sum);
    return add(sum, 5);
}).then((sum2) => {
    console.log(sum2);
}).catch((e) => {
    console.log(e);
})






// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([7, 4, 1]);
//         // reject('things went wrong!')
//     }, 2000);
// });

// doWorkPromise.then((result) => {
//     console.log('Success!', result);
// }).catch((error) => {
//     console.log('Error!', error);
// })



/**
 * Do While Loop 
 * Goofing off!
 */
// var i = 0
// do {
//     console.log('test');
//     i = i + 1;
// } while (i < 5);

// console.log('Loop ends');