import _ from "lodash";
// import "../css/style.css";
// import Icon from "../src/images/nav-img-1.jpeg";

const pageLoad = (() => {
  //container
  const contentContainer = document.querySelector("#content");

  const header = document.createElement("header");
  header.innerHTML = `
  <nav class="navbar">
  <input type="checkbox" id="check" class="checkbox" hidden />
  <div class="hamburger-menu">
    <label for="check" class="menu">
      <div class="menu-line menu-line-1"></div>
      <div class="menu-line menu-line-2"></div>
      <div class="menu-line menu-line-3"></div>
    </label>
  </div>
  <div class="navbar-navigation">
    <div class="navbar-navigation-left">
      <img src="../src/images/nav-img-1.jpeg" alt='move' class="left-img left-img-1" />
      <img src="../src/images/nav-img-2.jpeg" alt='move' class="left-img left-img-2" />
      <img src="../src/images/nav-img-3.jpeg" alt='move' class="left-img left-img-3" />
    </div>

    <div class="navbar-navigation-right">
      <ul class="nav-list">
        <li class="nav-list-item">
          <a href="#" class="nav-list-link">Home</a>
        </li>
        <li class="nav-list-item">
          <a href="#" class="nav-list-link">About Us</a>
        </li>
        <li class="nav-list-item">
          <a href="#" class="nav-list-link">Gallery</a>
        </li>
        <li class="nav-list-item">
          <a href="#" class="nav-list-link">Reservation</a>
        </li>
        <li class="nav-list-item">
          <a href="#" class="nav-list-link">Services</a>
        </li>
        <li class="nav-list-item">
          <a href="#" class="nav-list-link">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<header class="header">
<div class="brand">
  <a href="#" class="logo"><i class="fas fa-utensils"></i></a>
  <div>
    <h1 class="main-name">Georgia</h1>
    <p class="sub-name">Restaurant</p>
  </div>
</div>

<div class="header-banner">
  <h1 class="main-heading">Welcome</h1>
  <h3 class="sub-heading">Try Great Georgian Dishes</h3>
  <button type="button" class="main-btn">Reservations</button>
</div>
</header>

  `;

  contentContainer.appendChild(header);
})();

export default pageLoad;
