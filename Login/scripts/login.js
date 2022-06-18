
let arr = JSON.parse(localStorage.getItem("users")) || [];

let container = document.getElementById("login");

const p1 = document.createElement('p');
p1.setAttribute("class", "login-heading");
p1.innerText = 'LOGIN OR CREATE ACCOUNT';
const p2 = document.createElement('p');
p2.innerText = 'Email Address';
const input = document.createElement('input');
input.setAttribute("id", "email")
const btn = document.createElement('button');
btn.innerText = 'CONTINUE';
btn.addEventListener("click", function(){
    continueFunc();
})
container.append(p1,p2,input,btn);



let continueFunc = () => {
    const existing = document.querySelector('#email').value;
    if (existing===""){
        container.innerHTML=null;
        const p1 = document.createElement('p');
        p1.setAttribute("class", "login-heading");
        p1.innerText = 'LOGIN OR CREATE ACCOUNT';
        const p2 = document.createElement('p');
        p2.innerText = 'Email Address';
        const input = document.createElement('input');
        input.setAttribute("id", "email")
        input.style.border='1px solid red';
        const p = document.createElement('p');
        p.innerText='Please fill out this field.'
        p.style.color="red";
        const btn = document.createElement('button');
        btn.innerText = 'CONTINUE';
        btn.addEventListener("click", function(){
            continueFunc();
        })
        container.append(p1,p2,input,p,btn);
    }
    else{
    let notExist;
    arr.forEach(({email}) => {
        notExist = false;
        if (existing === email){
            exist(existing)
        }
        else{
            notExist=true;
        }
    });

    if (notExist===true){
    container.innerHTML=null;

    const p1 = document.createElement('p');
    p1.setAttribute("class", "login-heading");
    p1.innerText = 'CREATE AN ACCOUNT';
    const p2 = document.createElement('p');
    p2.innerText = 'Email Address';
    const input = document.createElement('div');
    input.setAttribute("id", "email");
    input.innerText=existing;
    input.style.cursor='no-drop';
    input.style.backgroundColor='rgb(207, 201, 212)';
    const p3 = document.createElement('p');
    p3.innerText = 'Password';
    const password = document.createElement('input');
    password.setAttribute("id", "password");
    password.type="password";
    
    const p4 = document.createElement('p');
    p4.innerText = 'Sign up for updates and promotions';

    const div = document.createElement('div');
    div.setAttribute('class', 'checkbox');

    const div1 = document.createElement('div');
    div1.setAttribute('class', 'div1')
    const checkbox1 = document.createElement('input');
    checkbox1.setAttribute("class", "check1")
    checkbox1.type='checkbox';
    checkbox1.value="MEN'S";
    checkbox1.name="men";
    let label1 = document.createElement("label");
    label1.for="men";
    label1.innerText="MEN'S"
    div1.append(checkbox1, label1);

    const div2 = document.createElement('div');
    div2.setAttribute('class', 'div1')
    const checkbox2 = document.createElement('input');
    checkbox2.setAttribute("class", "check2")
    checkbox2.type='checkbox';
    checkbox2.value="WOMEN'S";
    checkbox2.name="women"
    let label2 = document.createElement("label");
    label2.for="women";
    label2.innerText="WOMEN'S"
    div2.append(checkbox2, label2);

    const div3 = document.createElement('div');
    div3.setAttribute('class', 'div1')
    const checkbox3 = document.createElement('input');
    checkbox3.setAttribute("class", "check3")
    checkbox3.type='checkbox';
    checkbox3.value="NO THANKS"
    checkbox3.name="thanks"
    let label3 = document.createElement("label");
    label3.for="thanks";
    label3.innerText="NO THANKS"
    div3.append(checkbox3, label3);
    
    div.append(div1, div2, div3);

    const btn1 = document.createElement('button');
    btn1.setAttribute("class", "create-account")
    btn1.innerText = 'CREATE AN ACCOUNT';

    btn1.addEventListener("click", function(){
        createAccount(existing);
    })

    const btn2 = document.createElement('button');
    btn2.setAttribute("class", "back")
    btn2.innerText = 'BACK';
    btn2.addEventListener("click", function(){
        back();
    })

    const p8 = document.createElement('p');
    p8.setAttribute('class', 'declaimer')
    p8.innerText = "When you create an SSENSE account, we collect your email and other personal data to enhance your shopping experience and, subject to your agreement, to provide you with exclusive email updates, promotions and notifications. We may also use third party search engines and social media platforms to deliver our updates, promotions and notifications to you. You may unsubscribe at any time.";
    
    const p9 = document.createElement('p');
    p9.innerText = "You may unsubscribe at any time.";
    
    container.append(p1,p2,input,p3,password,p4,div,btn1,btn2,p8,p9);
    }
    }
}

function exist(existing){
    
    container.innerHTML=null;

    const p1 = document.createElement('p');
    p1.setAttribute("class", "login-heading");
    p1.innerText = 'LOGIN';
    const p2 = document.createElement('p');
    p2.innerText = 'Email Address';
    const input = document.createElement('div');
    input.setAttribute("id", "email");
    input.innerText=existing;
    input.style.cursor='no-drop';
    input.style.backgroundColor='rgb(207, 201, 212)';
    const p3 = document.createElement('p');
    p3.innerText = 'Password';
    const password = document.createElement('input');
    password.setAttribute("id", "password");
    password.type="password";

    const btn1 = document.createElement('button');
    btn1.setAttribute("class", "create-account")
    btn1.innerText = 'CONTINUE';

    btn1.addEventListener("click", function(){
        window.location.href="account.html"
    })
    const div = document.createElement('div');
    div.setAttribute("class", "forget")
    const a1 = document.createElement('a');
    a1.innerText="Forgot your password?"
    a1.addEventListener("click", function(){
        forgot(existing)
    })
    const a2 = document.createElement('a');
    a2.href="login.html"
    a2.innerText="Not your email?"
    div.append(a1, a2)

    container.append(p1,p2,input,p3,password,btn1,div);
}

function forgot(existing){
    container.innerHTML=null;

    const p1 = document.createElement('p');
    p1.setAttribute("class", "login-heading");
    p1.innerText = 'FORGOT YOUR PASSWORD?';
    const p3 = document.createElement('p');
    p3.innerText = 'Please enter the e-mail address you use to log in, and we will send you a link to reset your password.';
    const p2 = document.createElement('p');
    p2.innerText = 'Email Address';
    const input = document.createElement('input');
    input.setAttribute("id", "email");
    input.value=existing;

    const btn1 = document.createElement('button');
    btn1.setAttribute("class", "create-account")
    btn1.innerText = 'RESET PASSWORD';

    btn1.addEventListener("click", function(){
        alert("Your password has been successfully reset");
    })

    const btn2 = document.createElement('button');
    btn2.setAttribute("class", "back")
    btn2.innerText = 'BACK';
    btn2.addEventListener("click", function(){
        exist(existing);
    })
    container.append(p1,p3,p2,input,btn1,btn2);
}

function back(){
    window.location.href="login.html"
}

function createAccount(email){
    const password = document.querySelector('#password').value;
    let check1 = document.querySelector(".check1");
    let check2 = document.querySelector(".check2");
    let check3 = document.querySelector(".check3");
    if(check1.checked){
        let obj = new User(email, password, check1.value)
        arr.push(obj)
    }
    else if(check2.checked){
        let obj = new User(email, password, check2.value)
        arr.push(obj)
    }
    else {
        let obj = new User(email, password, check3.value)
        arr.push(obj);
    }

    localStorage.setItem("users", JSON.stringify(arr));
    window.location.href="../index.html"
}

function User(e, p, u){
    this.email = e,
    this.password = p,
    this.updates = u
}
