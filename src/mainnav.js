import { xor } from "lodash";

const mainnavCnt = (() => {
  const contentNav = document.querySelector("#content");
  const nav = document.createElement("nav");
  nav.classList.add("navbar");

  const inputnav = document.createElement("input");
  inputnav.classList.add("checkbox");
  inputnav.classList.add("#check");
  inputnav.setAttribute("type", "hidden");

  const div = document.createElement("div");
  div.classList.add("hamburger-menu");

  const label = document.createElement("label");
  label.classList.add("menu");
  label.setAttribute("for", id_check);

  const divmenuone = document.createElement("div");
  divmenuone.classList.add("menu-line menu-line-1");

  const divmenutwo = document.createElement("div");
  divmenutwo.classList.add("menu-line menu-line-2");

  const divmenuthird = document.createElement("div");
  divmenuthird.classList.add("menu-line menu-line-3");

  const divnav = document.createElement("div");
  divnav.classList.add("navbar-navigation");

  const divnavleft = document.createElement("div");
  divnavleft.classList.add("navbar-navigation-left");

  const imgleftone = document.createElement("img");
  imgleftone.classList.add("left-img left-img-1");
  imgleftone.src = "../src/images/nav-img-1.jpeg";

  const imglefttwo = document.createElement("img");
  imglefttwo.classList.add("left-img left-img-2");
  imglefttwo.src = "../src/images/nav-img-2.jpeg";
  // img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';

  const imgleftthird = document.createElement("img");
  imglefthird.classList.add("left-img left-img-3");
  imglefthird.src = "../src/images/nav-img-3.jpeg";

  const divnavright = document.createElement("div");
  divnavright.classList.add("navbar-navigation-right");

  const ulist = document.createElement("ul");
  ulist.classList.add("nav-list");

  const listC = document.createElement("li");
  listC.classList.add("nav-list-item");

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

  const header = document.createElement("header");
  header.classList.add("header");

  const brand = document.createElement("div");
  brand.classList.add("brand");

  const anchorlogo = document.createElement("a");
  anchorlogo.classList.add("logo");
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

export { mainnavCnt };
