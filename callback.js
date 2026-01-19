function getUser(callback){
    setTimeout(() => {
        callback("User loaded");
    },2000);
}

console.log("Start");

getUser((data)=>{
    console.log(data);
});

console.log("End");