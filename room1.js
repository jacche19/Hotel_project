//Number of guests in room
var count1 = 0;
//Cleaning
var clean1 = false;
//Hides clean and full message
/*
document.getElementById('full1').style.visibility = 'hidden';
document.getElementById('cleaning1').style.visibility = 'hidden';
*/

console.log(count1);

//Check-in guests
function add1() {
  //If 3 or less guests
  if (count1 < 4) {
    //If text field is blank, returns "<unknown>"
    var table1 = document.getElementsByTagName('table')[0];
    
    if (document.getElementById('textBox').value === "") {
      count1++;
      //Append blankText ('<unknown>') from textBox to new table cell (newTd)
      var blankTd = document.createElement('td');
      var blankText = document.createTextNode('<unknown>');
      blankTd.appendChild(blankText);
      //Add cell and button to new table row and to table
      var blankTr = document.createElement('tr');
      blankTr.appendChild(blankTd);
      //blankTr.appendChild(blankButton);
      table1.appendChild(blankTr);
    }
    
    //If text field has text in it:
    else {
      count1++;
      //Get text from textBox and clear textBox
      var text = document.getElementById('textBox').value;
      document.getElementById('textBox').value = "";
      //Append text from textBox to new table cell (newTd)
      var newTd = document.createElement('td');
      var newText = document.createTextNode(text);
      newTd.appendChild(newText);
      
      /*
      //Create new removeGuest button and place in new table cell (newButton)
      var newButton = document.createElement('TD');
      var removeGuest = document.createElement('BUTTON');
      var removeText = document.createTextNode("Remove Guest");
      removeGuest.appendChild(removeText);
      newButton.appendChild(removeGuest);
      //set button function and value
      removeGuest.onclick = "remove()";
      var newValue = count;
      removeGuest.value = newValue;
      //can't delete button by value or index
      */
      
      //Add cell and button to new table row and to table
      var newTr = document.createElement('tr');
      newTr.appendChild(newTd);
      //newTr.appendChild(newButton);
      table1.appendChild(newTr);
      }
    
    
  }
  //If already 4 guests (full)
  else {
    //Sets room as full and disable check-in
    document.getElementById('full1').style.visibility = 'visible';
    //Hide check-in button
    document.getElementById('checkIn1').style.visibility = 'hidden';
  }
}

//Cleaning
function stop1() {
  //Closes room for cleaning if checkIn1 is enabled (not cleaning)
  if (clean1 === false) {
    //Sets room as in cleaning and disable check-in
    document.getElementById('cleaning1').style.visibility = 'visible';
    clean1 = true;
    //Hide check-in button
    document.getElementById('checkIn1').style.visibility = 'hidden';
    //Change text on button
    
  }
  //Open room if checkIn1 is disabled (cleaning)
  else if (clean1 === true) {
    //Sets room as not in cleaning and enable check-in
    document.getElementById('cleaning1').style.visibility = 'hidden';
    clean1 = false;
    //Hide check-in button
    document.getElementById('checkIn1').style.visibility = 'visible';
  }
}

//Removes last guest
function remove1() {
  //so count can't be less than 0
  if (count1 > 0) {
    //Remove last table row
    var row = document.getElementsByTagName('tr')[count1-1];
    row.parentNode.removeChild(row);
    count1--;
    //Resets background color and hides full text
    var room1 = document.getElementById('room1');
    //Reset room
      //Sets room as full and disable check-in
      document.getElementById('full1').style.visibility = 'hidden';
      //Hide check-in button
      document.getElementById('checkIn1').style.visibility = 'visible';
  }
}

//Clears all guests
function clear1(){
  var tableGone = document.getElementsByTagName('table')[0];
  tableGone.parentNode.removeChild(tableGone);
  count1 = 0;
  var table = document.createElement('table');
  var tableCont = document.getElementById('tableCont')[0];
  tableCont.appendChild(table);
}