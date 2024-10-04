console.log("Hello World");
console.log({name:"Anurag"});
console.warn("This is A warning");
console.error("This is an error");
console.table({name:"Anurag",class:"A1"})
console.clear()  //clear all data before console.clear()

//Variable
// reservedword  variablename typeofvalue 

let first_name;
first_name = "Anurag";
console.log(first_name);

// Challenge 1
let name;
name = "Anurag Raj"
let whatDoYouWannaBcomeInYourLife = "programmer"
let gender = "Male"
let github = "Anurag-07-07"
console.log(name,whatDoYouWannaBcomeInYourLife,gender,github);

//Primitive Types
// 1.Number

let number = 10;
let number1 = -10;
let number2 = -10.56;
let number4 = 5.56;
console.log(number);
console.log(number1);
console.log(number2);
console.log(number4);
console.log(typeof number);
console.log(typeof number1);
console.log(typeof number2);
console.log(typeof number4);
console.log(number+number1); //addition
console.log(number-number1); //subtraction
console.log(number*number1); //multiplication
console.log(number/number1); //division
console.log(number%number1); //modulus
console.log(number**2); //power

let counter = 0;
counter++;
console.log(counter);
counter--;
console.log(counter);

// Challenge 2
let firstFavNum = 9;
let secondFavNum = 7;
console.log(firstFavNum+secondFavNum);
console.log(firstFavNum-secondFavNum);
console.log(firstFavNum*secondFavNum);
console.log(firstFavNum/secondFavNum);
console.log(firstFavNum%secondFavNum);
console.log(firstFavNum**secondFavNum);


//2.Boolen => true || false

let isTrue = true;
let isFalse = false;
let num = NaN
console.log(isTrue);
console.log(isFalse);
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log(num);
console.log(typeof num);

//falsy value
// false,null,undefined,0,-0,NaN,"",'',``

//Challenge 3
let isJsProgrammingLanguage = true;
let isJsHard = false;
let favNumb = 9;
console.log(isJsProgrammingLanguage);
console.log(isJsHard);
console.log(favNumb+undefined);

//Comparison Operator
//1.Relational Operators

//Greater Than >
//Less Than <
//Greater Than or Equal To >=
//Less Than or Equal To <= 

console.log(10>10);
console.log(10<9);
console.log(10>=10);
console.log(10<=9);

//-----------------------------
//2.Equality Operator

// === Strict Equality
// == Loose Equality 
// !== Not Equal (Strict)
// != Not Equal (Loose)

console.log(10=='10');
console.log(10==='10');
console.log(10!==10);
console.log(10!=10);

//Challenge 4
let firstFavNumb = 9;
let secondFavNumb = 7;
console.log(firstFavNumb>secondFavNumb);
console.log(firstFavNumb<secondFavNumb);
console.log(firstFavNumb>=secondFavNumb);
console.log(firstFavNumb<=secondFavNumb);
console.log(firstFavNumb==secondFavNumb);
console.log(firstFavNumb!=secondFavNumb);
console.log(firstFavNumb===secondFavNumb);
console.log(firstFavNumb!==secondFavNumb);