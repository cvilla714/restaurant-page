import _ from "lodash";
import "../css/style.css";
import Icon from "../images";
const pageLoad = (() => {
  //container
  const contentContainer = document.querySelector("#content");

  const header = document.createElement("header");
  header.innerHTML = `
    <nav>
    <div class="navbar-navigation">
        <div class="navbar-navigation-left">
          <img src="images/nav-img-1.jpeg" alt="" class="left-img left-img-1" />
          <img src="images/nav-img-2.jpeg" alt="" class="left-img left-img-2" />
          <img src="images/nav-img-3.jpeg" alt="" class="left-img left-img-3" />
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
  </nav>`;

  contentContainer.appendChild(header);

  const tabs = document.createElement("tabs");
  tabs.innerHTML = `
  <h2>More information</h2>
  
  <div class="tabs">
    <ul>
      <li class="trigger active" data-target="#about">About</li>
      <li class="trigger" data-target="#delivery">Delivery info</li>
      <li class="trigger" data-target="#returns">Returns info</li>
    </ul>
    <div id="about" class="content active">
      <h3>about</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima suscipit assumenda mollitia nostrum atque facilis neque, non blanditiis deleniti, ab numquam similique eligendi soluta necessitatibus, ex quibusdam illum eaque voluptate.</p>
    </div>
    <div id="delivery" class="content">
      <h3>delivery</h3>
      <p>Non blanditiis deleniti, ab numquam similique eligendi soluta necessitatibus, ex quibusdam illum eaque voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima suscipit assumenda mollitia nostrum atque facilis neque.</p>
    </div>
    <div id="returns" class="content">
      <h3>returns</h3>
      <p>Adipisicing elit. Minima suscipit assumenda mollitia nostrum atque facilis neque, non blanditiis deleniti, lorem ipsum dolor sit amet consectetur ab numquam similique eligendi soluta necessitatibus, ex quibusdam illum eaque voluptate.</p>
    </div>
  </div>
</div> `;
  contentContainer.appendChild(tabs);

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
})();

export { pageLoad };

console.log("starting to look good");
