function getUser(){
    return Promise.resolve("User loaded");
}

async function main(){
    console.log("start");

    const data=await getUser();
    console.log(data);

    console.log("end");
}

main();