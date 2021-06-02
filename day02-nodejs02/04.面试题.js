//1 2 3 8 4 7 5 6
new Promise((resolve, reject) => {
        console.log(1)
        resolve(1)
    })
    .then(() => {
        console.log(2)
        new Promise((resolve, reject) => {
                console.log(3)
                resolve()
            })
            .then(() => {
                console.log(4)
            })
            .then(() => {
                console.log(5)
            })
            .then(() => {
                console.log(6)
            })
        console.log(8);
    })
    .then(() => {
        console.log(7)
    })