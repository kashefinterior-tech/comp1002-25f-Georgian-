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

//   Feedback form

function setupFeedbackForm(){
    const form=document.getElementById("feedbackForm");
    const message=document.getElementById("feedbackMessage");
    const liveReviewList=document.getElementById("liveReviewList");

    if(!form || !message) return;

    form.addEventListener("submit", (event) =>{
        event.preventDefault();

        const nameInput=document.getElementById("name");
        const ratingInput=document.getElementById("rating");
        const comment=(commentsInput?.value || "").trim();

         if (!comments) {
      message.textContent = "Please add a comment before sending your feedback.";
      return;
    }

    essage.textContent =
      "Thanks for your feedback! (Demo only – not saved to a real server.)";

    
    if (liveReviewList) {
      const article = document.createElement("article");
      article.innerHTML = `
        <h4>${escapeHtml(name)}</h4>
        <p class="review-meta">${makeStars(rating)}</p>
        <p>${escapeHtml(comments)}</p>
      `;
      liveReviewList.appendChild(article);
    }

    
    form.reset();
    if (ratingInput) ratingInput.value = "0";
    const stars = document.querySelectorAll("#starRating button");
    stars.forEach((b) => b.classList.remove("active"));

    });
}

// turn a rating number into star emojis