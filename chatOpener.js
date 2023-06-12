const submitEmailBtn = document.getElementById("submitEmailBtn");
const emailForm = document.getElementById("linkForm");
const emailInput = document.getElementById("emailInput");
const linkForm = document.getElementById("linkForm");
const linkInput = document.getElementById("linkInput");
const responseMessage = document.getElementById("responseMessage");

submitEmailBtn.addEventListener("click", function() {
  const email = emailInput.value;
  if (email.trim() !== "") {
    emailForm.style.display = "none";
    linkForm.style.display = "block";
  }
});

linkForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const link = linkInput.value;
  if (link.trim() !== "") {
    linkForm.style.display = "none";
    responseMessage.style.display = "block";
  }
});
