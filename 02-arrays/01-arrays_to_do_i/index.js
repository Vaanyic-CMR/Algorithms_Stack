
function pushFront( arr, val ) {
    return [ val, ...arr ]
};

let arr = [ 0, 1, 2 ];
arr = pushFront( arr, -1 );
console.log( arr );

function popFront( arr ) {
    const [ val, ...arr2 ] = arr;
    return val, arr2;
};

let val;
val, arr = popFront( arr );
console.log( arr );

function insertAt( arr, idx, val ) {
    let arr1=[], arr2=[];

    if ( idx==0 ) { return pushFront( arr, val ); }

    for ( let i=0; i<arr.length; i++ ) {
        if ( i <= idx ) { arr1 = [ ...arr1, arr[i] ]; }
        else if ( i > idx ) { arr2 = [ ...arr2, arr[i] ]; };
    }
    return [ ...arr1, val, ...arr2 ];
};

arr = insertAt( arr, 1, 1.5 )
console.log( arr )

function removeAt( arr, idx ) {
    let arr1=[], arr2=[];

    if ( idx==0 ) {
        const [ _val, newArr ] = popFront( arr );
        return newArr;
    }

    for ( let i=0; i<arr.length; i++ ) {
        if ( i < idx ) { arr1 = [ ...arr1, arr[i] ]; }
        else if ( i > idx ) { arr2 = [ ...arr2, arr[i] ]; };
    }
    return [ ...arr1, ...arr2 ];
};

arr = removeAt( arr, 2 )
console.log( arr )