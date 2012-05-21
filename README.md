Loader.js
=========

A simple, non-blocking javascript loader. 

Note: this module uses the script.async attribute (see line 30), which 
tells the browser to load the script asynchronously. Most modern browsers
support this async functionality, but those that don't will simply 
overlook it without causing problems. 

In addition, older versions of IE, Webkit, and Firefox 4+ that don't 
support the async attribute will still load scripts asynchronously 
if you use this module. The reason is this: if you use javascript to
insert a script element into the DOM, those browsers will load it 
asynchronously. Only Opera and pre-Firefox 4 don't do this. 

EXAMPLE 1: Loading a script.
----------------------------------------------
 
This will load a script called 'myscript.js':

    loader.load('myscript.js'); 

EXAMPLE 2: Loading a script then executing a function.
----------------------------------------------

First, define a function called ready():

    var ready = function() {
        console.log('Ready!');
    };

Next, tell the loader to load 'myscript.js' and 
then execute ready() after myscript.js has loaded:

    loader.load('myscript.js', ready);