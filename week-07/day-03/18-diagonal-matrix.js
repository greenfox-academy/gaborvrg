'use strict';
// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

var sizeOfMatrix = 6;
var matrix = [];

for (var x = 0; x < sizeOfMatrix; x++) {
    for (var y = 0; y < sizeOfMatrix; y++) {
        if (x === sizeOfMatrix - y -1) {
            matrix[x,y] = 1;
        } else {
            matrix[x,y] = 0;
        }
    }
    console.log(matrix.join(' '));
}


