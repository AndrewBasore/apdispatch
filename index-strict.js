/* 
 * Primary file for API
 * 
*/

// Dependencies
const server = require('./lib/server');
const workers = require('./lib/workers');
const cli = require('./lib/cli');

// Declare the app
const app = {};

// This will throw error when --use_strict flag is used when calling node on this file. 
// This will help to find syntax errors that may not necessarily cause node to crash
foo = 0;

// Init function
app.init = () =>{
    // Start the server
    server.init();

    // Start the workers
    workers.init();

    // Start the CLI, but make sure it starts last

    setTimeout( () =>{
        cli.init();
    }), 50;
};

// Execute
app.init();


// Export the app
module.exports = app;