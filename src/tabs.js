import "../sass/tabs.scss";

const tabsLoad = (() => {
  //container
  const contentTabs = document.querySelector("#content");
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
    // remove current active classes
    this.tabs.forEach((tab) => tab.classList.remove("active"));
    // add new active class
    e.target.classList.add("active");
  }
  toggleContent(e) {
    // remove current active classes
    this.container.querySelectorAll(".content").forEach((item) => {
      item.classList.remove("active");
    });
    // add new active class
    const selector = e.target.getAttribute("data-target");
    const content = this.container.querySelector(selector);
    content.classList.add("active");
  }
}

export { tabsLoad, Tabs };
