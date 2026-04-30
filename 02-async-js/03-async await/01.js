// Add async keyword to make any normal function asynchronous function 
async function hello() {
    console.log("hello");
}
hello();


function api () {
    return new Promise ((resolve, reject) => {
        console.log("weather data");
        resolve(200);
    })
}

function api () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
};

async function getWeatherData () {
    await api();
}

getWeatherData();

async function getWeatherData() {
    await api ();
    await api ();
}

function getData(dataId) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve ("success");
        },2000);
    });
};

async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}

async function getAllData() {
    console.log("getting data 1...");
    await getData(1);
    console.log("getting data 2...");
    await getData(2);
    console.log("getting data 3...");
    await getData(3);
    console.log("getting data 43...");
    await getData(4);
    console.log("getting data 5...");
    await getData(5);
}