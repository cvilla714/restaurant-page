import _ from "lodash";

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
})();

export { pageLoad };

console.log("starting to look good");
