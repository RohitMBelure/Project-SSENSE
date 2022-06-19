
const wishlist = document.querySelector('#wishlist');

let div = document.createElement("div");
div.setAttribute("class", "wishlist-div")
let h2 = document.createElement("h2");
h2.innerText="WISHLIST"
let p = document.createElement("p");
p.innerText="Use this page to manage the items you have added to your wishlist. Items saved can be removed or added to your Shopping Bag for purchase."
div.append(h2,p)
wishlist.append(div)

const container = document.querySelector('#products');

let arr = JSON.parse(localStorage.getItem("whishlisted")) || [];

if (arr.length===0){
    container.innerHTML=null;
    let p = document.createElement("p");
    p.setAttribute("class","empty")
    p.innerText="Your wishlist is empty.";
    let div = document.createElement("div");
    div.setAttribute("class", "empty-div");
    let btn1 = document.createElement("button");
    btn1.setAttribute("class", "btn")
    btn1.innerText="SHOP MENSWEAR";
    btn1.addEventListener("click", function(){
        window.location.href="../products/mens.html"
    })
    let btn2 = document.createElement("button");
    btn2.setAttribute("class", "btn")
    btn2.innerText="SHOP WOMENSWEAR";
    btn2.addEventListener("click", function(){
        window.location.href="../products/womens.html"
    })
    let btn3 = document.createElement("button");
    btn3.setAttribute("class", "btn")
    btn3.innerText="SHOP EVERYTHING ELSE";
    btn3.addEventListener("click", function(){
        window.location.href="../products/womens.html"
    })
    div.append(btn1,btn2,btn3);
    container.style.display="block";
    container.append(p,div);
}
else{
container.innerHTML=null;
arr.forEach((ele,index) => {
    let div = document.createElement("div");
    div.setAttribute("class", "cart");
    let image = document.createElement("img");
    image.src=ele.image;
    let name = document.createElement("p");
    name.innerText=ele.name;
    let desc = document.createElement("p");
    desc.innerText=ele.big_desc;
    let size = document.createElement("p");
    size.innerText=ele.size;
    let price = document.createElement("p");
    price.innerText=ele.price;
    let btn1 = document.createElement("button");
    btn1.setAttribute("class", "add")
    btn1.innerText="ADD TO BAG";
    btn1.addEventListener("click", function(){
        add(ele,btn1)
    })
    let btn2 = document.createElement("button");
    btn2.setAttribute("class", "remove")
    btn2.innerText="REMOVE";
    btn2.addEventListener("click", function(){
        remove(index)
    })
    
    div.append(image,name,desc,size,price,btn1,btn2);
    container.append(div);
});
}

let shoppingBagArr = JSON.parse(localStorage.getItem("bagged")) || [];

function add(ele,btn){
    if (btn.innerText==="ADD TO BAG"){
        shoppingBagArr.push(ele);
        localStorage.setItem("bagged", JSON.stringify(shoppingBagArr));
        alert("This item has been added to you bag")
        btn.innerText="PROCEED TO CHECKOUT";
    }
    else{
        btn.addEventListener("click", function(){
            window.location.href="../shoppingbag/scart.html";
        })
    }
}

function remove(index){
    arr.splice(index,1);
    localStorage.setItem("whishlisted", JSON.stringify(arr));
    alert("Removed from Wishlist");
    window.location.reload();
}