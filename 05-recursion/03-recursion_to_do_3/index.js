const rBinarySearch = ( arr, val ) => {
    middleIdx = Math.round( (arr.length-1)/2 );
    if ( arr.length === 1 && arr[0] !== val ) { return false }
    else if ( arr.length === 1 && arr[0] === val ) { return true }
    else if ( val === arr[middleIdx] ) { return true; }
    else if ( val < arr[middleIdx] ) { return rBinarySearch( arr.slice(0, middleIdx), val) }
    else if ( val > arr[middleIdx] ) { return rBinarySearch( arr.slice(middleIdx), val) }
};

// arr1 = [1, 2, 5, 6];
// arr2 = [4, 5, 6, 8, 12]
// console.log( `rBinarySearch(arr1, 4): ${rBinarySearch(arr1, 4)}` );
// console.log( `rBinarySearch(arr2, 5): ${rBinarySearch(arr2, 5)}` );

let count = 0;
const rGCF = ( num1, num2 ) => {
    count++;
    if ( num1 === num2 ) { return num1 }
    else if ( num1 > num2 ) {
        if ( num1 % num2 === 0 ) { return num2 }
        else { return rGCF( num1-num2, num2 ) }
    }
    else if ( num1 < num2 ) {
        if ( num2 % num1 === 0 ) { return num1 }
        else { return rGCF( num1, num2-num1 ) }
    }
};

// console.log( `rGCF(10, 10): ${rGCF(10, 10)}` );
// console.log( `rGCF(50, 9): ${rGCF(50, 9)}` );
console.log( `rGCF(123456,987654): ${rGCF(123456,987654)}` );
console.log( count )