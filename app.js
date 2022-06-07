const fs = require('fs');
const generatePage = require("./src/page-template.js");

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name2, github] = profileDataArgs;


fs.writeFile("index.html", generatePage(name2, github), err => {
    if (err) throw new Error(err);
    
    console.log("Portfolio complete!  Check out index.html to see the output!");
});