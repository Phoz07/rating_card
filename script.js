const rates = document.querySelectorAll(".rate span");
const submitbutton = document.querySelector(".submit_btn");
const card = document.querySelector(".card");
const thank_card = document.querySelector(".thank_card");
const rate_score_box = document.querySelector(".rate_score");

let rate_score = null;

rates.forEach((rate) => {
  rate.addEventListener("click", (e) => {
    const active = document.querySelector(".checked");
    if (active) {
      active.classList.remove("checked");
    }
    const card = e.target;
    card.classList.add("checked");
    rate_score = e.target.innerText;
  });
});

submitbutton.addEventListener("click", () => {
    card.classList.add("hidden");
    rate_score_box.innerText = rate_score;
    thank_card.classList.remove("hidden");
});
