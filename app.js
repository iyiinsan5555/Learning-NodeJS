const {readFile, writeFile} = require("fs").promises


const reading = async () => {
    try {
        const data = await readFile("./test.txt", "utf-8");
        //if successful it will return data else give error and we catch it with "catch"
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}


reading();


//In server side you will always need to set up your code asynchronously
// asynchronous = non-blocking
// synchronous = blocking
//Stayed at 3:12:58 Events Info