let cart = [];
let total = 0;

function addToCart(name, price){

    cart.push({name:name, price:price});

    total += price;

    displayCart();
}

function displayCart(){

    let list = document.getElementById("cartItems");

    list.innerHTML = "";

    cart.forEach(function(item){

        let li = document.createElement("li");

        li.innerHTML = item.name + " - ₹" + item.price;

        list.appendChild(li);

    });

    document.getElementById("total").innerHTML = total;
}

function placeOrder(){

    if(cart.length==0){

        alert("Cart is Empty");

        return;
    }

    alert("Order Placed Successfully!");

    cart=[];

    total=0;

    displayCart();
}