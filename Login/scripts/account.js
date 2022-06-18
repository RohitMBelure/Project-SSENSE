
let arr = JSON.parse(localStorage.getItem("users"))
let arr2 = JSON.parse(localStorage.getItem("User_Details")) || [];
let arr3 = JSON.parse(localStorage.getItem("User_Address")) || [];

let sidebar = document.getElementById("left");

let h3 = document.createElement("h3");
h3.innerText="Account"
let p1 = document.createElement("p");
p1.innerText="Account Details";
p1.addEventListener("click", function(){
    accountDetails()
})
let p2 = document.createElement("p");
p2.innerText="Email preferences";
let p3 = document.createElement("p");
p3.innerText="Order History";
p3.addEventListener("click", function(){
    orderHistory()
})
let p4 = document.createElement("p");
p4.innerText="Appointments";
p4.addEventListener("click", function(){
    appointments()
})
let p5 = document.createElement("p");
p5.innerText="Addresses";
p5.addEventListener("click", function(){
    addresses()
})
let p6 = document.createElement("p");
p6.innerText="Logout";
p6.addEventListener("click", function(){
    logout()
})

sidebar.append(h3,p1,p2,p3,p4,p5,p6)

accountDetails();

function accountDetails(){
    let container = document.getElementById("right");
    container.innerHTML=null;

    let p = document.createElement("p");
    p.setAttribute("class", "heading")
    p.innerText="Account Details";
    let p1 = document.createElement("p");
    p1.setAttribute("class", "small")
    p1.innerText="Edit your preferences below.";
    let p2 = document.createElement("p");
    p2.setAttribute("class", "large")
    p2.innerText="Account Information";
    let p3 = document.createElement("p");
    p3.setAttribute("class", "small")
    p3.innerText="First name";
    let input1 = document.createElement('input');
    input1.setAttribute("class", "input1");
    let p4 = document.createElement("p");
    p4.setAttribute("class", "small")
    p4.innerText="Last name";
    let input2 = document.createElement('input');
    input2.setAttribute("class", "input2");
    let p5 = document.createElement("p");
    p5.setAttribute("class", "small")
    p5.innerText="Email Address";
    let input3 = document.createElement('div');
    input3.setAttribute("class", "emaildiv");
    input3.innerText=arr[0].email;
    input3.style.cursor='no-drop';
    input3.style.backgroundColor='rgb(207, 201, 212)';
    let p6 = document.createElement("p");
    p6.setAttribute("class", "large")
    p6.innerText="Account Password";
    let p7 = document.createElement("p");
    p7.setAttribute("class", "small")
    p7.innerText="Old password";
    let input4 = document.createElement('input');
    input4.setAttribute("class", "input3");
    input4.type="password"
    let p8 = document.createElement("p");
    p8.setAttribute("class", "small")
    p8.innerText="New password";
    let input5 = document.createElement('input');
    input5.setAttribute("class", "input4");
    input5.type="password";
    let btn = document.createElement("button");
    btn.innerText="SAVE CHANGES";
    btn.addEventListener("click", function(){
        saveChanges(arr[0].email)
    })

    container.append(p,p1,p2,p3,input1,p4,input2,p5,input3,p6,p7,input4,p8,input5,btn)
}

function saveChanges(email){
    let firstName = document.querySelector(".input1").value;
    let secondName = document.querySelector(".input2").value;
    let oldPassword = document.querySelector(".input3").value;
    let newPassword = document.querySelector(".input4").value;

    let obj = new Save(firstName,secondName,oldPassword,newPassword,email)
    console.log('obj:', obj)
    arr2.push(obj);
    localStorage.setItem("User_Details", JSON.stringify(arr2));
}

function Save(f,l,o,n,e){
    this.FirstName = f,
    this.LastName = l,
    this.OldPassword = o,
    this.NewPassword = n
    this.email = e
}

function orderHistory(){
    let container = document.getElementById("right");
    container.innerHTML=null;

    let p1 = document.createElement("p");
    p1.setAttribute("class", "large")
    p1.innerText="ORDER HISTORY";
    let hr = document.createElement("hr");

    container.append(p1,hr)
}

function appointments(){
    let container = document.getElementById("right");
    container.innerHTML=null;
    let image = document.createElement("img");
    image.src="image.png";
    
    container.append(image)
}

function addresses(){
    let container = document.getElementById("right");
    container.innerHTML=null;

    let p = document.createElement("p");
    p.setAttribute("class", "heading")
    p.innerText="Add an address";

    let p1 = document.createElement("p");
    p1.setAttribute("class", "small")
    p1.innerText="First name";
    let input1 = document.createElement('input');
    input1.setAttribute("class", "input1");
    let p2 = document.createElement("p");
    p2.setAttribute("class", "small")
    p2.innerText="Last name";
    let input2 = document.createElement('input');
    input2.setAttribute("class", "input2");
    let p3 = document.createElement("p");
    p3.setAttribute("class", "small")
    p3.innerText="Company";
    let input3 = document.createElement('input');
    input3.setAttribute("class", "input3");
    let p4 = document.createElement("p");
    p4.setAttribute("class", "small")
    p4.innerText="Street address";
    let input4 = document.createElement('input');
    input4.setAttribute("class", "input4");
    let p5 = document.createElement("p");
    p5.setAttribute("class", "small")
    p5.innerText="Country/Region";
    let input5 = document.createElement('input');
    input5.setAttribute("class", "input5");
    let p6 = document.createElement("p");
    p6.setAttribute("class", "small")
    p6.innerText="State/Province";
    let input6 = document.createElement('input');
    input6.setAttribute("class", "input6");
    let p7 = document.createElement("p");
    p7.setAttribute("class", "small")
    p7.innerText="City";
    let input7 = document.createElement('input');
    input7.setAttribute("class", "input7");

    let div = document.createElement("div");
    div.setAttribute("class","div")
    
    let div1 = document.createElement("div");
    let p8 = document.createElement("p");
    p8.setAttribute("class", "small")
    p8.innerText="ZIP or postal code";
    let input8 = document.createElement('input');
    input8.setAttribute("class", "input8");
    div1.append(p8,input8)

    let div2 = document.createElement("div");
    let p9 = document.createElement("p");
    p9.setAttribute("class", "small")
    p9.innerText="Phone";
    let input9 = document.createElement('input');
    input9.setAttribute("class", "input9");
    div2.append(p9,input9)

    div.append(div1,div2);

    let btn = document.createElement("button");
    btn.innerText="SAVE";
    btn.addEventListener("click", function(){
        saveAddress()
    })

    container.append(p,p1,input1,p2,input2,p3,input3,p4,input4,p5,input5,p6,input6,p7,input7,div,btn)
}

function saveAddress(){
    let firstName = document.querySelector(".input1").value;
    let secondName = document.querySelector(".input2").value;
    let company = document.querySelector(".input3").value;
    let streetAdd = document.querySelector(".input4").value;
    let country = document.querySelector(".input5").value;
    let state = document.querySelector(".input6").value;
    let city = document.querySelector(".input7").value;
    let pinCode = document.querySelector(".input8").value;
    let phone = document.querySelector(".input9").value;

    let obj = new SaveAdd(firstName,secondName,company,streetAdd,country,state,city,pinCode,phone);
    arr3.push(obj);
    localStorage.setItem("User_Address", JSON.stringify(arr3));
}

function SaveAdd(firstName,secondName,company,streetAdd,country,state,city,pinCode,phone){
    this.FirstName=firstName,
    this.LastName=secondName,
    this.Company=company,
    this.Street=streetAdd,
    this.Country=country,
    this.State=state,
    this.City=city,
    this.PinCode=pinCode,
    this.Phone=phone
}

function logout(){
    alert("Successfully Logged out..")
    window.location.href="login.html";
}