const mainContainer=document.querySelector(".main_container");
const thanksContainer=document.querySelector(".thanks_container");

const submitButton=document.getElementById("submit");

const rateAgainButton=document.getElementById("rate_again");
const rating=document.getElementById("rating");
const listOfRates=document.querySelectorAll(".rating_btn");




//when clicks on submit button
submitButton.addEventListener("click",()=>{
    thanksContainer.classList.remove("hidden");
    mainContainer.style.display="none";
})

//when clicks on rate again button
rateAgainButton.addEventListener("click",()=>{
    thanksContainer.classList.add("hidden");
    mainContainer.style.display="block";
})

listOfRates.forEach((rate) => {
   rate.addEventListener("click",()=>{
    // console.log(rate.innerHTML);
    rating.innerHTML=rate.innerHTML;
   }) 
});



