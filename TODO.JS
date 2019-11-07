
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var span1 = document.createElement("span");
span1.innerHTML=inputValue


li.appendChild(span1);

/**************Create Btns**************** */



var btn1 = document.createElement("BUTTON");
btn1.innerHTML = "Delete";
btn1.classList.add("btnDele")
li.appendChild(btn1);

var btn2 = document.createElement("BUTTON");

btn2.innerHTML = "complete";
btn2.classList.add("btn-complete")

li.appendChild(btn2);



/**************************************** */





let ul14 =document.getElementById("myUL")
ul14.appendChild(li);

console.log(ul14)
    //var t = document.createTextNode(inputValue);


/************************* */

ul14.addEventListener('click',function delete1(e){

if(e.target.className==="btnDele")
{    par =e.target.parentElement
    par.style.display='none'}
   
   
   
   })

/************************** */

 
ul14.addEventListener('click',function ligne1(e){
    if(e.target.className==="btn-complete")

{    par =e.target.parentElement
    var child1= par.firstChild
   console.log(child1)
   child1.style.textDecoration='line-through'
   //child.style.textDecoration='line-through'
   }
   
   
   })
   

}

