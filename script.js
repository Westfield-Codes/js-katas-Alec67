
/* Animals and legs:
* Practicing variable naming and assignment, including camelCase.
*/

// Create (declare) a variable and name it legs
var legs;
// Assign 4 to that variable. It is holding an integer (number)
legs = 4;
// Create (declare) a variable and name it animalType
var animalType;
// Assign the name of a type of animal with the current value of legs to animalType. It is holding a string (symbols)
animalType = "dog";
// Display an Alert Box with the message: "An [animalType] has [legs] legs"
alert("A " + animalType + " has " + legs + " legs.");
// Subtract 2 from legs and assign that to legs (not in this order)
legs = legs - 2;
// Assign the name of a type of animal with the new value of legs to animalType
animalType = "penguin";
// Display an Alert Box with the message: "An [animalType] has [legs] legs"
alert("A " + animalType + " has " + legs + " legs.");
// Multiply the current value of legs by 3 and assign that to legs
legs = legs * 3;
// Assign the name of a type of animal with the new value of legs to animalType
animalType = "centipede";
// Display an Alert Box with the message: "An [animalType] has [legs] legs"
alert("A " + animalType + " has " + legs + " legs.");
// Add 2 to the current value of legs and assign that to legs
legs = legs + 2;
// Assign the name of a type of animal with the new value of legs to animalType
animalType = "spider";
// Display an Alert Box with the message: "An [animalType] has [legs] legs"
alert("A " + animalType + " has " + legs + " legs.");
// Multiply the current value of legs by 4 and assign that to legs
legs = legs * 4;
// Assign the name of a type of animal which could have the new value of legs to animalType
animalType = "millipede";
// Display an Alert Box with the message: "An [animalType] SOMETIMES has [legs] legs"
alert("A " + animalType + " has " + legs + " legs.");
// Assign the value of 3 to legs
legs = 3;
// Assign the string "amputee" to animalType
animalType = "amputee";
// Display an Alert Box with the message: "An [animalType] SOMETIMES has [legs] legs"
alert("A " + animalType + " SOMETIMES has " + legs + " legs.");
// Assign the string "dog" to animalType
animalType = "dog";
// Display an Alert Box with the message: "for example, an [animalType]".
alert("for example, an " + animalType);
/* Fun with expressions
* Understanding the pecularities of the JavaScript Alert Box
*/

// Declare a variable and name it first
var first;
// Assign a value to first using a prompt: "Enter first number"
first = prompt("Enter first number");
if (first = "2") first = 2
// Declare a variable and name it second
var second;
// Assign a value to second using a prompt: "Enter second number"
second = prompt("Enter second number");
if (second = "3") second = 3
// Declare a variable and name it bragging
var bragging;
// Assign exactly this expression to bragging: "I can add " + first + " + " + second"
bragging = ("I can add " + first + "+" + second);
// Display an Alert Box with bragging inside it.
alert(bragging);
// Assign exactly this expression to bragging: first + " + " + second + " = " + first + second
var answer;
answer = (first + second);
bragging = (first + " + " + second + " = " + answer);
// DO NOT Display an Alert Box with bragging inside it YET.
alert(bragging);
// Declare a variable and name it prediction
var prediction;
// Assign your prediction about what will be displayed when we display bragging
prediction = ("2+3=5");
// Display an Alert Box with prediction inside it.
alert(prediction);
// Call Mr. M. over to see it. Do not do anythign else!

// Await further instructions.
