async function goToURL() {
    return new Promise((success, error) => {
        setTimeout(() => {
            console.log('URL')
            success();
        }, 1000);
    })
};

async function validateElement() {
    console.log('VALIDATION')
};

async function mainTest() {
    await goToURL()
    await validateElement();
};

mainTest();