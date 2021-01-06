Number.prototype.isPrime = function() {
  for( let i=2; i <= Math.sqrt(this); i++ ) {
    if( this % i === 0 ) {
      return false;
    }
  } 
  return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

//  The 100,000th prime number is 1299709
// This took 13503.354499995708 milliseconds to run

// The 1,000,000th prime number is 15485863
// This took 468606.90160000324 milliseconds to run

