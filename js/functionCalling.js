// this demonstrates that functions can be called with fewer or more arguments
// than are formally defined.
function myFunc (arg1, arg2, arg3) {
    // this is an idiom used to convert an arguments object to an array
    argsArray = Array.prototype.slice.call(arguments);
    console.log(argsArray.toString());
}

myFunc("hello", "foo", "bar");
myFunc("hello");
myFunc("hello", "foo", "bar", "baz");
