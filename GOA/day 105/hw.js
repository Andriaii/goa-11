const promise1 = new Promise((resolve) => {
    resolve("Hello, Promise!");
});

promise1.then((message) => console.log(message));



const promise2 = new Promise((_, reject) => {
    reject("Something went wrong!");
});

promise2.catch((error) => console.error(error));



const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("2 seconds have passed");
    }, 2000);
});

promise3.then((message) => console.log(message));




const promise4 = new Promise((resolve, reject) => {
    Math.random() > 0.5 ? resolve("Success!") : reject("Failed!");
});

promise4
    .then((result) => console.log(result))
    .catch((error) => console.error(error));



    const promise5 = new Promise((resolve) => {
        resolve(5);
    });
    
    promise5
        .then((value) => value * 2)
        .then((value) => value * 2)
        .then((value) => console.log(value)); // Outputs 20

        



        const fetchData = new Promise((resolve) => {
            setTimeout(() => {
                resolve("Data fetched!");
            }, 1000);
        });
        
        fetchData.then((message) => console.log(message));
        