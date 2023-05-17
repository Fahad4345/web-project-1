
// let count=0;
// //let b= document.querySelector('clicked')= count;

// document.getElementById('button').addEventListener('click ',showmsg)


//  function showmsg(){
//    count++;
//    document.getElementById('clickCountDisplay')= count;
//  }
let clickCount = 0;
document.getElementById("clickButton").addEventListener("click", incrementClickCount);

// Function to increment the click count and update the display
function incrementClickCount() {
  // Increment the click count
  clickCount++;

  // Update the display with the new click count
  document.getElementById("clickCountDisplay").textContent = clickCount;
  
}

// Add a click event listener to the button

