// let productclassification = [
//     "خضار وفواكه",
//     "التظيف والغسيل",
//     "الأطعمة المجمدة",
//     "الأطعمة المعلبة",
//     "الافطار",
//     "الطبخ",
//     "الحليب",
//     "الايس كريم",
//     "القهوة والشاي",
//     "المشروبات",
//     "سناكات وحلويات",
//     "المخبوزات",
//     "منجات الألبان والبيض",
//     "الدجاج والاسماك",
//     "خضار وفواكه",



// ];

// let descriptionarray = [
//     "    ",
//     "  cc ",
//     "   ",
//     "   ",
//     "   ",
//     "   ",
//     "   ",
//     "   ",
//     "   ",
//     "   ",
//     "   ",
//     "   ",
//     "   ",
//     "   ",
//     "   "


// ];
// let img=[
//     "فواكه.jpg",
//     "فواكه.jpg",
//     "فواكه.jpg",
//     "فواكه.jpg",
//     "فواكه.jpg",
//     "فواكه.jpg",
//     "فواكه.jpg",
//     "فواكه.jpg",
//     "فواكه.jpg",
//     "فواكه.jpg",
//     "فواكه.jpg",
//     "فواكه.jpg",
//     "فواكه.jpg",
//     "فواكه.jpg",
//     "فواكه.jpg",
// ];

// let d = document.querySelector(".products");

// for (let i = 0; i < productclassification.length; i++){
//     let f = document.querySelector(".products").innerHTML;
//     d.innerHTML = ` <div id = "product${i}" class="product>
    
    
//     <div class="product${[i]}">
//     <img src="${img[i]}" class="prodect__image">
//     <h5 class="prodect-title">${productclassification[i]}</h5>
//     <span>${descriptionarray[i]}</span>
//     <div class="shop-item-details">
//     <h3 class="prodect__Price"></h3>
//     <button class="btn">Add to Cart</button>
//     </div>
//     </div>
// </div>` + f;
// let b = document.getElementById(`product${i}`);
// // b.style.backgroundImage = `url('./${productclassification[i]}.jpg' )`
// };

// filterSelection("all")
// function filterSelection(c){
//     var x,  y;
//     x = document.getElementsByClassName("products");
//     if (c == "all") c = "";
//     for(y = 0; y < x.length; y++) {
//      w3RemooveClass(x[y], "show");
//      if (x[y].className.indexOf(c) > -1)   
//      w3AddClass(x[y], "show");
//     }   
// }

// function w3AddClass(element, name) {
// var y, arr1, arr2;
// arr1 = element.className.split("");
// arr2 = name.split(" ");
// for(y = 0; y < arr2.length; y++) {
//     if (arr2.indexOf(arr2[i]) == -1) {
//         element.className += " " + arr2[y];
//     }
// }  
// }


// function w3RemooveClass(element, name) {
//   var y, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for(y = 0; y < arr2.length; y++){
//     while (arr1.indexOf(arr2[y]) > -1) {
//         arr1.splice(arr1.indexOf(arr2[y]), 1);
//     }
//   } 
//   element.className = arr1.join(" ");
// }

// var btnContainer = document.getElementById("filterSelection");

// var btns = btnContainer.getElementsByClassName("btn");

// for (var y = 0; y < btns.length; y++) {
//     btns[y].addEventListener("click", function () {
//        var current = document.getElementsByClassName("active");
//        current[0].className = current[0].className.replace(" active", "");
//        this.className += " active";
//     });
// }







// Open & Close Cart
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => {
    cart.classList.add("active");
}); 

closeCart.addEventListener("click", () => {
    cart.classList.remove("active");
});

///

if (document.readyState == "loading") {
    document.addEventListener('DOMContentLoaded', start);
} else {
    start();
}
//
function start() {
    addEvents();
}
//
function update() {
   addEvents(); 
   updateTotal();
}
//
function addEvents() {
    //remove item from cart
    let cartRemove_btns = document.querySelectorAll(".cart-remove");
    console.log(cartRemove_btns);
    cartRemove_btns.forEach((btn) =>{
        btn.addEventListener("click", handle_removeCartItem);
    });

    //
    let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
    cartQuantity_inputs.forEach(input => {
        input.addEventListener("change", handle_changeItemQuantity);
    });

    //
   let addCart_btns = document.querySelectorAll(".add-cart");
   addCart_btns.forEach(btn => {
    btn.addEventListener("click", handle_addCartItem);
   });
   //
const buy_btn = document.querySelector(".btn-buy");
buy_btn.addEventListener("click", handle_buyOrder);
}

let itemAdded = []
function handle_addCartItem(){
    let product = this.parentElement;
    let title = product.querySelector(".product-title").innerHTML; 
    let price = product.querySelector(".product-price").innerHTML;   
    let imgSrc = product.querySelector(".product-img").src;   
    console.log(title, price, imgSrc);

    let newToAdd = {
        title,
        price,
        imgSrc,
    };
    //
    if(itemAdded.find(el => el.title == newToAdd.title)){
        alert("This Item Is Already Exist!");
        return;
    }else{
        itemAdded.push(newToAdd); 
    }
    //
    let cartBoxElement = CartBoxComponent(title, price, imgSrc);
    let newNode = document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    const cartContent = cart.querySelector(".cart-content");
    cartContent.appendChild(newNode);

    update();
}   
// 
function handle_removeCartItem() {
 this.parentElement.remove(); 
 itemAdded = itemAdded.filter(el=> el.title != this.parentElement.querySelector(".cart-product-title").innerHTML
 ); 
 update();
}

function handle_changeItemQuantity(){
if (isNaN(this.value) || this.value < 1) {
 this.value = 1;  
}
this.value = Math.floor(this.value);

update();
}

function handle_buyOrder(){
    if(itemAdded.length <= 0) {
        alert("There is no order to place yet! \nPlease Make an Order first.");
        return;
    }
    const cartContent = cart.querySelector(".cart-content");
    cartContent.innerHTML = "";
    alert("Your Order is Placed Successfuly :)");
    itemAdded = [];
    update();
}

///////////////////////
function updateTotal() {
    let cartBoxes = document.querySelectorAll(".cart-box");
    const totalElement = cart.querySelector(".total-price");
    let total = 0;
    cartBoxes.forEach((cartBox) => {
        let priceElement = cartBox.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("$", ""));
        let quantity = cartBox.querySelector(".cart-quantity").value;
        total += price * quantity;
    });

    total = total.toFixed(2);
 


    totalElement.innerHTML = "ريال" + total;

}


//
function CartBoxComponent(title, price, imgSrc){
    return `
    <div class="cart-box">
    <img src=${imgSrc} alt="" class="cart-img"> 
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1"  class="cart-quantity">
    </div>
    <i class='bx bxs-trash-alt cart-remove'></i>  
</div>`;
}
