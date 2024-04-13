#! /usr/bin/env node

import inquirer from "inquirer";
let myBalance = 28500;
let myPin = 4321;
let pinAnswer = await inquirer.prompt(
        [   
            {
                name:    "pin",
                message: "Enter Your Pin",
                type:    "number"
            }
        ]
);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!!");
    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "Please Select Option",
                type: "list",
                choices: ["Cash Withdrawal", "Balance Inquiry","20000", "10000", "5000", "3000", "2000", "1000"]
            }
        ]
    );

    if (operationAns.operation === "Cash Withdrawal") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name:    "amount",
                    message: "Enter Your Amount",
                    type:    "number",
                },
            ]
        );

    if (amountAns.amount > myBalance){
        console.log("Insufficiant Balance ")

    }  else if(myBalance -= amountAns.amount){
        console.log(`Your Remaining Balance is ${myBalance}`)
    }

    } else if(operationAns.operation === "20000"){
        myBalance -= 20000
        console.log(`Your Remaining Balance is ${myBalance}`)

    } else if(operationAns.operation === "10000"){
        myBalance -= 10000
        console.log(`Your Remaining Balance is ${myBalance}`)

    } else if(operationAns.operation === "5000"){
        myBalance -= 5000
        console.log(`Your Remaining Balance is ${myBalance}`)

    } else if(operationAns.operation === "3000"){
        myBalance -= 3000
        console.log(`Your Remaining Balance is ${myBalance}`)

    } else if(operationAns.operation === "2000"){
        myBalance -= 2000
        console.log(`Your Remaining Balance is ${myBalance}`)

    } else if(operationAns.operation === "1000"){
        myBalance -= 1000
        console.log(`Your Remaining Balance is ${myBalance}`)

}   else if(operationAns.operation === "Balance Inquiry"){
        console.log(`Your Remaining Balance is ${myBalance}`)
} 

}   else {
        console.log("Incorrect Pin Number");
}