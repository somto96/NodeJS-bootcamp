// setTimeout(()=>{
//     console.log("Two seconds are up!")
// }, 2000)

const add = (a, b, callback) => {
    setTimeout(() => {
        const sum = a + b;

        callback(sum);
        // console.log("Two seconds are up!");
    }, 2000);
}

add(1, 4, (add) => {
    console.log(add);
})