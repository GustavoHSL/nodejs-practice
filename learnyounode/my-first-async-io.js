/* ## MY FIRST ASYNC I/O! (Exercise 4 of 13)  
   
  Create a file named my-first-async-io.js.  
   
  Write a program that uses a single asynchronous filesystem operation to  
  read a file and print the number of newlines it contains to the console  
  (stdout), similar to running cat file | wc -l.  
   
  The full path to the file to read will be provided as the first  
  command-line argument.  */
const { readFile } = require('fs');

const fs = require('fs');
//funcao de callback para tratar o resultado da leitura do arquivo
function callback(err, data) {
    if (err) {
        console.log(err);
        return;
    }
    
        str = data.toString();
        arr = str.split('\n');
        console.log(arr.length - 1);
    
}
//leitura do arquivo de forma assincrona, passando a funcao de callback para tratar o resultado
fs.readFile(process.argv[2], 'utf-8', callback);
//maneira assincrona significa que o programa nao vai esperar a leitura do arquivo para continuar a execucao, 
// vai passar a funcao de callback para ser executada quando a leitura for concluida,
// enquanto isso o programa pode continuar a executar outras tarefas.