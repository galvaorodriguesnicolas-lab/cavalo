const button = document.getElementById("changeTitle");
const title = document.querySelector("h1");

button.addEventListener("click", () => {
    title.textContent = "Os Cavalos São Animais Incríveis!";
});
