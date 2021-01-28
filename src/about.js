const galeryLoad = (() => {
  //container
  const contentgalery = document.querySelector("#content");
  const galery = document.createElement("tabs");
  galery.innerHTML = `
    <section class="gallery">
    <div class="cards-wrapper">
      <div class="card">
        <div class="card-overlay">
          <h1 class="card-overlay-heading">Food Name</h1>
          <p class="card-overlay-paragraph">Price:$30.00</p>
          <button type="button" class="card-overlay-btn">Order Now</button>
        </div>
        <img src="../src/images/gallery-img-1.jpeg" class="card-img" alt="" />
      </div>
  
      <div class="card">
        <div class="card-overlay">
          <h1 class="card-overlay-heading">Food Name</h1>
          <p class="card-overlay-paragraph">Price:$30.00</p>
          <button type="button" class="card-overlay-btn">Order Now</button>
        </div>
        <img src="../src/images/gallery-img-2.jpeg" alt="" class="card-img" />
      </div>
  
      <div class="card">
        <div class="card-overlay">
          <h1 class="card-overlay-heading">Food Name</h1>
          <p class="card-overlay-paragraph">Price:$30.00</p>
          <button type="button" class="card-overlay-btn">Order Now</button>
        </div>
        <img src="../src/images/gallery-img-3.jpeg" alt="" class="card-img" />
      </div>
  
      <div class="card">
        <div class="card-overlay">
          <h1 class="card-overlay-heading">Food Name</h1>
          <p class="card-overlay-paragraph">Price:$30.00</p>
          <button type="button" class="card-overlay-btn">Order Now</button>
        </div>
        <img src="../src/images/gallery-img-4.jpeg" alt="" class="card-img" />
      </div>
  
      <div class="card">
        <div class="card-overlay">
          <h1 class="card-overlay-heading">Food Name</h1>
          <p class="card-overlay-paragraph">Price:$30.00</p>
          <button type="button" class="card-overlay-btn">Order Now</button>
        </div>
        <img src="../src/images/gallery-img-5.jpeg" alt="" class="card-img" />
      </div>
  
      <div class="card">
        <div class="card-overlay">
          <h1 class="card-overlay-heading">Food Name</h1>
          <p class="card-overlay-paragraph">Price:$30.00</p>
          <button type="button" class="card-overlay-btn">Order Now</button>
        </div>
        <img src="../src/images/gallery-img-6.jpeg" alt="" class="card-img" />
      </div>
    </div>
  </section>
  
        `;

  contentgalery.appendChild(galery);
})();
