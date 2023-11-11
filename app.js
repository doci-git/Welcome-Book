// css library AOS
AOS.init();
// nav menu
const navItems = document.getElementsByClassName("nav-item");

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", () => {
    for (let j = 0; j < navItems.length; j++)
      navItems[j].classList.remove("active");

    navItems[i].classList.add("active");
  });
}

//select section hide and show
let divs = ["section1", "section2", "section3"];
let visibleId = null;

function show(id) {
  if (visibleId !== id) {
    visibleId = id;
  }
  hide();
}

function hide() {
  let div, i, id;
  for (i = 0; i < divs.length; i++) {
    id = divs[i];
    div = document.getElementById(id);
    if (visibleId === id) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}
