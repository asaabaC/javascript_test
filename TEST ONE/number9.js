
// printing Fibonacci series up to a certain limit
  fibonacci(limit);
    //Initialize first two Fibonacci numbers
    a, b = 0, 1
    
    //Iterate while the current Fibonacci number is less than or equal to the limit
     a <= limit;
        print(a, end=", ")
        //Update Fibonacci sequence: swap values and calculate the next number
        a, b = b, a + b

//Call the function with the limit as 100
fibonacci(100)
