//Creating a New ELements

var nENode = document.createElement("h3");
console.log(nENode)

//Creating a New Text node
var nTNode = document.createTextNode("this is a javascript text node");
console.log(nTNode);

//Creating a New Comment Node
var nCNode = document.createComment('this is a javascript text node');
console.log(nCNode);

//Creating a Document Fragment
var df = document.createDocumentFragment();
console.log(nCNode);


// Append exesting Child to exesting parent

var h1 = document.getElementById("id2").querySelector("h1");
console.log(h1);

var header = document.querySelector("header");
console.log(header);

console.log(header.appendChild(h1));


// Append new element node and appending 

var targetNode = document.getElementById("id2");
targetNode.appendChild(nENode);
console.log(targetNode.appendChild(nENode));

//OR
targetNode = document.getElementById("id2");
targetNode.appendChild(document.createElement("h5"));

// Append new Text node and appending 

var targetNode = document.getElementById("id2");
targetNode.appendChild(nTNode); 
console.log(targetNode.appendChild(nTNode));

//OR

targetNode = document.getElementById("id2");
targetNode.appendChild(document.createTextNode(nTNode));

// Append new comment node and appending 
var ElemNode = document.createElement("p");
var TxtNode = document.createTextNode("Para");
var ComNode = document.createComment("This is aa new comment");

ElemNode.appendChild(TxtNode);
console.log(ElemNode);

targetNode = document.getElementById("id2");

targetNode.appendChild(ElemNode);
targetNode.appendChild(ComNode);

// Document Fragmentation
var dfg = document.createDocumentFragment();

var hNode = document.createElement("h3");
var pNode = document.createElement("p");

//text for new h3 and p
hNode.textContent = "HHHHHHHHH"
pNode.textContent = "lorem30kdgldsbgl b dlbg l gsddl s sl nf al s d nf ldnsl d n fldsn l f sd n fl dnl"

console.log(hNode);
console.log(pNode);

dfg.appendChild(hNode);
dfg.appendChild(pNode);
console.log(dfg)
targetNode = document.getElementById("id2");

targetNode.appendChild(dfg);

//normalize 
targetNode.normalize();
console.log(targetNode);






