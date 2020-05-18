var name = "";
var age = 0;
var gender = "";
var income = 0.0;
var tax = 0.0;

var twoHalfLac = 250000;
var threeLac = 300000;
var fiveLac = 500000;
var sevenHalfLac = 750000;
var tenLac = 1000000;
var tweleveHalfLac = 1250000;
var fifteenLac = 1500000;
var fiftyLac = 5000000;

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
        if (income < fiftyLac) {
            tax = 0;
        } else if (income > tenLac) {
            tax = 37500 + (income - tenLac) * 0.3;
        } else if (income > 500000 && income < tenLac) {
            tax = 12500 + (income - 500000) * 0.2;
        } else {
            tax = 0;
        }
        
    }else if(age< 80 && age>60){
        console.log("60 to 80")
        if (income < fiftyLac) {
            tax = 0;
        } else if (income > tenLac) {
            tax = 37500 + (income - tenLac) * 0.3;
        } else if (income > fiveLac && income < tenLac) {
            tax = 12500 + (income - fiveLac) * 0.2;
        } else if (income > threeLac && income < fiveLac) {
            console.log('this slab......');
            tax = (income - threeLac) * 0.05;
        } else {
            tax = 0;
        }
        
    }else{
        if (income < fiftyLac) {
            tax = 0;
        } else if (income > fifteenLac) {
            tax = 187500 + (income - fifteenLac) * 0.3;
        } else if (income > tweleveHalfLac) {
            tax = 125000 + (income - tweleveHalfLac) * 0.25;
        } else if (income > tenLac) {
            tax = 75000 + (income - tenLac) * 0.2;
        } else if (income > sevenHalfLac) {
            tax = 37500 + (income - sevenHalfLac) * 0.15;
        } else if (income > fiveLac) {
            tax = 12500 + (income - fiveLac) * 0.1;
        } else if (income > twoHalfLac) {
            tax = (income - twoHalfLac) * 0.05;
        } else {
            tax = 0;
        }
    }

    console.log("Hello " + name + ", Your Tax would be : " + tax);
}
