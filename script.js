function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function copyEmail() {
  // Copy the text inside the text field
  navigator.clipboard.writeText("misakiigmd@gmail.com");

  // Alert the copied text
  alert("Copied the email to your clipboard!");
}
