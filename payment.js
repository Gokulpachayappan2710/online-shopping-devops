function payment(){

let name=document.getElementById("name").value;

if(name==""){

alert("Please Enter Customer Name");

return;

}

document.getElementById("message").innerHTML="✅ Payment Successful!<br>Thank You For Shoppings.";

}
