
// Vuejs 3 Global Plugin

// Step 1.
// Create empty object meant to represent the class for the plugin
// Info
// Use Object.create(null) to create object with no prototype chain
let GlobalPlugin = Object.create(null);

// Step 2.
// Define a function definition expression
let sayHello = function() {
    console.log("This is a message sent from the global plugin, Hello!");
}

// Step 3.
// This should be the second to the last part of file
// Plugin name is GlobalPlugin
// The first parameter Vue is the vue instance that is provided by vuejs when calling the use method
GlobalPlugin.install = function(Vue, options) {
    console.log('Setting up GlobalPlugin plugin on the global vue instance');
    // Quick return because I don't pass anything in on the use method in the main.js
    if (typeof options == 'undefined') console.log('The options parameter on the plugin is purely optional');
    // config.globalProperties is the namespace of all global methods for vuejs3
    // use $ to help indicate it is a user-defined method
    // Give it a name
    // Assign to method in the file
    // All methods in this file are file contexted and the definitions can only be seen in this file
    Vue.config.globalProperties.$sayHello = sayHello;

    // Syntax for directive
    // Define directive object with the lifecycle hooks you want to attach
    // The second parameter could optionally be defined after step 2 in it's own object
    Vue.directive('bold', {
        // vNode is optionally passed in as the third parameter which represents the virtual node
        // I would strongly recommend not touching it
        mounted(element, binding) {
            console.log('Directive is being applied to element');
            // Binding is whatever is in the quotation marks
            element.style.fontWeight = binding.value;
        }
    })
}

// Step 4
// Export the GlobalPlugin plugin
// Evan Yu confirmed the export default as the proper syntax for exporting a module in Vuejs 3
export default GlobalPlugin;