const fs = require('fs');

// create 2 functions that return a  promise, one for writing a file and another for copying a file

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the promise and send the error to the Promises's '.catch() method
            if (err) {
                reject(err)
                // return out of functiom
                return;
            }
        // if everything went well, resolve the Promise and send successful data to the .then() method
        resolve ({
            ok: true,
            message: 'File created!'
        });
    });
});
};

const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', '.dist/style.css', err => {
            // if there's an error, reject the promise and send the error to the Promises's '.catch() method
            if (err) {
                reject(err)
                // return out of functiom
                return;
            }
        // if everything went well, resolve the Promise and send successful data to the .then() method
        resolve ({
            ok: true,
            message: 'File created!'
        });
    });
});
};