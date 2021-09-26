console.log("Hello");


///////getElementsByTagName
var ElementId = document .getElementById('id1');
console.log(ElementId);

var ElementTagName = document.getElementsByTagName('h1');
console.log(ElementTagName);

var ElementTagName = document.body.getElementsByTagName('h1');
console.log(ElementTagName);

 ElementTagName = document.getElementsByTagName("*");
console.log(ElementTagName);

 ElementTagName = document.getElementsByTagName("p");
console.log(ElementTagName);
///appending
var getSpan = document.getElementById('geek')
var result = getSpan.getElementsByTagName("span");
console.log(getSpan,result);

var resultAlter = document.getElementById("geek").getElementsByTagName("span");
console.log(resultAlter);
resultAlter = document.getElementById("geek").getElementsByTagName("*");

///Length property
var len = document.getElementsByTagName("h1").length;
console.log(len);

/////////getElementByClassName  => //  Similar to id
ElementId = document .getElementsByClassName('container');
console.log(ElementId);

/////querySelector
//Element Selector
var sel = document.querySelector("p ,h1");
console.log(sel);
//Id Selector
sel = document.querySelectorAll("#id1");
console.log(sel);
//Class Selector
sel = document.querySelectorAll(".container");
console.log(sel);

/////querySelectorAll
var sel = document.querySelectorAll("p,h1");
console.log(sel);
//Class Selector
sel = document.querySelectorAll(".container");
console.log(sel);

//Attribute Selector
sel = document.querySelectorAll("p , h1");
console.log(sel);

// Prooperties of Web page

console.dir(document);

console.log(document.URL);

console.log(document.domain);

console.log(document.doctype);

console.log(document.title);

///The Node object representd a single node in the document tree.
//*nodeName:{CDATASsection : "#data-section",Comment:"comment",Document:"#document",DocumentFragment:"document-fragment",DocumentType:The value of Document typee name ,Element:The value of Element tag Name ,Entity:The entity name,EntityReference:The nameof entity reference,Notation:The notation name,ProcessingInstruction:The value of ProcessingInstruction.target,Text:"#text"}
//................................................
//*nodeValue{CDATASsection : "#data-section",Comment:"comment",Document:null,DocumentFragment:null,DocumentType:null ,Element:null ,NameNodeMap:null,EntityReference:null,Notation:null,ProcessingInstruction:Entire content excluding the target,Text:content of the text node}

//*nodeType
//*textContent


//*childNodes

//*firstChild
//*lastChild

//*previousSibling
//*nextSibling


//Document 
console.log("Documents=>");
console.log(document.nodeName,'nodeName');
console.log(document.nodeValue,'nodeVlaue');
console.log(document.nodeType,'nodeType');

//Element
console.log("Elements=>");
var Element = document.getElementById("id1");
console.log(Element.nodeName,'nodeName');
console.log(Element.nodeValue,'nodeVlaue');
console.log(Element.nodeType,'nodeType');

//Text
console.log("Elements=>");
var txt = document.getElementById("id1");
console.log(txt);
console.log(txt.firstChild.nodeName,'nodeName');
console.log(txt.firstChild.nodeValue,'nodeVlaue');
console.log(txt.firstChild.nodeType,'nodeType');

//Assigning value
console.log(`${txt.firstChild.nodeValue ="This is new value"}`);

//Comment
console.log("Elements=>");
var comment = document.getElementById("id1");
console.log(comment);
console.log(comment.firstChild.nextSibling.nodeName,'<=nodeName');
console.log(comment.firstChild.nextSibling.nodeValue,'<=nodeVlaue');
console.log(comment.firstChild.nextSibling.nodeType,'<=nodeType');

///Attribute Property

var att = document.getElementById("id1");
var get_attrebute = att.attributes[0].nodeName;
var get_attrebute_value = att.attributes[0].nodeValue;

console.log(`name=> ${get_attrebute} value=> ${get_attrebute_value}`);


get_attrebute = att.attributes[1].nodeName;
var get_attrebute_value = att.attributes[1].nodeValue;

console.log(`name=> ${get_attrebute} value=> ${get_attrebute_value}`);


/////change nodeName = > Name && nodeValue = > Value
console.log("nodeName => name && nodeValue => value")

var att = document.getElementById("id1");
var get_attrebute = att.attributes[0].name;
var get_attrebute_value = att.attributes[0].value;

console.log(`name=> ${get_attrebute} value=> ${get_attrebute_value}`);


get_attrebute = att.attributes[1].name;
var get_attrebute_value = att.attributes[1].value;

console.log(`name=> ${get_attrebute} value=> ${get_attrebute_value}`);
 
////DOM  Traversal

//*parentElement - Returns parent element node
//*children  - Returns a collection of an element's child element node{including text and comment nodes} 
//*firstElementChild - Returns first child element node of an element
//*lastElementChild - Returns last child element node of an element
//*previousSibling
//*nextSibling

//*parentNode
var FindingParentNode = document.getElementById("id2").querySelector("h1");
console.log(FindingParentNode.parentNode)
//OR
FindingParentNode = document.getElementById("id2").querySelector("button");
console.log(FindingParentNode.parentNode)

console.log(document.getElementsByTagName("html"));

//* childNode
var FindingChildNode = document.getElementById("id2");
console.log(FindingChildNode.childNodes);
//OR
FindingChildNode = document.getElementById("id2").querySelector("button");
console.log(FindingChildNode.childNodes)

//* childNode
var FindingChildren = document.getElementById("id2");
console.log(FindingChildren.children);
//OR
FindingChildren = document.getElementById("id2").querySelector("button");
console.log(FindingChildren.children)


// 
var  parent = document.querySelector("header");
console.log(parent.childNodes)

var del = parent.removeChild(parent.firstChild);

console.log(del);
console.log(parent)
console.log(parent.childNodes)
parent.style.color = 'white';



