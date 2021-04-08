
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");

/*  For now the i element is not there we will create it */
const deleteButton = document.getElementsByTagName("i");

var clearButton = document.getElementById("clear");

console.log(button);
console.log(input);
console.log(ul);
console.log(li);
console.log(deleteButton);
console.log(clearButton);


// // clearButton.addEventListener("click", clearList);
// // ul.addEventListener("click", strikeThrough);
// // button.addEventListener("click", addListAfterClick);
// // input.addEventListener("keypress", addListAfterKeypress);
// // createDeleteButtonIcon();
// // deleteParentNodeOnClick();


/* Functions code here */

// function inputLength(inp) {
//     // var length = document.getElementById("userinput").value;
//     return inp.value.length;
// }

function inputLength(input)
{
  /* Code here */
  return input.value.length;
}

/*        Fin           */
// function create(input) {
//     var div = document.createElement("div");
//     div.classList("li-wrapper");
//     var li = document.createElement("div");
//     icon.classList("")
//     return li.append(div);
// }
function addItem() {
   if (inputLength(input) == 0){
    alert("svp remplir le champ")   ;
    return false;
    
   }else{
    /*code here */
  var div = document.createElement('div');
  var newLi = document.createElement('li');
  var addElement = document.createTextNode(input.value);

  div.classList.add("li-wrapper");
  newLi.appendChild(addElement);
  ul.appendChild(div);
  div.append(newLi);

  var icon = document.createElement('div')
  icon.classList.add("div");
  div.append(icon);
  var icone = document.createElement('i');

  icone.classList.add("fas");
  icone.classList.add("fa-backspace");
  icone.addEventListener("click",deteltItem);
  icon.append(icone);
  input.value = "";

   }
  
 }
/*        Fin           */
clearButton.addEventListener("click", clearList);
button.addEventListener("click", addItem);


// button.addEventListener('click', e =>{
//     e.preventDefault();
//     inputLength(input);
//     console.log(inputLength(input));
// })

input.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        addItem();    
     }
    });
    
/* delete */
function deteltItem(e){
    let item = e.target;
    item.parentElement.parentElement.remove();
}
 function clearList(){
  clearLis = document.querySelectorAll(".li-wrapper");
  clearLis.forEach(element => {
    element.remove();
  });

 }
    













