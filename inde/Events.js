// object.addEventListener(event,handler,capturePhase);

//it allows you to bind multiple handler to an object for the same event.
document.getElementById('btn1').addEventListener('click',()=>{
    console.log("alert");
    alert("this is another alert");
});

//removeEventListner
document.getElementById('btn1').addEventListener('click',show,true)

function show(){
alert('hello')
}

document.getElementById('btn1').removeEventListener('click',show,true);

//DOM Event flow/event propagation
// Phase
//  Capture Phase - top to down 
//  Target Phase
//  Bubbling Phase - bottom to top

//Event Object
// EX :- addEventListner("click",function (e) {});

document.getElementById('btn1').addEventListener('click',(event)=>
{
    console.log(event);
    console.log(event.clientX,event.clientY);
    //target -- 
    console.log(event.target);
   //current target -- propogation
    console.log(event.currentTarget); 
});

// stopPropogation() , stopImmediatePropogation , preventDefault 
const pro = document.createElement('div');
pro.innerHTML ="<h1>Event Methods</h1><div id='one' style= padding:10px;background:yellow;>1<div id ='two' style= padding:10px;background:blue;>2<div id='three' style= padding:10px;background:wheat;>3</div></div></div>";

document.querySelector('.prop').appendChild(pro);

var divone = document.getElementById('one');
var divtwo = document.getElementById('two');
var divthree = document.getElementById('three');

function div1(e){
    this.style.backgroundColor = 'red';

    console.log('one');
}

function div2(e){
    this.style.backgroundColor = 'green';
    e.stopPropagation(); 
    console.log('two'); 
}

function div3(e){
    this.style.backgroundColor = 'blue';
  e.stopImmediatePropagation();
}

divone.addEventListener('click',div1,false);
//divtwo.addEventListener('click',div2,false);
divthree.addEventListener('click',div3,false);



// preventDefault

const prevent = document.createElement('div');
prevent.className = 'prev';
prevent.innerHTML = "<a  id='stop' href='https://www.google.com'>google</a>"
document.body.appendChild(prevent);

var  l = document.getElementById('stop');
l.addEventListener('click',stopLink,false);

function stopLink(e){
    e.preventDefault();
   
    console.warn('prevented default');
}

///Mouse Events
//mousedown , mouseup , click , dblclick (doubleclick) , mouseenter , mouseleve (NO BUBBLE) , mouseover , mouseout ,mousemove , contextment  

//// ^ divone

// divtwo.addEventListener('mousedown',mouseEvents);
// divtwo.addEventListener("mouseover",mouseEvents,false);
 
function mouseEvents(){
     console.log('mouse')
   this.style.backgroundColor = 'black';
    
}

/// Focus
// focus , blur , focusin , focusout

 var i1 =  document.createElement('input');
 i1.classList.add('i1');
 i1.placeholder = "input";
document.body.appendChild(i1);

function f(e){
    i1.style.backgroundColor = 'red';
    console.log('focus');
}

function b(e){
    i1.style.backgroundColor = 'black';
    console.log('blur');
}
function fin(e){
    i1.style.backgroundColor = 'blue';
    console.log('focusin');
}

function fout(e){
    i1.style.backgroundColor = 'green';
    console.log('focusin');
}

// i1.addEventListener('focus',f);
// i1.addEventListener('blur',b);
// i1.addEventListener('focusin',fin);
// i1.addEventListener('focusout',fout);

//Key Events
//keydown , keypress , keyup 
//////      
 

 function key(e){
   console.log(e.type + ' ' + e.keyCode + ' ' + String.fromCharCode(e.keyCode));
 }
  
//  i1.addEventListener('keydown',key);
//  i1.addEventListener('keyup',key);
//  i1.addEventListener('keypress',key);
 
// Text events

function text(e){
    console.log(e.type+' '+e.data);
}
i1.addEventListener('textInput',text);

// Window object

var outerheight = window.outerHeight;
console.log(outerheight);

var innerheight = window.innerHeight;
console.log(innerheight);

var innerwidth = window.innerWidth;
console.log(innerwidth);

var outerwidth = window.outerWidth;
console.log(outerwidth);

//.......... Dialog boxes
//........... alert , confirm , prompt 

//window.alert('hello');
//window.confirm("Are you sure");

//var promp = window.prompt("enter your name","Example :ram");
//console.log(promp);


/// open(url,name,features,replace)
// window.open(); //close();
i1.addEventListener('focus',()=>{
   // window.open();
});


//print method
const btn = document.createElement('button');
btn.className = 'button';
btn.innerText = "Print";
document.body.append(btn);

btn.addEventListener('click',()=>{
    print();
})

// Focus and blur  on newwindow focus() ,blur()

const btn2 = document.createElement('button');
btn2.className = 'button2';
btn2.innerText = "Focus_blur()";
document.body.append(btn2);

//btn2.addEventListener('click',focus());

// moving window , moveBy() , moveTo()

btn2.outerHTML = '<button class = "createwindow">New Window<button>' 
document.body.append(btn2);

const crwindow = document.querySelector('.createwindow');
crwindow.addEventListener('click',windows);
btn2.addEventListener('mousedown',movewin)
function windows(){
    newWindow = window.open('','newWindow','width=50,height=50')
    newWindow.document.write("this is new wondow");
}
var newWindow;
function movewin(){
    newWindow.moveBy(100,50);
   newWindow.focus();
}

window.moveBy(100,100);

// Resize the window  resizeBy , resizeTo 

// scrollBy 

// location object gives  the property of window

// history window.history.  back() forward()  go(number) length()///


// setTimeout(function,milliseconds,para1,para2)

var para = document.createElement('p');
para.id = 'mypara';
para.innerText = 'nbls';
para.innerHTML = "tis is lie dfk dfgnd dfnkgnfdkgnvdfksdskjfgndkgns  fsdgndk gdskgj;dflgdfs gds lldsfg<button>Clear time out</button>"
document.body.appendChild(para);

var timeoutID =  setTimeout(()=>{
    document.getElementById('mypara').style = 'color:red';
},5000);

//clearTimeout(timeoutID);


document.querySelector('#mypara>button').addEventListener('click',clrTime);


function clrTime(){
    clearTimeout(timeoutID);
}


// setinterval(function,millisecond,para1,para2) clearInterval()  

// var count = 0;
// function run(){

//     para.textContent += count;
//     count++;
// }
//  var intervalid = setInterval(run,1000);

//  document.querySelector('#mypara>button').addEventListener('click',clrinterval);

//  function clrinterval(){
//     clearInterval(intervalid);
// }



// window events

window.onload = ()=>console.log("this is afster loading")

// Form elements .... accessing form element in dom
// document.forms[index_number] , document.forms['name_attribute_value']
// document.name_attribute_value
//getElementById('TD)

 //console.log(document.forms[0]);
// console.log(document.il);
 console.log(document.getElementsByClassName('i1'))

















