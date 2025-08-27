

document.getElementById("cart-container").addEventListener("click",function(event){
    
    //heart click function
    if(event.target.className.includes("heart-icon")){
        const btn=event.target;
        //console.log(btn)

        //console.log(new Date().toLocaleTimeString('en-US', { hour12: true, timeZone: 'Asia/Dhaka' }));




        const initialAmount=document.getElementById("heart-count");
        //console.log(initialAmount)
        const currentAmount=Number(initialAmount.innerText)+1;
        initialAmount.innerText=currentAmount;
    }

    // call click function
    if(event.target.className.includes("call-click")){
        const callBtn=event.target;
        //console.log(callBtn)
       

        //console.log(new Date().toLocaleTimeString('en-US', { hour12: true, timeZone: 'Asia/Dhaka' }));

        let title=callBtn.parentNode.parentNode.children[0].innerText;
        let helplineNumber=callBtn.parentNode.parentNode.children[2].innerText;
        let currentTime=new Date().toLocaleTimeString('en-US', { hour12: true, timeZone: 'Asia/Dhaka' })

       

       const initialCoins=document.getElementById("initial-coins");
        const currentCoins=Number(initialCoins.innerText)-20;
       
       if (currentCoins<0){
        alert("You dont have sufficient coins. Each call needs 20 coins.")
       }
       else{
        alert(`📞 Calling ${title} ${helplineNumber}...`);
       
        initialCoins.innerText=currentCoins;

         const divc=document.createElement("div");
        divc.innerHTML=`
                  <div class="flex justify-between items-center bg-[#F2F2F2] mx-6 rounded-xl p-3 mt-3 mb-2">
                    <div>
                        <p class="font-bold inter ">${title}</p>
                        <p class="text-[#5c5c5c] hind-madhurai">${helplineNumber}</p>
                    </div>
                    <p>${currentTime}</p>
                    
                    
                </div>
        `

        const callHistory=document.getElementById("call-history-container");

        callHistory.append(divc)

       }
       




    }


    
})


//clear button 

document.getElementById("btn-clear").addEventListener("click",function(){
    const clearContainer=document.getElementById("call-history-container");
    clearContainer.innerHTML="";
    

})

//copy button
document.getElementById("cart-container").addEventListener("click",function(event){
    
    //copy click function
    if(event.target.className.includes("copy-btn")){
        const cBtn=event.target;
        

     let helplineNum=cBtn.parentNode.parentNode.children[2].innerText;
     //console.log(helplineNum);

           navigator.clipboard.writeText( helplineNum).then(() => {
        alert(" Number is Copied " + helplineNum);
      });

    const initialCopy=document.getElementById("copy-count");
    
        const currentCopy=Number(initialCopy.innerText)+1;
        initialCopy.innerText=currentCopy;
    } 
    })




