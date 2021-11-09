function update(){

var base= document.getElementById("glazing-option-id").value;
var amt= document.getElementById("quantity-option-id").value;

var total=base*amt
document.getElementById("price").innerHTML = "$" + total.toFixed(2);
}

function itemalert(){

var amt= document.getElementById("quantity-option-id").value;
let flavor=document.getElementById("flavor").innerHTML;


alert(amt + 'x ' + flavor + ' added to cart');



}






var cartamount = 0;



function cartcheck(){

var currenttotal = localStorage.getItem("totalproducts");
currenttotal = Number(currenttotal);


if (currenttotal > 0){

var cartamount = currenttotal;
var pinkCircle=document.getElementById("cartpop");
pinkCircle.style.display="block";
document.getElementById("cartpop").innerHTML = cartamount;

} else {
var cartamount = 0;

}



}




function cartamt(){


var pinkCircle=document.getElementById("cartpop");
pinkCircle.style.display="block";

var amtincart= document.getElementById("cartpop").innerHTML;


var amt= document.getElementById("quantity-option-id").value;



var currenttotal = localStorage.getItem("totalproducts");
currenttotal = Number(currenttotal);



 
cartamount = Number(cartamount) + Number(amt) + currenttotal;




localStorage.setItem("totalproducts", cartamount);

var currenttotal = localStorage.getItem("totalproducts");

currenttotal = Number(currenttotal);

console.log(currenttotal);

console.log(typeof currenttotal);

document.getElementById("cartpop").innerHTML = amtincart.replace(amtincart, currenttotal);

}


// THIS IS UPDATING THE NUMBER ON THE ACTUAL CHECKOUT PAGE //


function checkoutpagetotal(){

var currenttotal = localStorage.getItem("totalproducts");
currenttotal = Number(currenttotal);

document.getElementById("cart-number").innerHTML = currenttotal;


}





// THIS IS WHERE I WILL START MY ARRAY OF PRODUCTS FOR THE SHOPPING CART PAGE //

let products = []


const cart = []

function loadintocart(){

var gl = document.getElementById("glazing-option-id");
var glaze = gl.options[gl.selectedIndex].text;

const cartitem = {
  flavor: document.getElementById("flavor").innerHTML,
  glazing: glaze,
  quantity: document.getElementById("quantity-option-id").value,
  price: document.getElementById("price").innerHTML,
};

console.log(cartitem.flavor);
console.log(cartitem.price);

products.push(cartitem);

localStorage.setItem("products-array", products);

products = localStorage.getItem("products-array");

console.log(products);

}


