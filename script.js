const shareButton = document.getElementById("share-btn");
const shareButtonCircle = document.getElementById("share-btn-circle");
const shareButtonArrow = document.getElementById("share-btn-arrow");
const popup = document.getElementById("popup");

function togglePopup() {
  if (popup.style.display == "none") {
    shareButtonCircle.style.fill = "var(--alternate-color)";
    shareButtonArrow.style.fill = "var(--card-bg)"
    popup.style.display = "flex";
  } else {
    shareButton.style.fill = "none";
    shareButtonCircle.style.fill = "var(--main-bg)";
    shareButtonArrow.style.fill = "var(--alternate-color)";
    popup.style.display = "none";
  }
}

shareButton.addEventListener("click", togglePopup);
