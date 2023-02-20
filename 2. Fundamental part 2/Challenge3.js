// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK �


const mark  = {
    firstName: 'Mark',
    lastName: 'Miller',
    height: 1.69,
    mass: 78,
  
    calcBMI: function(){
      this.BMI = this.mass / (this.height ** 2 );
      return this.BMI;
    }
  }
  
  const john  = {
    firstName: 'John',
    lastName: 'Smith',
    height: 1.95,
    mass: 92,
  
    calcBMI: function(){
      this.BMI = this.mass / (this.height ** 2 );
      return this.BMI;
    }
  }
  
  
   let outputMessage;
   if (mark.calcBMI() > john.calcBMI()) {
     outputMessage = `Mark's BMI (${mark.calcBMI()}) is higher than John's (${john.calcBMI()})!`
   } else if(mark.calcBMI() < john.calcBMI()) {
     outputMessage = `John's BMI (${john.calcBMI()}) is higher than Mark's (${mark.calcBMI()})!`
   }
  
   console.log(outputMessage);