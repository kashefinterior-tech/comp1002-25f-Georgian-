/* 
  script.js 
  My JavaScript interactions for the Singer Featherweight 221 micro-site.


  Citations (for lines involving standard JS patterns):
  - The escapeHtml() pattern is based on a common approach described in MDN Web Docs:
    https://developer.mozilla.org/en-US/docs/Glossary/Entity#escaping (Accessed: Dec 11, 2025)
  - Optional chaining examples (?.) follow the ECMAScript standard described on MDN:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    (Accessed: Dec 7, 2025)
*/

// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {
  setupPromoButton();
  setupStarRating();
  setupFeedbackForm();
});


// 1) promo button

function setupPromoButton() {
  const button = document.getElementById("promoButton");
  const message = document.getElementById("promoMessage");

  if (!button || !message) return;

  button.addEventListener("click", () => {
    message.textContent =
      "Intro offer: Own a Singer Featherweight 221 for just $99 with easy monthly payments! (Retro universe only.)";
  });
}



// 2) star rating system

function setupStarRating() {
  const ratingContainer = document.getElementById("starRating");
  const ratingInput = document.getElementById("rating");

  // Citation: "if (!variable) return" is a standard guard clause pattern.
  // MDN Reference: https://developer.mozilla.org/en-US/docs/Glossary/Truthy (Accessed: Dec 07, 2025)
  if (!ratingContainer || !ratingInput) return;

  const starButtons = ratingContainer.querySelectorAll("button");

  starButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = parseInt(button.dataset.value, 10);
      ratingInput.value = value;

      // Highlight stars
      starButtons.forEach((b) => {
        const starValue = parseInt(b.dataset.value, 10);
        if (starValue <= value) {
          b.classList.add("active");
        } else {
          b.classList.remove("active");
        }
      });
    });
  });
}


// 3) feedback form

function setupFeedbackForm() {
  const form = document.getElementById("feedbackForm");
  const message = document.getElementById("feedbackMessage");
  const liveReviewList = document.getElementById("liveReviewList");

  if (!form || !message) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const ratingInput = document.getElementById("rating");
    const commentsInput = document.getElementById("comments");

    // Citation: this pattern using optional chaining + default value comes from MDN's guidance:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    const name = (nameInput?.value || "Anonymous").trim();
    const rating = ratingInput?.value || "0";
    const comments = (commentsInput?.value || "").trim();

    if (!comments) {
      message.textContent = "Please add a comment before sending your feedback.";
      return;
    }

    message.textContent =
      "Thanks for your feedback! (Demo only – nothing is saved on a server.)";


    // Add review visually on page
    if (liveReviewList) {
      const article = document.createElement("article");
      article.innerHTML = `
        <h4>${escapeHtml(name)}</h4>
        <p class="review-meta">${makeStars(rating)}</p>
        <p>${escapeHtml(comments)}</p>
      `;
      liveReviewList.appendChild(article);
    }

    // Reset form + clear stars
    form.reset();
    if (ratingInput) ratingInput.value = "0";

    const stars = document.querySelectorAll("#starRating button");
    stars.forEach((b) => b.classList.remove("active"));
  });
}




// 4) Turn a number into star emojis
//  Image & historical reference:
//   https://singer-featherweight.com/blogs/schoolhouse/advertisements
//   Accessed: dec 09 2025
function makeStars(value) {
  const num = Number(value) || 0;
  const count = Math.max(1, Math.min(num, 5));
  return "⭐️".repeat(count);
}




// 5) Escape HTML text to prevent breaking tags

/*
  Citation:
  This escapeHtml implementation is adapted from the standard approach shown in MDN:
  https://developer.mozilla.org/en-US/docs/Glossary/Entity#escaping
  (Accessed: Dec 07, 2025)
*/
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
