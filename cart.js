document.getElementById("cart-container").addEventListener("click",function(event){
    
    if(event.target.className.includes("heart-icon")){
        const btn=event.target;
        console.log(btn)




        const initialAmount=document.getElementById("heart-count");
        //console.log(initialAmount)
        const currentAmount=Number(initialAmount.innerText)+1;
        initialAmount.innerText=currentAmount;
    }

    
})

