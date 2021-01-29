const contactLoad = (() => {
  // container
  const contentContact = document.querySelector('#content');
  const contact = document.createElement('tabs');
  contact.innerHTML = `
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
          `;

  contentContact.appendChild(contact);
})();
export default contactLoad;
