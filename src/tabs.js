import "../sass/tabs.scss";

const testtabLoad = (() => {
  // container
  const contentTabs = document.querySelector("#content");
  const tabs = document.createElement("tabs");
  tabs.innerHTML = `
    <div class="tabs">
      <ul>
        <li class="trigger active" data-target="#home">Home</li>
        <li class="trigger" data-target="#about">About</li>
        <li class="trigger" data-target="#galery">Galery</li>
        <li class="trigger" data-target="#contact">Conctact</li>
      </ul>
      <div id="home" class="content active">
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
              <a href="#home" class="nav-list-link">Thank You</a>
            </li>
            <li class="nav-list-item">
              <a href="#about" class="nav-list-link">For</a>
            </li>
            <li class="nav-list-item">
              <a href="#galery" class="nav-list-link">Your Visit</a>
            </li>
            <li class="nav-list-item">
              <a href="#contact" class="nav-list-link">Hope to see you Soon</a>
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
     </div>
     
      <div id="about" class="content">
        <section class="about-us">
        <div class="about-us-left">
          <img src="../src/images/about-us-img.png" alt="about-us" />
        </div>
      
        <div class="about-us-right">
          <h1 class="main-heading">About Us</h1>
          <h3 class="sub-heading">Introduce to Georgian Dishes</h3>
          <div class="stars">
            <i class="fas fa-star-of-life star"></i>
            <i class="fas fa-star-of-life star"></i>
            <i class="fas fa-star-of-life star"></i>
          </div>
          <p class="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam voluptatum, reiciendis repellat sapiente quisquam, voluptates expedita hic aperiam ipsam tempora ex temporibus corrupti assumenda laboriosam libero. Perspiciatis iste harum unde voluptatem fugiat nobis suscipit corporis nemo
            cum sapiente rem, praesentium mollitia, reiciendis temporibus quas, optio et id provident non cupiditate.
          </p>
          <div class="stars">
            <i class="fas fa-star-of-life star"></i>
            <i class="fas fa-star-of-life star"></i>
            <i class="fas fa-star-of-life star"></i>
          </div>
          <button type="button" class="main-btn">Read More</button>
        </div>
      </section>
      </div>
      <div id="galery" class="content">
        <section class="gallery">
        <div class="cards-wrapper">
          <div class="card">
            <div class="card-overlay">
              <h1 class="card-overlay-heading">Burritos</h1>
              <p class="card-overlay-paragraph">Price:$30.00</p>
              <button type="button" class="card-overlay-btn">Order Now</button>
            </div>
            <img src="../src/images/gallery-img-1.jpeg" class="card-img" alt="" />
          </div>
      
          <div class="card">
            <div class="card-overlay">
              <h1 class="card-overlay-heading">Custom Pancakes</h1>
              <p class="card-overlay-paragraph">Price:$30.00</p>
              <button type="button" class="card-overlay-btn">Order Now</button>
            </div>
            <img src="../src/images/gallery-img-2.jpeg" alt="" class="card-img" />
          </div>
      
          <div class="card">
            <div class="card-overlay">
              <h1 class="card-overlay-heading">Home Made Pizzas</h1>
              <p class="card-overlay-paragraph">Price:$30.00</p>
              <button type="button" class="card-overlay-btn">Order Now</button>
            </div>
            <img src="../src/images/gallery-img-3.jpeg" alt="" class="card-img" />
          </div>
      
          <div class="card">
            <div class="card-overlay">
              <h1 class="card-overlay-heading">Fish</h1>
              <p class="card-overlay-paragraph">Price:$30.00</p>
              <button type="button" class="card-overlay-btn">Order Now</button>
            </div>
            <img src="../src/images/gallery-img-4.jpeg" alt="" class="card-img" />
          </div>
      
          <div class="card">
            <div class="card-overlay">
              <h1 class="card-overlay-heading">Salads</h1>
              <p class="card-overlay-paragraph">Price:$30.00</p>
              <button type="button" class="card-overlay-btn">Order Now</button>
            </div>
            <img src="../src/images/gallery-img-5.jpeg" alt="" class="card-img" />
          </div>
      
          <div class="card">
            <div class="card-overlay">
              <h1 class="card-overlay-heading">Steaks</h1>
              <p class="card-overlay-paragraph">Price:$30.00</p>
              <button type="button" class="card-overlay-btn">Order Now</button>
            </div>
            <img src="../src/images/gallery-img-6.jpeg" alt="" class="card-img" />
          </div>
        </div>
      </section>
      </div>
      <div id="contact" class="content">
        <footer class="footer">
        <div class="footer-header">
          <a href="#" class="logo"><i class="fas fa-utensils"></i></a>
          <div>
            <h1 class="main-name">Georgia</h1>
            <p class="sub-name">Restaurant</p>
          </div>
        </div>
    
        <div class="footer-social-media">
          <ul class="social-media">
            <li class="social-media-item">
              <a href="#" class="social-media-link">
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
            <li class="social-media-item">
              <a href="#" class="social-media-link">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li class="social-media-item">
              <a href="#" class="social-media-link">
                <i class="fab fa-google-plus-square"></i>
              </a>
            </li>
            <li class="social-media-item">
              <a href="#" class="social-media-link">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
    
        <div class="footer-copyright">
          <p class="footer-copyright-paragraph">&copy; Copyright. Restaurant "Georgia. All Rights Reserved"</p>
        </div>
      </footer>
      </div>
    </div>
    </div> `;

  contentTabs.appendChild(tabs);
})();

class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll(".trigger");
  }

  init() {
    this.tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
          this.toggleTabs(e);
          this.toggleContent(e);
        }
      });
    });
  }

  toggleTabs(e) {
    this.tabs.forEach((tab) => tab.classList.remove("active"));
    e.target.classList.add("active");
  }

  toggleContent(e) {
    this.container.querySelectorAll(".content").forEach((item) => {
      item.classList.remove("active");
    });
    const selector = e.target.getAttribute("data-target");
    const content = this.container.querySelector(selector);
    content.classList.add("active");
  }
}

export { testtabLoad, Tabs };
