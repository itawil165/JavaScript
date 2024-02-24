function request(url) {
    return new Promise((success, error) => {
        if (url) success('Status Code: 200');
        else error('Status Code: 404 - NOT FOUND');
    })
};

const url = 'www.techglobalschool.com';
const noUrl = '';

// If successful
request(url)
.then((success) => {console.log(success)})
.catch((error) => {console.log(error)});

// If unsuccessful
request(noUrl)
.then((success) => {console.log(success)})
.catch((error) => {console.log(error)});