const shareButton = document.getElementById("share-btn");
const shareButtonCircle = document.getElementById("share-btn-circle");
const shareButtonArrow = document.getElementById("share-btn-arrow");
const popup = document.getElementById("popup");
const shareButtonContainer = document.getElementById("share-btn-container");

function togglePopup() {
  if (popup.style.display == "none" || popup.style.display == "") {
    shareButtonCircle.style.fill = "var(--alternate-color)";
    shareButtonArrow.style.fill = "var(--card-bg)";
    popup.style.display = "flex";
  } else {
    shareButton.style.fill = "none";
    shareButtonCircle.style.fill = "var(--main-bg)";
    shareButtonArrow.style.fill = "var(--alternate-color)";
    popup.style.display = "none";
  }

  if (document.body.clientWidth >= 375 && document.body.clientWidth < 425) {
    shareButtonContainer.classList.toggle(
      "preview-card__share-button-container--active-mobile"
    );
  }
}

shareButton.addEventListener("click", togglePopup);
