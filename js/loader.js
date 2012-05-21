/**
 *    A module for loading scripts asynchronously in most browsers.
 *    @param {String}   file - The path of the file you want to load.
 *    @param {Function} callback (optional) - The function to call when 
 *                      the script loads.
 */
var loader = loader || (Function() {
    return {
    	
    	// This is the method that loads the script.
    	load: function(file, callback) {

	    // First, create a script element.
            var script = document.createElement('script');
            script.src = file, script.async = true;
            
            // If a callback is defined, we'll want to execute it after 
            // the script has loaded, so we need to check to see 
            // if the script has finished loading. 
            if (callback !== undefined) {
            	
            	// When IE loads a script, it calls script.onreadystatechange() 
            	// over and over again as the script loads. We can use 
            	// script.onreadystatechange() to find out when the script 
            	// has finished loading.
	        script.onreadystatechange = function() {
	                
	            // When the script finishes loading, IE sets 
	            // script.readyState to either 'loaded' or 'complete'.
	            if (script.readyState === 'loaded' ||
	                script.readyState === 'complete') {
	                    
	                // We don't need onreadystatechange() anymore, so
	                // let's set it to null to keep it from firing again.
	                script.onreadystatechange = null;
	                    
	                // Now we can execute the callback.
	                callback (file );
	            }
	        };
	            
	        // Other (non-IE) browsers call script.onload() when the 
	        // script has loaded, so we can execute the callback with that.
	        script.onload = function () {
	            callback ( file );
	        };
            }
            
            // Now that everything is ready, we can attach the script element 
            // to the DOM. Attaching it to the DOM causes it to start the 
            // loading process. We want to add the script element to the end 
            // of the document so that it won't block the rest of the page 
            // if the browser is old and can't load scripts asynchronously.
            document.body.appendChild(script);
        } 
    };
}());