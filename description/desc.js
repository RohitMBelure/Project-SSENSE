import navbar from "../components/navbar.js"
import footer from "../components/footer.js"
document.getElementById("navbar").innerHTML=navbar();
document.getElementById("footer").innerHTML=footer();

let whishlisted=JSON.parse(localStorage.getItem("whishlisted")) || [];
let bag_arr=JSON.parse(localStorage.getItem("bagged")) || [];
let product_data=JSON.parse(localStorage.getItem("product")) || []; 

    document.getElementById("desc_title").innerText=product_data.name;
    document.getElementById("desc_desc").innerText=product_data.category;
    document.getElementById("desc_color").innerText=product_data.color;
    document.getElementById("desc_made").innerText=product_data.made_in;
    document.getElementById("big_desc").innerText=product_data.big_desc;
    document.getElementById("fImage").src=product_data.image;
    document.getElementById("sImage").src=product_data.sImage;
    document.getElementById("tImage").src=product_data.tImage;
    document.getElementById("desc_price").innerText=product_data.price;
    document.getElementById("bag_but").addEventListener("click",function(){
    add_to_bag(product_data);
 
    })
    document.getElementById("whish_but").addEventListener("click",function(){
        add_to_whish(product_data);
        })
 let selected_size=document.getElementById("select_size")
 function add_to_bag(product_data){
  
  product_data["size"]=selected_size.value;
    bag_arr.push(product_data)
    localStorage.setItem("bagged",JSON.stringify(bag_arr));
   console.log(bag_arr)
 }
 function add_to_whish(product_data){
  product_data["size"]=selected_size.value;
    whishlisted.push(product_data);
    localStorage.setItem("whishlisted",JSON.stringify(whishlisted));

 }
 let info=document.getElementById("info")
 let cont=document.getElementById("desc-container")
 document.getElementById("size").addEventListener("click",sizefun);
 function sizefun(){
info.style.display="block";
cont.style.opacity="0.2" 
 }




