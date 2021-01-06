// recursive for 20, it took around 3 miliseconds
function rFib( n ) {
  if ( n < 2 ) {
      return n;
  }
  return rFib( n-1 ) + rFib( n-2 );
}
console.time('rfib');
rFib(20);
console.timeEnd('rfib');
// iterative for 20, it took about 0.08 miliseconds
function iFib( n ) {
  const vals = [ 0, 1 ];
  while(vals.length-1 < n) {
      let len = vals.length;
      vals.push( vals[len-1] + vals[len-2] );
  }
  return vals[n];
}
console.time('ifib');
iFib(20);
console.timeEnd('ifib');

// rfib: 2.695068359375 ms
// ifib: 0.0849609375 ms
// I tried 200 and 2000, iterate has obvious time effiency on this problem

