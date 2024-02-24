/*
goToURL()
hoverOverPractices()
clickOnFrontendTesting()
clickOnAlerts()
validateHeadingIsAlerts()
*/

async function goToURL() {
    return new Promise((sucess, error) => {
        setTimeout(() => {
            console.log('1. URL');
            sucess();
        }, 2000);
    });
};

async function hoverOverPractices() {
    return new Promise((sucess, error) => {
        setTimeout(() => {
            console.log('2. HOVER OVER');
            error('INTENDID ERROR');
        }, 1000);
    });
};

async function clickOnFrontendTesting() {
    return new Promise((sucess, error) => {
        setTimeout(() => {
            console.log('3. CLICK ON FRONTEND TESTING');
            sucess();
        }, 1000);
    });
};

async function clickOnAlerts() {
    return new Promise((sucess, error) => {
        setTimeout(() => {
            console.log('4. CLICK ON ALERTS');
            sucess();
        }, 3000);
    });
};

async function validateHeadingIsAlerts() {
    return new Promise((sucess, error) => {
        setTimeout(() => {
            console.log('5. VALIDATE ALERTS HEADING');
            sucess();
        }, 1000);
    });
};

async function test() {
    try {
        await goToURL();
        await hoverOverPractices();
        await clickOnFrontendTesting();
        await clickOnAlerts();
        await validateHeadingIsAlerts();
    }
    catch(error) {
        console.log(error);
    };
};

test();