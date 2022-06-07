const generatePage = (name2, github) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name= "viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
    </head>
    
    <body>
        <h1>${name2}</h1>
        <h2><a ref="http://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};

module.exports = generatePage;