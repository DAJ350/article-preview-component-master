const shareButton = document.getElementById("share-btn");
const popup = document.getElementById("popup");

function togglePopup() {
  if (popup.style.display === "none") {
    popup.style.display = "flex";
  } else {
    popup.style.display = "none";
  }
}

shareButton.addEventListener("click", togglePopup);
