const rFib = num => {
    num = Math.trunc( num );
    if ( num <= 0 ) { return 0 }
    else if ( num === 1 ) { return 1 };

    return rFib(num-1) + rFib(num-2);
};
const rTrib = num => {
    num = Math.trunc( num );
    if ( num <= 1 ) { return 0 }
    else if ( num === 2 ) { return 1 };

    return rTrib(num-1) + rTrib(num-2) + rTrib(num-3);
};
const ackermann = ( num1, num2 ) => {
    num1 = Math.trunc( num1 );
    num2 = Math.trunc( num2 );

    if ( num1 < 0 || num2 < 0 ) { return 0; }
    else if ( num1 === 0 ) { return num2 + 1 }
    else if ( num1 > 0 && num2 === 0 ) { ackermann( num1-1, 1 ) };
    
    return ackermann( num1-1, ackermann( num1, num2-1 ) );
};
const rZib = num => {
    // num = Math.trunc( num );
    if ( num <= 0 ) { return 1 }
    else if ( num === 1 ) { return 1 }
    else if ( num === 2 ) { return 2 }
    else if ( num%2 !== 0 ) { return rZib(num) + rZib(num-1) + 1 }
    else if ( num%2 === 0 ) { return rZib(num) + rZib(num+1) + 1 }
    // return 0;
};

// console.log( `rFib(2): ${rFib(2)}` );
// console.log( `rFib(3): ${rFib(3)}` );
// console.log( `rFib(4): ${rFib(4)}` );
// console.log( `rFib(5): ${rFib(5)}` );
// console.log( `rFib(3.65): ${rFib(3.65)}` );
// console.log( `rFib(-2): ${rFib(-2)}` );

// console.log( `rTrib(3): ${rTrib(3)}` );
// console.log( `rTrib(4): ${rTrib(4)}` );
// console.log( `rTrib(5): ${rTrib(5)}` );
// console.log( `rTrib(6): ${rTrib(6)}` );
// console.log( `rTrib(3.65): ${rTrib(3.65)}` );
// console.log( `rTrib(-2): ${rTrib(-2)}` );

// console.log( `ackermann(0, 1): ${ackermann(0, 1)}` );
// console.log( `ackermann(1, 1): ${ackermann(1, 1)}` );
// console.log( `ackermann(1, 2): ${ackermann(1, 2)}` );
// console.log( `ackermann(4, 10): ${ackermann(4, 10)}` );

console.log( `rZib(4): ${rZib(4)}` );
console.log( `rZib(10): ${rZib(10)}` );
console.log( `rZib(100): ${rZib(100)}` );