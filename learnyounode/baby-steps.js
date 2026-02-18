
/*
 ## BABY STEPS (Exercise 2 of 13)  
   
  Create a file named baby-steps.js.  
   
  Write a program that accepts one or more numbers as command-line arguments  
  and prints the sum of those numbers to the console (stdout).  
*/
let sum = 0;
for (let index = 2; index < process.argv.length; index++) {
    
    sum += Number(process.argv[index]);
    
}
console.log(sum);
