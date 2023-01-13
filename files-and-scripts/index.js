const c = require('ansi-colors');

const {addTwo, renameDog, randNumColors} = require("./numberFunctions");

//console.log(addTwo(3, 4));
//console.log(renameDog("Nancy", "Jennie"));


// Destructuring, as above so below
x = [1, 2, 3];
//console.log(x);
const [a, b, d] = x;
//console.log(a, b, d);


// console.log(c.red('This is a red string!'));
// console.log(c.green('This is a green string!'));
// console.log(c.cyan('This is a cyan string!'));
// console.log(c.yellow('This is a yellow string!'));
// console.log(c.bold.red('this is a bold red message'));
// console.log(c.bold.yellow.italic('this is a bold yellow italicized message'));
// console.log(c.green.bold.underline('this is a bold green underlined message'));
// console.log(c.yellow(`foo ${c.red.bold('red')} bar ${c.cyan('cyan')} baz`));
// console.log(c.bgCyan.red("Red on Blue"));

let list = randNumColors(1500);
for(let i=0; i<list.length; i++){
    let num = list[i];
    if(num<0){console.log(c.red(num));}
    else if (num>100){console.log(c.green(num));}
    else if (0<=num && num<=100 && num%7===0){console.log(c.bgYellow(num));}
    else if (0<=num && num<=100){console.log(c.blue(num));}
}