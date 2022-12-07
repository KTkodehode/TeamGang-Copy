// ** Snowing ** //
for(let i = 0; i < 50; i++) {
  let snow = document.createElement('div');
  let po = Math.floor(Math.random()*100);
  let d = Math.floor(Math.random()*10000);
  let snowBlur = Math.floor(Math.random()* 15);

  snow.id = 'snow';
  snow.style.left = po + '%';
  snow.style.animationDuration = d + 'ms';
  snow.style.filter = `blur(${snowBlur +2}px)`;

  document.body.appendChild(snow);
}


// Get the modal
let modal = document.getElementById("myModal");
// Get the button that opens the modal
let btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}

document.getElementById("notToday").src="./img/grinch-yes-no.gif";
// document.getElementById("yesToday").src="/img/grinch-yes-no.gif";

// let thisDate = new Date();
// Onclick.this

// let modale = document.getElementById("tesst");
// element.addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("yesToday").src="/img/baubels.png";
// }




// document.getElementById("once").src="/img/baubels.png";

// let clicker = document.getElementById("cal one");

// clicker.onclick = function(event) {
// if (event.target == "cal one")
// document.appendChild.src="/img/grinch-yes-no.gif";
// }




//** Legg inn ornaments-bilder i et array? randomize onload (onclick/eventlistener) output i modal + custom på 24. **//

const calendarGrid = document.querySelector(".calendar-grid");

for (let i = 1; i <= arrayname.length; i++) {
  const randomNumber = Math.floor(Math.random() * 9) + 1;

  const day = document.createElement("div");
  day.classList.add("cell");
  day.style.backgroundImage = `url("img/b${randomNumber}.png")`;
  day.textContent = i;

  // day.addEventListener("click", () => {
    
  // } )
  
  calendarGrid.append(day);
}
