import * as driver from './driver-helper.js';
// import { setDriver, getDriver, quitDriver } from './driver-helper.js';
import getInfo from './driver-helper.js'; // will import without needing the above {} or name (driver)

getInfo();

function validateHomePage() {
    driver.setDriver();
    driver.getDriver();
    // Validate script
    driver.quitDriver();
};

validateHomePage();