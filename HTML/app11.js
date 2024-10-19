function saveToDb () {
    return new Promise((resolve, reject) => {
        let speed = Math.floor(Math.random()*10) +1;
        if(speed > 4) {
            resolve("the data has been delivered");
        }
        else {
            reject("the data was not saved");
        }
    });
}

// saveToDb();

