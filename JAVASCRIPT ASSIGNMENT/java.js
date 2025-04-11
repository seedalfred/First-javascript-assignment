//Question 1: Introduce Yourself  
// //Create variables to store name, age, and nationality 

let name = "Alfred Godseed"; let age = 26; let nationality = "Nigerian";
 // Combine variables into a sentence 
 let introduction = `Hello, my name is ${name}, I am ${age} years old and I am ${nationality}.`; 
 // Log the introduction 
 console.log(introduction); 

//Question 2: Favorite Quote // Create a variable with a favorite quote 
let quote = "No Such Thing As A Life That's Better Than Yours.";
 // Change the text to uppercase 
 let uppercaseQuote = quote.toUpperCase(); console.log(uppercaseQuote);
  // Change the text to lowercase
   let lowercaseQuote = quote.toLowerCase(); console.log(lowercaseQuote); 

//Question 3: Reverse a Word // Create a variable with a word 
let word = "Strange"; 
// Reverse the word 
let reversedWord = word.split("").reverse().join(""); console.log(reversedWord); 

 //Question 4: Calculate Total Price 
  // Create variables to store prices
   let price1 = 3; let price2 = 4; let price3 = 2; 
   // Calculate the total price
    let totalPrice = price1 + price2 + price3; 
    // Log the total price with a message
    console.log(`The total price is $${totalPrice.toFixed(2)}.`);

 // Question 5: Calculate Average Test Score 
 // Create variables to store test scores 
 let score1 = 85; let score2 = 90; let score3 = 78; let score4 = 92; let score5 = 88; 
 //Calculate the average test score 
 let averageScore = (score1 + score2 + score3 + score4 + score5) / 5; 
 // Log the average score with a message 
 console.log(`The average test score is ${averageScore.toFixed(2)}.`); 

 // Question 6: Favorite Foods 
 // Create an array of favorite foods 
 let favoriteFoods = ["Onunu", "Beans", "Tea", "Egusi soup", "Plantain"]; 
 // Log the first and last items in the array 
 console.log(`First favorite food: ${favoriteFoods[0]}`); console.log(`Last favorite food: ${favoriteFoods[favoriteFoods.length - 1]}`);

 // Question 7: Add Food Items 
 // Add two more food items to the list 
 favoriteFoods.unshift("Salad"); favoriteFoods.push("Ice Cream"); 
 // Log the new list 
 console.log(favoriteFoods); 

 //Question 8-10: Student Arrays 
 // Create three arrays of student names 
 let jssOne = ["John", "Mary", "David", "Seed", "Angel", "Sarah", "Etuk", "Aniedi", "Peter", "Nancy"]; 
 let jssTwo = ["Benjamin", "Lois", "Hope", "Emeka", "Charles", "Miracle", "Daniel", "Faith", "Matthew", "Collins"]; 
 let jssThree = ["Ronaldo", "Messi", "Neymar", "Hazard", "Saka", "Sallah", "Timber", "Saliba", "Partey", "Rice"]; 
 // Log the arrays 
 console.log(jssOne); console.log(jssTwo); console.log(jssThree);
