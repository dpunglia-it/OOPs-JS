function getUser(){
    return new Promise((resolve) => {
       setTimeout(() => {
        resolve("User loaded");
       },2000);
    });
}
console.log("Start");

getUser().then(data=> console.log(data));

console.log("End");