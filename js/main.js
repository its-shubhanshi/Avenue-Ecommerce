/* wrap-1 nav*/
$(".outer .innerdrop").click(function(e){
    e.preventDefault();
    if($(this).next(".inner").is(":hidden")){
        $(".inner").slideUp();
        $(this).next(".inner").slideDown();
    }
    else{
        $(".inner").slideUp();
    }
    })
    $(".innerdrop").focusout(function(){
        $(".inner").slideUp();
    })


$(document).ready(function(){

/* wrap-2 nav bar dropdown slider */

           $(".navtop .drop").click(function(e){
            e.preventDefault();
            if($(this).next(".dropdown").is(":hidden")){
                $(".dropdown").slideUp();
                $(this).next(".dropdown").slideDown();
            }
            else{
                $(".dropdown").slideUp();
            }
            })
            $(".drop").focusout(function(e){
                $(".dropdown").slideUp();
            })

            /* lookbook.html product  tabs*/
            $(".minitabs ul li a").click(function(e){
                e.preventDefault();
                $(".minitabs ul li a").removeClass("active")
                $(this).addClass("active");
                var index=$(this).parent().index();
                $(`.product_tab`).fadeOut(0);
                $('.product_tab:eq('+index+')').fadeIn();
            })

})

/* mobile toogle*/
$(function(){
    $(".mob").click(function(){
        $(this).toggleClass("active");
        $(".wrap-2 .flex").slideToggle();
    })

    
})
/* sticky navbar*/

let vh=$(window).height();
$(window).scroll(function(){
var top=$(this).scrollTop();
//console.log(top);
let nav=document.querySelector(".wrap-2 header");
if(top>=154){
    nav.classList.add("fixed");
}
else{
    nav.classList.remove("fixed");
}
})





// product

"use strict";

// cart
let cartIcon1=document.querySelector("#cart-icon1")
let cartIcon2=document.querySelector("#cart-icon2")
let cart=document.querySelector(".cart");
let closeCart=document.querySelector("#close-cart");

// open cart

cartIcon1.addEventListener("click", function(e){
    e.preventDefault();
    cart.classList.add("active");
})
cartIcon2.addEventListener("click", function(e){
    e.preventDefault();
    cart.classList.add("active");
})
// close cart

closeCart.addEventListener("click",function(e){
    e.preventDefault();
    cart.classList.remove("active");
})

//dom loaded
if(document.readyState=="loading"){
    document.addEventListener("DOMContentLoaded",ready1)
}
else{
    ready1();
}

function ready1(){
    //remove item from cart
    var removeCartButtons= document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons);
    for(let i=0; i<removeCartButtons.length; i++){
        var button=removeCartButtons[i]
        button.addEventListener("click",removeCartItems)
    }
    var quantityInputs=document.getElementsByClassName("cart-quantity");
    for(let i=0; i< quantityInputs.length; i++){
    var input=quantityInputs[i];
    input.addEventListener("change", quantityChanged)
}

// add to cart
    var addCart=document.getElementsByClassName("add-cart");
    for(let i=0; i< addCart.length; i++){
    var button=addCart[i];
    button.addEventListener("click",addCartClicked)
}
}


// qunatty changes
    function quantityChanged(event){
        var input=event.target;
        if(isNaN(input.value) || input.value<=0){
            input.value=1;
        } updateTotal();
    }

function removeCartItems(event){
    var buttonClicked=event.target
    buttonClicked.parentElement.remove();
    updateTotal();
}
function updateTotal(){
    var cartContent=document.getElementsByClassName("cart-content")[0];
    var cartBoxes=cartContent.getElementsByClassName("cart-box");
    var total=0;
    for(let i=0; i< cartBoxes.length; i++){
        var cartBox=cartBoxes[i];
        var priceElement=cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement=cartBox.getElementsByClassName("cart-quantity")[0];
        var price=parseFloat(priceElement.innerText.replace("$",""));
        var quantity= quantityElement.value;
        total=total+price*quantity;
        //if price constain some cents value
        total=Math.round(total*100)/100;

        document.getElementsByClassName("total-price")[0].innerText="$"+total;
    }
}
// add tocart

    function addCartClicked(event){
        var button=event.target;
        var shopProducts=button.parentElement.parentElement;
        console.log(button);
        var title=shopProducts.getElementsByClassName("product_title")[0].innerText;
        var price=shopProducts.getElementsByClassName("price")[0].innerText;
        console.log(title,price);
        var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
        console.log(productImg);
        addProductToCart(title,price,productImg);
        updateTotal();
    }
    function addProductToCart(title,price,productImg){
        var cartShopBox=document.createElement("div");
        cartShopBox.classList.add("cart-box");
        var cartItems=document.getElementsByClassName("cart-content")[0];
        var cartItemsNames=cartItems.getElementsByClassName("cart-product-title");
        for(let i=0; i< cartItemsNames.length; i++){
            if (cartItemsNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
            
        } 
    
    var cartBoxContent=`
    <img src="${productImg}" alt="product_img" loading="lazy" class="cart-img">
    <div class=123+"detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity">
    </div>
    <!---remove cart-->
    <i class="fa fa-trash-o  cart-remove"></i>
    `;
     cartShopBox.innerHTML=cartBoxContent;
     cartItems.append(cartShopBox)
     cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener("click", removeCartItems);
     cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change",quantityChanged)
    

     document.querySelector(".btn-buy").addEventListener("click",function(){
    cartBoxContent="";
    cartShopBox.innerHTML=cartBoxContent;
    var cartcnt=document.querySelector(".cart-content");
    cartcnt.innerHTML="<br><br><h1>Thanks For Shopping...&#x1F609; </h1>" ;
    cartcnt.style.color="Blue"

    cartItems.append(cartShopBox)
     })
    }
// update






