/* 
 * Primary file for API
 * 
 * 
 * command to run debugger:
 * node inspect --filename
 * 
 * commands for debugger:
 * cont: step forward in execution
 * repl: open a repl to write JS mid-execution to log or modify data
*/

// Dependencies
const server = require('./lib/server');
const workers = require('./lib/workers');
const cli = require('./lib/cli');
const exampleDebuggingProblem = require('./lib/exampleDebuggingProblem');

// Declare the app
const app = {};

// Init function
app.init = () =>{
    // Start the server
    debugger;
    server.init();
    debugger;
    // Start the workers
    debugger;
    workers.init();
    debugger;
    // Start the CLI, but make sure it starts last
    debugger;
    setTimeout( () =>{
        cli.init();
    }, 50);
    debugger;

    // Set foo at 1
    let foo = 1;
    debugger;
    // Increment foo
    foo++;
    debugger;
    // Square foo
    foo = foo * foo;
    debugger;
    // Convert foo to a string
    foo=foo.toString();
    debugger;
    // Call the init function to throw the error
    exampleDebuggingProblem.init();
    console.log("I have called example.init()");
    debugger;
};

// Execute
app.init();


// Export the app
module.exports = app;