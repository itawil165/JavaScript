/*
Test case:
getURL -> takes 5s
findHeadingElement -> takes 2s
assertHeadingElementText -> takes 1s
*/

function getURL01() {
    setTimeout(() => {
        console.log('NAVIGATED TO URL');
    }, 5000);
};

function findHeadingElement01() {
    setTimeout(() => {
        console.log('LOCATED HEADING');
    }, 2000)
};

function assertHeadingElementText01() {
    setTimeout(() => {
        console.log('ASSERTED HEADING TEXT');
    }, 1000);

};

getURL01();
findHeadingElement01();
assertHeadingElementText01();

/*
Expected order:
NAVIGATED TO URL
LOCATED HEADING
ASSERTED HEADING TEXT

Actual order:
ASSERTED HEADING TEXT
LOCATED HEADING
NAVIGATED TO URL
*/

// 1- Callbacks
function getURL02(callback) {
    setTimeout(() => {
        console.log('NAVIGATED TO URL');
        callback();
    }, 5000);
};

function findHeadingElement02(callback) {
    setTimeout(() => {
        console.log('LOCATED HEADING');
        callback();
    }, 2000)
};

function assertHeadingElementText02() {
    setTimeout(() => {
        console.log('ASSERTED HEADING TEXT');
    }, 1000);

};

getURL02(() => {
    findHeadingElement02(() => {
        assertHeadingElementText02();
    });
});

// Callback Error Handling
function checkAgeForDL(callback, err) {
    setTimeout(() => {
        const age = Math.floor(Math.random () * 50);
        console.log('Age is', age)
        if (age < 16) err();
        else callback();
    }, 2000);
}

checkAgeForDL(() => {
    console.log('YOU CAN GET DL');
}, 
() => {
    console.log('YOU CANNOT GET DL');
});