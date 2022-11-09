let head = document.querySelector(`h1`)
let head2 = document.querySelector(`#head2`)

head.style.cssText =`
background-color:yellow;
border:2px solid black;
text-align:center;
width : 300px;
`
head2.style.cssText =`
background-color:yellow;
border:2px solid black;
text-align:center;
width : 300px;
`

head.addEventListener('mouseover', function(){
         document.querySelector(`h1`).style.background = 'red';})

head.addEventListener('mouseout', function(){
         document.querySelector(`h1`).style.background = 'yellow';})

// window.addEventListener('load', () => {
//          document.querySelector(`#head2`).style.backgroundColor = 'red';
//            });


 function changecolor() {
     document.querySelector(`#head2`).style.backgroundColor = 'red';}

setInterval(changecolor, 900); 
     // program to display a text using setInterval method

// function color(){
//     let x = "#"
//     for (i=0;i<=6;i++){

//     }
// }

// function changecolor() {
//     document.querySelector(`#head2`).style.backgroundColor = 'red';
  
// }

// setInterval(greet, 900);  
 
