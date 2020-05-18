var name = "";
var age = 0;
var gender = "";
var income = 0.0;
var tax = 0.0;

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('What is your name? ', (nameTemp) => {
    // TODO: Log the answer in a database
    name = nameTemp;
    rl.question('What is your age? ', (ageTemp) => {
        // TODO: Log the answer in a database
        age = ageTemp;
        rl.question('What is your gender?(M/F) ', (genderTemp) => {
            // TODO: Log the answer in a database
            gender = genderTemp;
            rl.question('What is your annual income? ', (incomeTemp) => {
                // TODO: Log the answer in a database
                income = incomeTemp;
                calcualteIncomTax();
                rl.close();
              });
          });
      });
  });


function calcualteIncomTax(){
    console.log("calculating income tax....");

    if(age > 80){
        console.log("above 80")
        if (income < 500001) {
            tax = 0;
        } else if (income > 1000000) {
            tax = 37500 + (income - 750000) * 0.3;
        } else if (income > 500000 && income < 1000000) {
            tax = 12500 + (income - 500000) * 0.2;
        } else {
            tax = 0;
        }
        
    }else if(age< 80 && age>60){
        console.log("60 to 80")
        if (income < 500001) {
            tax = 0;
        } else if (income > 1000000) {
            tax = 37500 + (income - 750000) * 0.3;
        } else if (income > 500000 && income < 1000000) {
            tax = 12500 + (income - 500000) * 0.2;
        } else if (income > 300000 && income < 500000) {
            console.log('this slab......');
            tax = (income - 300000) * 0.05;
        } else {
            tax = 0;
        }
        
    }else{
        if (income < 500001) {
            tax = 0;
        } else if (income > 1500000) {
            tax = 187500 + (income - 1500000) * 0.3;
        } else if (income > 1250000) {
            tax = 125000 + (income - 1250000) * 0.25;
        } else if (income > 1000000) {
            tax = 75000 + (income - 1000000) * 0.2;
        } else if (income > 750000) {
            tax = 37500 + (income - 750000) * 0.15;
        } else if (income > 500000) {
            tax = 12500 + (income - 500000) * 0.1;
        } else if (income > 250000) {
            tax = (income - 250000) * 0.05;
        } else {
            tax = 0;
        }
    }

    console.log("Hello " + name + ", Your Tax would be : " + tax);
}
