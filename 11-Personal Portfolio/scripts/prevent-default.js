const toggleLabel = document.querySelector(".toggle__label"); 

toggleLabel.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    toggleLabel.click();
  }
});



