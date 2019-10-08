

// lecture 314: filter()
// -- Mark 1 --
const myArray = [ 1,3,5,7,9 ];

// filter is exactly as it sounds, we want to filter out the elements in our array based off the
// function we pass to the filter() call and filter, like map, will give us back a new array
// instead of modifying the original array, which in our example is myArray above and what we
// will return from filter will be a true or false value and so say we wanted to filter out
// anything that is less than 5 and if the expression evaluates to true then that item will be
// added to the new array and if the expression evaluates to false then that item will be not
// be added to the new array, in other words it will be filtered out and go to the counsel to
// test this out

const filteredArray = myArray.filter( ( item ) => item > 4 );

console.log( filteredArray );

console.log(       myArray );

// returns: (3) [5, 7, 9]
// returns: (5) [1, 3, 5, 7, 9]

// End of -- Mark 1 --




// lecture 315: includes()
// -- Mark 2 --
const myArray = [ 1,2,3,4,5 ];

// try this out in the counsel
myArray.includes( 3 );
// returns: true
// this returns true because 3 does exist in our array

myArray.includes( 9 );
// returns: false

// remember, the second argument we could take in the includes() method is the index we want to
// start searching
myArray.includes( 2, 3 );
// returns: false

myArray.includes( 2, 1 );
// returns: true

// so this is how it works when it comes to primitive types

const newArray = [ { id : 1 }, { id : 2 }, { id : 3 } ];

newArray.includes( { id : 2 } );
// returns: false
// the reason this returns false has to do with how JavaScript references objects versus primitive
// types and what are primitive types? there 6 primitive types: string, boolean, null, undefined,
// number and symbol ( symbol is a unique thing ) and these primitive types all exist inside
// JavaScript's memory bank

// when we set a const equal to a primitive type, for example:
// const a = 3;

// then in this case JavaScript is pointing to 3 in memory and if set another const called b = 3
// const b = 3;

// then JavaScript will point to 3 in memory for const b as well and if we set const c = b
// const c = b;

// then in this case c is pointing to b, which then points to our value in memory of 3 so we can
// see this principal in action down below:
let b = 3;
const c = b;
console.log( b );
// returns: 3

// if we change b = 5 then b is pointing to the value in memory of 5 
b = 5
console.log( b );
// returns: 5

// however c is still pointing to 3
console.log( c );
// returns: 3

// going to " newArray.includes( { id : 2 } ); " why did this not work? because inside JavaScript
// anything that is not a primitive type is called an object and objects are unique so whenever an
// object gets instantiated it gets its own unique reference in memory and before we explore this
// what is an object? an object in JavaScript is anything other than one of the 6 primitive types
// so arrays are also objects and objects are really just collection of things that have properties
// and the properties have values and methods are pretty much just properties that point to
// functions and that's why were able to use them like functions and we call them use dot notation
// like it is property on an object

// so anytime an object gets instantiated what you see is that object gets stored as a brand new
// reference in memory so
const obj1 ={ id : 1 };
const obj2 ={ id : 1 };
obj1 === obj2;
// returns: false

// because each object has its own unique reference in memory and JavaScript is comparing to see
// if reference in memory is the same, JavaScript is not comparing whether the value of obj1 equals
// the value of obj2, instead JavaScript is comparing if obj1 and obj2 are pointing to the same
// place in memory, however if we point obj3 to obj2 then we will see obj3 will equal { id : 1 }
obj3 = obj2;
console.log( obj3 );
// returns: { id : 1 }

// so now we can see since both obj2 and obj3 are pointing to the same reference in memory or
// pointing to the same object in memory so if we do a comparison between obj3 and obj2 or
obj3 === obj2;
// returns: true

// because both objects are pointing to the same reference in memory

// now the interesting thing about objects is that if we modify the values for a specific property,
// the objects will still point to the same object reference in memory, for example:
obj2.id = 17;
// returns: 17
console.log( obj2 );
// returns: { id : 17 }
console.log( obj3 );
// returns: { id : 17 }

// so this will be how we will get our includes to work with objects in JavaScript, for example,
const o1 = { id : 1 };
const o2 = { id : 2 };
const o3 = { id : 3 };
const newestArray = [ o1, o2, o3 ];
newestArray.includes( o1 );
// returns: true

// and this returns true because we are referencing a pointer ( i.e. o1 ) in memory and the
// elements inside newestArray are not new objects but they are all pointing to the same
// objects in memory so in this case, includes() works

// in other words, includes is checking to see if the reference we are passing in, { id : 1 } in
// our case for pointer o1, equals any of the object references that are in memory for newestArray
// or { id : 1 }, { id : 2 } or { id : 3 } and in this case, we have a match => { id : 1 } so
// newestArray.includes( o1 ); returns true

// we will explore these concepts a lot more as we code and it will start to make more sense as to
// why the code we write is structured the way it is

// End of -- Mark 2 --


