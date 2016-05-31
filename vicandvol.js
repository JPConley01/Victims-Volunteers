//var vicNum = [];
var vicName = [];
var vicPhone = [];
var vicStreet = [];
var numVichold = [];

//var volNum = [];
var volName = [];
var volPhone = [];
var volStreet = [];
var numVolHold = [];


var askAgain = true;

while (askAgain) {
    vicName[numVichold] = prompt("Please enter disaster victim name");
    vicPhone[numVichold] = prompt("Please enter disaster victim phone number");
    vicStreet[numVichold] = prompt("Please enter disaster victim address");
    numVichold++;
    if (!confirm("Would you like to add more disaster victims? 'Yes' or 'No'")); {
        askAgain = false;
    }
}

askAgain = true;

while (askAgain) {
    volName[numVolHold] = prompt("Please enter relief volunteer name");
    volPhone[numVolHold] = prompt("Please enter relief volunteer phone number");
    volStreet[numVolHold] = prompt("Please enter relief volunteer street address");
    numVolHold++;
    if (!confirm("Would you like to add more relief volunteers? 'Yes' or 'No'")) {
        askAgain = false;
    }
}



/*Changed for Bonus 1
var vicNum = prompt("Please enter the amount of disaster victims you wish to track.");
  for (var i = 0; i < disVics; i++) {
    vicName[i] = prompt("Please enter disaster victim name");
    vicPhone[i] = prompt("Please enter disaster victim phone number");
    vicStreet[i] = prompt("Please enter disaster victim address");
 }


 var volNum = prompt("How many relief volunteers do you wish to enter?")


for (var i = 0; i < volNum; i++) {
  volName[i] = prompt("Please enter relief volunteer name")
  volPhone[i] = prompt("Please enter relief volunteer phone number")
  volStreet[i] = prompt("Please enter relief volunteer street address")
}
*/

function listGen(nameList, phoneList, streetList) {
    var returnMess = "";


    for (var i = 0; i < nameList.length; i++) {
        returnMess = returnMess + "---\n";
        returnMess = returnMess + (nameList[i] + ", " + phoneList[i] + ", " + streetList[i] + "\n");
    }
    returnMess = returnMess + "---";

    return returnMess;
}

var vicDir = listGen(vicName, vicPhone, vicStreet);
var volDir = listGen(volName, volPhone, volStreet);

var message = ("There are currently" + numVichold + " disaster victims.\n" +
    "There are currently" + numVolHold + " volunteers ready.\n\n\n" + "VICTIMS\n" + vicDir + "\nVOLUNTEERS\n" + volDir);

alert(message);