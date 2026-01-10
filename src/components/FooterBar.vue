<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Contact Us -->
        <div class="contact">
          <h3>Contact Us</h3>
          <p>
            Off Ama Akroma Street | Takoradi.<br />
            Box TD 453, Takoradi, Ghana-West Africa<br />
            Phone: +233 031 2025681/7090621<br />
            Email:
            <a href="mailto:info@tis-takoradi.com" title="Send message"
              >info@tis-takoradi.com</a
            >
          </p>
        </div>
        <!-- Social Icons -->
        <div class="social">
          <h3>Go Social</h3>
          <p>Stay in touch with us:</p>
          <ul class="social-icons">
            <li>
              <a
                href="https://www.youtube.com/@takoradiinternationalschoo8233"
                target="_blank"
                ><img src="@/assets/icons/youtube.svg" alt="YouTube"
              /></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/takoradi_international_school/"
                target="_blank"
                ><img src="@/assets/icons/insta.svg" alt="Instagram"
              /></a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/search?q=takoradi%20international%20school&t=1734564943058"
                target="_blank"
                ><img src="@/assets/icons/tiktok.svg" alt="TikTok"
              /></a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Cambridge Logo -->
      <div class="cambridge-logo">
        <img src="@/assets/images/cambridge_logo.jpg" alt="Cambridge Logo" />
      </div>
    </div>
    <!-- Legal -->
    <div class="legal">
      <div class="container">
        <p>&copy; Takoradi International School | 2025.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
}

.footer .container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
}

.footer-content > div {
  flex: 1;
  min-width: 220px;
  margin: 20px;
}

.footer h3 {
  border-bottom: 2px solid #84dd84;
  padding-bottom: 10px;
  margin-bottom: 15px;
  font-size: 22px;
}

.footer p {
  font-size: 16px;
  line-height: 1.6;
}

.footer a {
  color: #84dd84;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.social-icons {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 15px;
}

.social-icons li {
  display: inline-block;
}

.social-icons a img {
  width: 30px;
  height: 30px;
  transition: transform 0.3s;
}

.social-icons a img:hover {
  transform: scale(1.2);
}

.cambridge-logo {
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
}

.cambridge-logo img {
  max-width: 200px;
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s;
}

.cambridge-logo img:hover {
  transform: scale(1.05);
}

.legal {
  background-color: #222;
  color: #aaa;
  text-align: center;
  padding: 15px 0;
}

.legal p {
  margin: 0;
  font-size: 14px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }

  .footer-content > div {
    margin: 10px 0;
  }

  .cambridge-logo {
    margin-top: 10px;
    margin-bottom: 20px;
  }
}
</style>
