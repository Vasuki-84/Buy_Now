


document.addEventListener("DOMContentLoaded", function(){
    

const itemCount = document.getElementById("itemsCount");
const totalPrice = document.getElementById("total");

let count = 0;
let total = 0;

function addToCart(event)
{
    const price = Number(event.target.getAttribute("data-price"));
    count++;
    total += price;   
    itemCount.textContent=count;   // textCount = updated version of innerText
    totalPrice.textContent= `Rs.`+ total;
   
}

document.querySelectorAll(".add").forEach(function (btn) {
btn.addEventListener("click",addToCart);
})

})


























