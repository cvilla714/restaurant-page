const aboutLoad = (() => {
  //container
  const contentabout = document.querySelector("#content");
  const about = document.createElement("tabs");
  about.innerHTML = `
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
  
        `;

  contentabout.appendChild(about);
})();
export default aboutLoad;
