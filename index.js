function receivesAFunction(callback) {
    callback();
}

module.exports = { receivesAFunction };

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("I am a named function");
    };
}

module.exports = { returnsANamedFunction };

function returnsAnAnonymousFunction() {
    return function() {
        console.log("I am an anonymous function");
    };
}

module.exports = { returnsAnAnonymousFunction };
