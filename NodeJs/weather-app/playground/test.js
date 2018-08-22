
var message = "";

promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise 1");
        resolve("promise 1");
    }, 10)
})

promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise 2");
        resolve("promise 2");
    }, 50)
})

promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise 3");
        resolve("promise 3");
    }, 30)
})

var printResult = (results) => {console.log("Results = ", results)}

function main() {
    // See the order of promises. Final result will be according to it
    Promise.all([promise1, promise2, promise3]).then(printResult);
    Promise.all([promise2, promise1, promise3]).then(printResult);
    Promise.all([promise3, promise2, promise1]).then(printResult);
   
    console.log("\"\"" + message);
}

main();
