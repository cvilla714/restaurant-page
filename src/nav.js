// import "../sass/base.scss";
// import "../sass/components.scss";
// import "../sass/layout.scss";
// import "../sass/main.scss";
import "../css/style.css";

const navCnt = (() => {
  const contentNav = document.querySelector("#content");
  const nav = document.createElement("nav");
  nav.classList.add("navbar");

  const div = document.createElement("div");
  div.classList.add("navbar-navigation-right");

  const ulist = document.createElement("ul");
  ulist.classList.add("nav-list");

  //   const listH = document.createElement("li");
  //   listH.classList.add("nav-list-item");
  //   listH.textContent = "Home";

  //   const listA = document.createElement("li");
  //   listA.classList.add("nav-list-item");
  //   listA.textContent = "About Us";

  const listC = document.createElement("li");
  listC.classList.add("nav-list-item");
  //   listC.textContent = "Contact";

  const anchorH = document.createElement("a");
  anchorH.classList.add("nav-list-link");
  const anchorHlink = document.createTextNode("Home");
  anchorH.appendChild(anchorHlink);
  anchorH.title = "Home";
  anchorH.href = "#";

  const anchorA = document.createElement("a");
  anchorA.classList.add("nav-list-link");
  const anchorAlink = document.createTextNode("About");
  anchorA.appendChild(anchorAlink);
  anchorA.title = "About";
  anchorA.href = "#";

  const anchorC = document.createElement("a");
  anchorC.classList.add("nav-list-link");
  const anchorClink = document.createTextNode("Contact");
  anchorC.appendChild(anchorClink);
  anchorC.title = "Contact";
  anchorC.href = "#";

  contentNav.appendChild(nav);
  contentNav.appendChild(div);
  contentNav.appendChild(ulist);
  contentNav.appendChild(listC);
  contentNav.appendChild(anchorH);
  contentNav.appendChild(listC);
  contentNav.appendChild(anchorA);
  contentNav.appendChild(listC);
  contentNav.appendChild(anchorC);
})();

export { navCnt };
