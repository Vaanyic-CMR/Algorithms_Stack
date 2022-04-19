const rSigma = num => {
    if ( num < 1 ) {
        return 0;
    };
    
    return rSigma( Math.floor(num-1) ) + Math.floor(num);
};
const rFact = num => {
    if ( num <= 1 ) {
        return 1;
    };
    
    return rFact( Math.floor(num-1) ) * Math.floor(num);
};

console.log( `rSigma(5): ${rSigma(5)}` );
console.log( `rSigma(2.5): ${rSigma(2.5)}` );
console.log( `rSigma(-1): ${rSigma(-1)}` );

console.log( `rFact(3): ${rFact(3)}` );
console.log( `rFact(6.5): ${rFact(6.5)}` );