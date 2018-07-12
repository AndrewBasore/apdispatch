/* 
 * Library that demonstrates something throwing when its init() function is called
 *
 */

 // Container for the model
const example = {};


// Init function
example.init = () =>{
    // This error is created intentionally (bar is not defined)
    var foo = bar;
}

module.exports = example;