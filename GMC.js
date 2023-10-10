
const button = document.getElementById('shop-btn'); 
var div = document.getElementById('sec2');
var About = document.getElementById('about-section')
var Contacts = document.getElementById('contacts')


function begin() {
    div.scrollIntoView({behavior:"smooth"})
}

function about() {
    About.scrollIntoView({behavior:'smooth'})
}
function contact() {
    Contacts.scrollIntoView({behavior:"smooth"})
}



var SUform = document.getElementById('form-bef')
var state='true';



var add_div = document.getElementById('prod1');
var btn = document.getElementById('btn-bef');



var Heart1 = document.getElementById('empty1')
var love1 = document.getElementById('love1')
var status1 = "true"
var statusW1 = "true"
var statusW2 = "true"
var statusW3 = "true"
var statusW4 = "true"
function heart1() 
{
    if (status1 == "true") 
{
    Heart1.setAttribute('class','invisible')    
    console.log('function working');
    love1.removeAttribute('class','invisible')
    status1= "false";
    statusW1 = "false";
}
else
{
    Heart1.removeAttribute('class','invisible')
    console.log('function working');
    love1.setAttribute('class','invisible')
    status1= "true";
}
}

var Heart2 = document.getElementById('empty2')
var love2 = document.getElementById('love2')
var status2 = "true"
function heart2() 
{
    if (status2 == "true") 
{
    Heart2.setAttribute('class','invisible')    
    console.log('function working');
    love2.removeAttribute('class','invisible')
    status2= "false"
    statusW2 = "false";
}
else
{
    Heart2.removeAttribute('class','invisible')
    console.log('function working');
    love2.setAttribute('class','invisible')
    status2= "true"
}
}

var Heart3 = document.getElementById('empty3')
var love3 = document.getElementById('love3')
var status3 = "true"
function heart3() 
{
    if (status3 == "true") 
{
    Heart3.setAttribute('class','invisible')    
    console.log('function working');
    love3.removeAttribute('class','invisible')
    status3= "false"
    statusW3 = "false";
}
else
{
    Heart3.removeAttribute('class','invisible')
    console.log('function working');
    love3.setAttribute('class','invisible')
    status3= "true"
}
}


var Heart4 = document.getElementById('empty4')
var love4 = document.getElementById('love4')
var status4 = "true"
function heart4() 
{
    if (status4 == "true") 
{
    Heart4.setAttribute('class','invisible')    
    console.log('function working');
    love4.removeAttribute('class','invisible')
    status4= "false"
    statusW4 = "false";
}
else
{
    Heart4.removeAttribute('class','invisible')
    console.log('function working');
    love4.setAttribute('class','invisible')
    status4= "true"
}
}

var quantityInput = document.getElementById("quantity-input");
var plusButton = document.getElementById("plus-button");
var minusButton = document.getElementById("minus-button");

function increaseQuantity() {

  var currentValue = parseInt(quantityInput.value);

  if (isNaN(currentValue)) {
    currentValue = 0;
  }

  var newValue = currentValue + 1;
  quantityInput.value = newValue;
}


function decreaseQuantity() {

  var currentValue = parseInt(quantityInput.value);

  if (isNaN(currentValue)) {
    currentValue = 0;
  }

  var newValue = currentValue - 1;

  if (newValue < 0) {
    newValue = 0;
  }
  quantityInput.value = newValue;
  
}


plusButton.addEventListener("click", increaseQuantity);
minusButton.addEventListener("click", decreaseQuantity);



var quantityInput2 = document.getElementById("quantity-input2");
var plusButton2 = document.getElementById("plus-button2");
var minusButton2 = document.getElementById("minus-button2");

function increaseQuantity2() {

  var currentValue2 = parseInt(quantityInput2.value);

  if (isNaN(currentValue2)) {
    currentValue2 = 0;
  }

  var newValue2 = currentValue2 + 1;
  quantityInput2.value = newValue2;
}


function decreaseQuantity2() {

  var currentValue2 = parseInt(quantityInput2.value);

  if (isNaN(currentValue2)) {
    currentValue2 = 0;
  }

  var newValue2 = currentValue2 - 1;

  if (newValue2 < 0) {
    newValue2 = 0;
  }
  quantityInput2.value = newValue2;
}


plusButton2.addEventListener("click", increaseQuantity2);
minusButton2.addEventListener("click", decreaseQuantity2);




var quantityInput3 = document.getElementById("quantity-input3");
var plusButton3 = document.getElementById("plus-button3");
var minusButton3 = document.getElementById("minus-button3");

function increaseQuantity3() {

  var currentValue3 = parseInt(quantityInput3.value);

  if (isNaN(currentValue3)) {
    currentValue3 = 0;
  }

  var newValue3 = currentValue3 + 1;
  quantityInput3.value = newValue3;
}


function decreaseQuantity3() {

  var currentValue3 = parseInt(quantityInput3.value);

  if (isNaN(currentValue3)) {
    currentValue3 = 0;
  }

  var newValue3 = currentValue3 - 1;

  if (newValue3 < 0) {
    newValue3 = 0;
  }
  quantityInput3.value = newValue3;
}


plusButton3.addEventListener("click", increaseQuantity3);
minusButton3.addEventListener("click", decreaseQuantity3);







var quantityInput4 = document.getElementById("quantity-input4");
var plusButton4 = document.getElementById("plus-button4");
var minusButton4 = document.getElementById("minus-button4");

function increaseQuantity4() {

  var currentValue4 = parseInt(quantityInput4.value);

  if (isNaN(currentValue4)) {
    currentValue4 = 0;
  }

  var newValue4 = currentValue4 + 1;
  quantityInput4.value = newValue4;
}


function decreaseQuantity4() {

  var currentValue4 = parseInt(quantityInput4.value);

  if (isNaN(currentValue4)) {
    currentValue4 = 0;
  }

  var newValue4 = currentValue4 - 1;

  if (newValue4 < 0) {
    newValue4 = 0;
  }
  quantityInput4.value = newValue4;
}


plusButton4.addEventListener("click", increaseQuantity4);
minusButton4.addEventListener("click", decreaseQuantity4);




var totalM = document.getElementById("total-output");



quantityInput.addEventListener("input", updateV);
quantityInput2.addEventListener("input", updateV);
quantityInput3.addEventListener("input", updateV);
quantityInput4.addEventListener("input", updateV);


plusButton.addEventListener("click", updateV);
minusButton.addEventListener("click", updateV);
plusButton2.addEventListener("click", updateV);
minusButton2.addEventListener("click", updateV);
plusButton3.addEventListener("click", updateV);
minusButton3.addEventListener("click", updateV);
plusButton4.addEventListener("click", updateV);
minusButton4.addEventListener("click", updateV);

var price1 =0;
var price2 =0;
var price3 =0;
var price4 =0;

function updateV() {
  
   price1 = parseInt(quantityInput.value)*25;
   price2 = parseInt(quantityInput2.value)*50;
   price3 = parseInt(quantityInput3.value)*100;
   price4 = parseInt(quantityInput4.value)*55;

 var totalP = price1+price2+price3+price4;
  totalM.innerHTML = totalP;
  console.log(totalP);
}



var p1 = document.getElementById('invisible1');
var p2 = document.getElementById('invisible2');
var p3 = document.getElementById('invisible3');
var p4 = document.getElementById('invisible4');

var x1 = document.getElementById('x1');
var x2 = document.getElementById('x2');
var x3 = document.getElementById('x3');
var x4 = document.getElementById('x4');


x1.addEventListener('click',add1)
x2.addEventListener('click',add2)
x3.addEventListener('click',add3)
x4.addEventListener('click',add4)

function remove1()
{

      p1.removeAttribute('id','invisible1');
      p1.setAttribute('class','cart-product1');

}

function remove2()
{

    p2.removeAttribute('id','invisible2');
    p2.setAttribute('class','cart-product2');
  
}

function remove3()
{
  p3.removeAttribute('id','invisible3');
  p3.setAttribute('class','cart-product3');   
}

function remove4()
{
  p4.removeAttribute('id','invisible4');
  p4.setAttribute('class','cart-product4');
}
function add1()
{

  p1.setAttribute('id','invisible1');
  p1.removeAttribute('class','cart-product1');
  document.getElementById("quantity-input").value = 0;;
  return 0;

  
} 
function add2()
{

  p2.setAttribute('id','invisible2');
  p2.removeAttribute('class','cart-product2');
  document.getElementById("quantity-input2").value = 0;;
  return 0;

  
} 
function add3()
{

  p3.setAttribute('id','invisible3');
  p3.removeAttribute('class','cart-product3');
  document.getElementById("quantity-input3").value = 0;;
  return 0;

  
} 
function add4() 
{

  p4.setAttribute('id','invisible4');
  p4.removeAttribute('class','cart-product4');
  document.getElementById("quantity-input4").value = 0;;
  return 0;

  
} 

var cartdiv = document.getElementById('invisibleC');

var cartbtn = document.getElementById('cart-btn')
cartbtn.addEventListener('click',cart)

var stateC ="true";
function cart()
{


if (stateC =="true")
{
  cartdiv.removeAttribute('id','invisibleC');
  stateC = "false";
  cartdiv.scrollIntoView({behavior:"smooth"});
  console.log(stateC);
}
  else
{
cartdiv.setAttribute('id','invisibleC');
stateC = "true";
console.log(stateC);
}

}


var wishdiv = document.getElementById('invisW');

var wishbtn = document.getElementById('wish-btn')

var stateW ="true";
function wishlist()
{


if (stateW =="true")
{
  wishdiv.removeAttribute('id','invisW');
  stateW = "false";
  wishdiv.scrollIntoView({behavior:"smooth"});
  console.log(stateW);
}
  else
{
wishdiv.setAttribute('id','invisibleC');
stateW = "true";
console.log(stateW);
}

}

var wishlistbtn1 = document.getElementById('wishlist-btn1')

wishlistbtn1.addEventListener('click',wish1)

var wish_prod1 = document.getElementById('invisW1')


function wish1() 
{
 console.log(statusW1);
 if (statusW1 == "false")
{
wish_prod1.removeAttribute('id','invisW1');
  statusW1 = "true";
} 
else
{
  wish_prod1.setAttribute('id','invisW1')  ;
statusW1 = "false";
Heart1.removeAttribute('class','invisible')
love1.setAttribute('class','invisible')
}
}




var wishlistbtn2 = document.getElementById('wishlist-btn2')

wishlistbtn2.addEventListener('click',wish2)

var wish_prod2 = document.getElementById('invisW2')


function wish2() 
{
 console.log(statusW2);
 if (statusW2 == "false")
{
wish_prod2.removeAttribute('id','invisW2');
  statusW2 = "true";
} 
else
{
  wish_prod2.setAttribute('id','invisW2')  ;
statusW2 = "false";
Heart2.removeAttribute('class','invisible')
love2.setAttribute('class','invisible')
}

}
var wishlistbtn3 = document.getElementById('wishlist-btn3')

wishlistbtn3.addEventListener('click',wish3)

var wish_prod3 = document.getElementById('invisW3')


function wish3() 
{
 console.log(statusW3);
 if (statusW3 == "false")
{
wish_prod3.removeAttribute('id','invisW3');
  statusW3 = "true";
} 
else
{
  wish_prod3.setAttribute('id','invisW3')  ;
statusW1 = "false";
Heart3.removeAttribute('class','invisible')
love3.setAttribute('class','invisible')
}
}

var wishlistbtn4 = document.getElementById('wishlist-btn4')

wishlistbtn4.addEventListener('click',wish4)

var wish_prod4 = document.getElementById('invisW4')


function wish4() 
{
 console.log(statusW4);
 if (statusW4 == "false")
{
wish_prod4.removeAttribute('id','invisW4');
  statusW4 = "true";
} 
else
{
  wish_prod4.setAttribute('id','invisW4')  ;
statusW4 = "false";
Heart4.removeAttribute('class','invisible')
love4.setAttribute('class','invisible')
}
}













