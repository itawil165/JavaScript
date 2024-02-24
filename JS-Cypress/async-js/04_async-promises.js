const myPromise = new Promise((resolve, reject) => {
    // your code goes here
    resolve();
});

console.log(myPromise);

// 2- Promises
function getURL01() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('NAVIGATED TO URL');
            resolve();
        }, 5000);
    })
};

function findHeadingElement01() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('LOCATED HEADING');
            resolve();
        }, 2000)
    })
};

function assertHeadingElementText01() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('ASSERTED HEADING TEXT');
            resolve();
        }, 1000);
    })
};

getURL01()
.then(() => {
    findHeadingElement01()
    .then(() => {
        assertHeadingElementText01();
    });
})

// Promise Error Handling
function getURL02() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('NAVIGATED TO URL');
            reject('ERROR');
        }, 5000);
    })
};

function findHeadingElement02() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('LOCATED HEADING');
            resolve();
        }, 2000)
    })
};

getURL02()
.then(() => {
    findHeadingElement02();
})
.catch((err) => {
    console.log(err)
});