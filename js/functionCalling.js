// this demonstrates that functions can be called with fewer or more arguments
// than are formally defined.
function myFunc (arg1, arg2, arg3) {
    // this is an idiom used to convert an arguments object to an array
    argsArray = Array.prototype.slice.call(arguments);
    console.log(argsArray.toString());
    for (var i = 0; i < argsArray.length; i++) {
        console.log("argument " + (i) + ": " + argsArray[i] + "(type " + typeof argsArray[i] + ")");
    }
}

function myFunc2 (arg1, arg2, arg3, arg4) {
    myFunc(arg1, arg2, arg3, arg4);
}

console.log("calling myFunc...");
myFunc("hello", "foo", "bar");
myFunc("hello");
myFunc("hello", "foo", "bar", "baz");

console.log("calling myFunc2...");
myFunc2("hello", "foo", "bar");
myFunc2("hello");
myFunc2("hello", "foo", "bar", "baz");
