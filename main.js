"use strict";
// Topic : Asynchronous
// Question # 1
// Write a simple asynchronous TypeScript function fetchGreeting that returns a 
// greeting message after a 2-second delay using setTimeout.
Object.defineProperty(exports, "__esModule", { value: true });
// let fetchGreeting = () => {
//     setTimeout(() => {
//         console.log("This message prints after 2 seconds ⏲️");
//     }, 2000)
//     console.log("Hello Everyone! Eid Mubarak  ✋");
// }
// fetchGreeting();
//Question # 2
// Write a function simulateTask that simulates a task by logging "Task started", 
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
// let simulateTask = () => {
//     setTimeout(() => {
//       console.log('Task Completed! 👏');
//     }, 1000)
//    console.log("Task Started! ✍️ ");
//    console.log("Waits for 1 second! ⏲️");
// }
// simulateTask()
//    Question # 3
// Write a function fetchData that returns a Promise which resolves with the string 
// "Data fetched successfully!" after a delay of 1 second.
// let fetchData = () => {
//    return new Promise ( (resolve: any, reject: any) => {
//       setTimeout(() => {
//          console.log("After delay 1 second! ⏲️");
//       }, 1000)
//       resolve("Data fetched successfully! 😊")
//    }) 
// }
// fetchData().then((result: any) => {
//    console.log(result);
// })
//                            //   Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either 
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a 
// delay of 1 second. Handle the rejection using .catch
// let fetchWithError = () => {
//     return new Promise ((resolve, reject) => {
//       setTimeout(() => {
//       resolve("Data fetched successfully! 🙂")
//       }, 1000)
//       reject("Data fetch failed! 😏")
//    })
// }
//   fetchWithError().then((result) => console.log(result)).catch((err) => console.log(err));
//  Question # 5
// Write a function executeSequentially that executes two functions fetchData and 
// processData sequentially using Promises, and logs the results in the order they are 
// called.
let fetchData1 = () => {
    return new Promise((resolve, reject) => {
        resolve("Data fetched sucessfully! 🙂");
    });
};
let processData = (() => {
    return new Promise((resolve, reject) => {
        reject("Data processing failed! 😏");
    });
});
function executeSequentially() {
    fetchData1().then((result) => console.log(result));
    processData().catch((err) => console.log(err));
}
executeSequentially();
