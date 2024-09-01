<template>
  <section class="contact-section">
    <div class="container">
      <div class="contact-headline">
        <h3>Contact Us</h3>
        <p>If you have any questions, feel free to reach out to us!</p>
      </div>
      <div class="content">
        <div class="address">
          <h4>Our Address</h4>
          <hr />
          <p>
            Off Ama Akroma Street | Takoradi.<br />
            Box TD 453, Takoradi, Ghana-West Africa<br />
            Phone: +233 031 2025681/7090621<br />
            Email:
            <a href="mailto:info@tis-takoradi.com" title="Send message"
              >info@tis-takoradi.com</a
            >
          </p>
          <hr />
          <h4>Google Maps</h4>
          <hr />
          <div class="google-maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d127209.75565901627!2d-1.8300696036539128!3d4.888529365093292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xfe77756f523c36d%3A0xdc83aa5017454e56!2stakoradi+international+school!3m2!1d4.888533!2d-1.7600289999999998!5e0!3m2!1sen!2sgh!4v1521009368169"
              width="100%"
              height="450"
              frameborder="0"
              style="border: 0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.contact-section {
  background-color: #f8f8f8;
  padding: 50px 0;
  border-top: 1px solid #e7e7e7;
  text-align: center; /* Center the text content */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.contact-headline {
  margin-bottom: 30px;
}

.contact-headline h3 {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  margin-top: 30px;
}

.contact-headline p {
  font-size: 18px;
  color: #666;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content horizontally */
}

.address {
  max-width: 800px; /* Set a max width for the address */
  width: 100%;
}

.address h4 {
  color: #333;
}

.address p {
  color: #333;
}

.google-maps iframe {
  border: 0;
  width: 100%;
  height: 300px;
  border-radius: 4px;
}

hr {
  margin: 20px 0;
}

@media screen and (max-width: 768px) {
  .address {
    max-width: 100%;
    padding: 10px;
  }
}
</style>
