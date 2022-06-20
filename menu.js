const sections = document.querySelectorAll("section");
const btns = document.querySelectorAll("button");

window.onload = () => {
  btns.forEach((b) =>
    b.addEventListener("click", (e) => showSection(e.target))
  );
  document.querySelector(".nav__btn--contact").click(); //initial
};

function showSection(btn) {
  //hides every section except the chosen one
  sections.forEach((s) => s.classList.remove("show-section"));
  btns.forEach((b) => b.classList.remove("select-btn"));

  const section = btn.className.substr(10); //nav__btn--contact --> contact
  document.querySelector(".CV__" + section).classList.add("show-section");
  document.querySelector("." + btn.className).classList.add("select-btn");
}
