// module.exports.counter = (arr) => {
//     return 'there are ' + arr.length + ' elements in this array';
// }

// module.exports.adder = (a,b) => {
//     return `the sum of those 2 numbers is ${a+b}`;
// }

// module.exports.pi = 3.142;

// // console.log(counter(['a', 'b', 'c']));

var counter = (arr) => {
        return 'there are ' + arr.length + ' elements in this array';
    }
    
var adder = (a,b) => {
        return `the sum of those 2 numbers is ${a+b}`;
    }
    
var pi = 3.142;
    
    // console.log(counter(['a', 'b', 'c']));

module.exports = {
    counter:counter,
    adder:adder,
    pi:pi,
}