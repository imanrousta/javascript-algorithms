
function fibonacci(n) {
  let fib = [0, 1];

  if ( n === 0) {
    return 0 ;
  } else if (n === 1) {
    return [0,1] ;
  } else {
    for (i = 2; i < n ; i++ ) {
      fib[i] = fib[i-1] + fib[i-2] ;
    }
    
    return fib ;
  };
};
