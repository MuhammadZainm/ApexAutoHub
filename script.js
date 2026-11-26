const btns=document.querySelectorAll("button")
btns.forEach((bt)=>{
    bt.addEventListener("click",()=>{
        if(bt.classList.contains("mainBtn")){
            alert("Welcome to our website!");
        }
        else  if(bt.classList.contains("buyBtn")){
            alert("Thank you for your interest in our products!");
        }
        else  if(bt.classList.contains("learnBtn")){
            alert("Thank you for showing interest in our business!");
        }
        else if(bt.classList.contains("secBtn")){
            document.querySelector("#prod").scrollIntoView({behavior: "smooth"});
        }
    })
})