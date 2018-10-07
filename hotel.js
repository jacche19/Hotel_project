var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
var count6 = 0;

var clean1 = 0;

function stop1() {
  if (clean1 === 0) {
    function add1() {
      if (clean1 === 0) {
        if (count1 < 4) {
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
          var table1 = document.getElementsByTagName('table')[0];
          table1.appendChild(newTr);
        }
        else {
          document.getElementById('room1').style.backgroundColor = "rgba(256,0,0,0.3)";
          var fullText = document.createTextNode('THE ROOM IS FULL');
          var fullType = document.createElement('h2');
          fullType.id = "full";
          fullType.appendChild(fullText);
          document.getElementById('room1').appendChild(fullType);
        }
        clean1.value = 1;
  }
}
  }
  else if (clean1 === 1) {
    clean1.value = 0;
    document.getElementById('room1').style.backgroundColor = "rgba(0,0,256,0.3)";
    var cleanText = document.createTextNode('CLOSED FOR CLEANING');
    var cleanType = document.createElement('h2');
    cleanType.id = "clean";
    cleanType.appendChild(cleanText);
    document.getElementById('room1').appendChild(cleanType);
  }
}

function remove1() {
  //so count can't be less than 0
  if (count >= 0) {
    //Remove last table row
    var row = document.getElementsByTagName('tr')[count1-1];
    row.parentNode.removeChild(row);
    count1--;
    //reset from full
    document.getElementById('room1').style.backgroundColor = "rgba(0,0,0,0.5)";
    var roomFull = document.getElementById('full');
    roomFull.parentNode.removeChild(roomFull);
  }
}