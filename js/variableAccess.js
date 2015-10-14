// This tests a way to prevent a TypeError
// by using && to test for the existence of a member
// before accessing its contents

var innerMap = {'foo':1, 'bar':2};
var outerMap = {'inner':innerMap};

// returns undefined
innerMap.thing

// throws TypeError
outerMap.thing.thing2

// also throws undefined
outerMap.inner.thing

// returns 2
outerMap.inner.bar

// returns 2, not a boolean
// (similar to linux shell behavior)
outerMap.inner && outerMap.inner.foo

// returns undefined
outerMap.thing && outerMap.inner.foo
