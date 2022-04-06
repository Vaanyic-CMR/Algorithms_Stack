let arr1 = [ 0, 1, 2, 3, 4, 5, 6 ];
let arr2 = [ 0, 1, 2, 3, 4, 5 ];

function reverse( arr ) {
    if ( arr.length%2 == 0 ) {
        for ( let i=0; i<arr.length/2; i++ ) {
            let temp = arr[i]
            arr[i] = arr[arr.length-1-i];
            arr[arr.length-1-i] = temp;
        };
    }
    else {
        for ( let i=0; i<=Math.floor(arr.length/2); i++ ) {
            let temp = arr[i]
            arr[i] = arr[arr.length-1-i];
            arr[arr.length-1-i] = temp;
        }
    };
};

// reverse( arr1 );
// reverse( arr2 );
// console.log( "arr1:", arr1 );
// console.log( "arr2:", arr2 );

function rotate( arr, shiftBy=1 ) { // only workds for shiftBy=1, I spent 3 hours on this and couldn't get anything better.
    if ( arr.length < 2 ) { return null };

    if ( shiftBy > 0 ){
        let held_value = null;
        for ( let i=0; i<arr.length; i++ ) {
            if ( held_value == null ) {
                if ( arr[i+shiftBy] != undefined ) {
                    held_value = arr[i+shiftBy];
                    arr[i+shiftBy] = arr[i]
                }
                else { throw new Error("Index Error: shiftBy cannot be greater than Array.length") }
            }
            else if ( arr[i+shiftBy] == undefined ) {
                const temp = arr[shiftBy-(arr.length-i)];
                arr[shiftBy-(arr.length-i)] = held_value
                held_value = temp;
            }
            else {
                const temp = arr[i+shiftBy];
                arr[i+shiftBy] = held_value;
                held_value = temp;
            };
        }
    }
    else if ( shiftBy < 0 ) {

    }
    else { console.log("Invalid shiftBy:", shiftBy) };
};

// rotate( arr1 );
// rotate( arr2 );
// console.log( arr1 );
// console.log( arr2 );

function filterRange( arr, min, max ) {
    for ( let i=0; i<arr.length; i++ ) {
        if ( arr[i] < min || arr[i] > max ) {
            for ( let j=i; j<arr.length; j++ ) {
                arr[j] = arr[j+1]
            };
            arr[arr.length-1] = undefined;
            i--;
        };
    };
};

filterRange( arr1, 2, 4 );
console.log( arr1 );

const concat = ( arr1, arr2 ) => [ ...arr1, ...arr2 ]

// newArr = concat( arr1, arr2 );
// console.log( newArr );