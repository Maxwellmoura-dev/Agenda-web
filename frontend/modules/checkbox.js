const checkbox = document.getElementById("checkbox");
const body = document.body;

if(localStorage.getItem("theme") === "dark"){
    body.classList.add("dark-mode");
    checkbox.checked = true;
}

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark"); // salva ativado
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light"); // salva desativado
  }
});