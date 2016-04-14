//converts station name to lowercase
function convertToLowerCase(word) {
 var newWord = word.toLowerCase ();
  return newWord;
}
//converts station name to uppercase
function convertToUpperCase(word) {
  var newWord = word.toUpperCase ();
  return newWord;
}
//declaring arrays for train lines
var alameinLine = ["alameinLine","flinders street","richmond","east richmond","burnley","hawthorn","glenferri"];
var glenWaverlyLine = ["glenWaverlyLine","flagstaff","melbourne central","Parliament","richmond","kooyong","tooronga"];
var sandringham = ["sandringham","southern cross","richmond","south yarra","prahran","windsor"];

var trainLines=[alameinLine,glenWaverlyLine,sandringham];

function publicTransportPlanner(startPosition,endPosition) {
//converting user input into lowercase
var origin = convertToLowerCase(startPosition);
var destination = convertToLowerCase(endPosition);
//call to validation function for origin
var valCheckOrigin = validation (origin);
if(valCheckOrigin === true){ }
else {
  var message = "Sorry! We do not provode service from "+ origin + " Station.";
  return message;}

//call to validation function for destination
var valCheckDest = validation(destination);
if(valCheckDest === true) { }
else {
  var message ="Sorry! we do not provide service to "+ destination + "Station.";
  return message;
}

  //finding origin in trainlines
  for (var i=0; i<trainLines.length; i++) {
    for (var j=0; j<trainLines[i].length;j++) {
      if(origin === trainLines[i][j]) {
        var startPoint = "you need to catch "+ convertToUpperCase(trainLines[i][0])+ " line at "+ convertToUpperCase(origin)+ " Station. ";
        var originIndex1 = i;
        var originIndex2 = j;
      }
    }
  }

  //finding destination in trainLines
  for (var i=0; i<trainLines.length; i++) {
    for (var j=0; j<trainLines[i].length;j++) {
      if(destination === trainLines[i][j]) {
        var destIndex1 = i;
        var destIndex2 = j;
      }
    }
  }
  //finding the stop
  if(originIndex1 === destIndex1){
    console.log("Please change either Destination or Origin");
    var changePoint = "";
    var endPoint = "";
    startPoint = "";
  }
  else {
    for(var i=0; i<trainLines[originIndex1].length; i++) {
    for(var j=0; j<trainLines[destIndex1].length; j++) {
      if(trainLines[originIndex1][i] === trainLines[destIndex1][j]) {
        changePoint = "You need to change at "+ convertToUpperCase(trainLines[originIndex1][i]) + ". ";
      }
    }
  }

   endPoint = "Than you need to catch "+ convertToUpperCase(trainLines[destIndex1][0])+ " line to get to "+ convertToUpperCase(destination)+ " Station.";
      }
      return(startPoint +changePoint + endPoint);
      console.log(startPoint + changePoint + endPoint);
}

//validation function
function validation (station) {
  for (var i=0; i<trainLines.length; i++) {
    for (var j=0;j<trainLines[i].length; j++) {
      //check if origin exists
      if(station === trainLines[i][j]) {
        return true;
      }
    }
  } return false;
}

//function for lowercase conversion

//call
//publicTransportPlanner("Windsor","flagstaff");

var destID = document.getElementById('endPosition');
var originID = document.getElementById('startPosition');

button.addEventListener('click',function () {
  console.log(publicTransportPlanner(originID.value, destID.value));
});
