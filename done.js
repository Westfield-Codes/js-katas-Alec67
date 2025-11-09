/* Var, Prompt and Alert Katas */

/* COLOR KATAS */

/* No Prompt */
/* Var Alert */
// make a string variable named color, set it equal to your favorite color.
var color = "red";
// alert the message" "My favorite color is " plus the variable name, outside the quotes.
alert("My favorite color is " + color);

/* Prompt */
/* Var Alert Prompt */
// make a string variable for color, but prompt the user for their favorite color.
var color = prompt("Whats you favorite color?");
// alert color plus " is a nice color!" - note the space in the quotes.
alert(color + " is a nice color!");

/* Prompt with Conditional */
/* Var Alert Prompt Conditional */
// make a string variable for color, prompt the user for their favorite
var color = prompt("What is your favorite color?")
// if user enters "black" alert "Black is not really a color."
if (color == "black") alert("Hi, bob")
// otherwise alert color " is a nice color!"
else alert(color + " is lowkey a trash color")

/* AGE */

/* No Prompt */


/* Prompt */


/* Prompt with Conditional */


/* ICE CREAM */

/* No Prompt */


/* Prompt */
/* Var Alert Prompt */
// make a string variable for favorite ice cream flavor, prompt user for it
var flavor = prompt("What is your favorite ice cream flavor?");
// make an integer variable for number of scoops on the cone, prompt user for it
var scoops = prompt ("How many scoops?");
// alert "You want " scoops "scoops of " flavor
alert("You want " + scoops + " scoops of " + flavor + ".");

/* Prompt with Conditional */
/* Var Alert Prompt Conditional */
// make a string variable for favorite ice cream flavor, prompt user for it
var flavor = prompt("What flavor ice cream flavor would you want?");
// make an integer variable for number of scoops on the cone, prompt user for it
var scoops = prompt("How many scoops would you like?");
// if scoosp is creater than three, alert ("Max 3 scoops!")
if (scoops > 3 ) alert("You can't have more than 3 scoops!");
// otherwise alert "You want " scoops " scoops of " flavor
else alert("You want " + scoops + " scoops of " + flavor + ".");

/* PET */

/* No Prompt */


/* Prompt */
/* Var Alert Prompt */
// make a variable for a pet type, prompt user for it 
var pet = prompt("What type of pet do you have?");
// make a variable for a pet name, prompt user for it
var petname = prompt("What is your " + pet + "'s" + " name.");
// alert "You have a pet type named pet name 
alert("Your " + pet + " " + petname + " seems so sweet!");

/* Prompt with Conditional */
/* Var Alert Prompt Conditionals */
// make a variable for pet type, prompt user for it 
var pet = prompt("What kind of pet do you have?");
// make a variable for pet name, prompt user for it
var petname = prompt("What is your " + pet + "'s name");
// alert "You have a pet type named pet name 
alert("You have a " + pet + " named " + petname + ".");
// if pet is a dog, say "I like dogs, too!"
if (petname == "dog") alert("I like dogs, too!");
// if it is a cat, say "I'm allergic to cats"
else if (pet == "cat") alert("I'm allergic to cats. :( ");
// If it is not a dog or a cat, say "what an interesting pet!"
else alert("Your pet kinda stinks.");
