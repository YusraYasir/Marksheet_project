#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.rgb(204,204,204)(`\n \t\t <<< =======================================================>>>\n`));
console.log(chalk.bold.rgb(204,204,204)(chalk.blue.bold.italic(`\t\t\tWelcome To \` code With Yusra \` MarkSheet \n`)));
console.log(chalk.bold.rgb(204,204,204)(`\t\t<<< ====================================================== >>> `))

// Asking for Roll No
let roll = await inquirer.prompt({
    type: "number",
    name: "num1",
    message:"Please enter your Roll number"
} )

// Roll No
let rollNum:number = roll.num1

if(rollNum === 92747){


// Asking for marks
let marks = await inquirer.prompt([
{
    name:"TypeScript",
    type: "number",
    message: "Please enter your Typescript number"
},{ 
     name:"python",
     type: "number",
     message:"Please enter your python number"

},{
    name:"csharp",
    type: "number",
    message:"Please enter your csharp number"
}
])

//Grade 
// extract
let ts:number = marks.TypeScript
let pyth:number = marks.python
let c_sharp:number = marks.csharp

//percentage
let totalMarks:number = 300
let obtainMarks:number = ts + pyth + c_sharp
let percentage = ((obtainMarks/totalMarks)*100)
let perc = Math.floor(percentage)

    //  grade based on percentage
    let grade = "";
    if (perc >= 90) {
        grade = "A+";
    } else if (perc >= 80) {
        grade = "A";
    } else if (perc >= 70) {
        grade = "B";
    } else if (perc >= 60) {
        grade = "C";
    } else if (perc >= 50) {
        grade = "D";
    } else {
        grade = "Fail";
    }
// answer
console.log("\nName Yusra");
console.log("Father Name: Arshad");
console.log(`Typescript marks = ${ts} out of 100`);
console.log(`CSharp marks = ${c_sharp} out of 100`);
console.log(`Python marks = ${pyth} out of 100`);
console.log(`Obtain Marks =  ${obtainMarks} Total Marks = ${totalMarks}`);
console.log(`Percentage = ${perc}`); 
console.log(`Your Grade is ${grade}`);

}else{
    console.log(chalk.red.bold.italic("invalid Roll Number"));
    
}