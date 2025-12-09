document.addEventListener("DOMContentLoaded", ()=>{
    setupPromoButton();
    setupStarRating();
    setupFeedbackForm();
});

// promo button
function setupPromoButton(){
    const button=document.getElementById("promoButton");
    const message=document.getElementById("promoMessage");

    if(!button || !message) return;

    button.addEventListener("click", ()=>{
        message.textContent="Intro offer:own a Singer Featherweight 221 for just $99, with easy monthly payments. Limited time only (in our cute retro universe).";
    });
}

// Star rating for the feedback form

function setupStarRating(){
    const ratingContainer=document.getElementById("starRating");
    const ratingInput= Document.getElementById("rating");

    if (!ratingContainer || ! ratingInput) return;

    const starButton=ratingContainer.querySelector("button");

    starButtons.forEach((button)=>{
        button.addEventListener("click", () =>{
            const value=parseInt(button.dataset.value, 10);
            ratingInput.value= value;

            startButtons.forEach((b)=>{
                const starValue= parseInt(b.dataset.value,10);
                if(starValue <= value){
                    b.classList.add("active");
                } else{
                    b.classList.remove("active");
                
                }
            });
        });
    });
}