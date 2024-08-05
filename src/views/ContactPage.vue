<template>
  <section class="contact-section">
    <div class="container">
      <div class="contact-headline">
        <h3>Contact Us</h3>
        <p>If you have any questions, feel free to reach out to us!</p>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                placeholder="Your Name"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                placeholder="Your Email"
                required
              />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
          <Toast
            v-if="toast.visible"
            :message="toast.message"
            :type="toast.type"
          />
        </div>
        <div class="col-sm-4">
          <h4>Our Address</h4>
          <hr />
          <p>
            Off Ama Akroma Street | Takoradi.<br />
            Box TD 453, Takoradi, Ghana-West Africa<br />
            Phone: +233 031 2025681/7090621<br />
            Email:
            <a
              href="mailto:info@tis-takoradi.com"
              title="Send message"
              target="_self"
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

<script setup>
import { reactive } from 'vue';
import emailjs from '@emailjs/browser';
import Toast from '@/components/ToastLoader.vue';

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const toast = reactive({
  visible: false,
  message: '',
  type: 'success'
});

const submitForm = () => {
  const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_APP_EMAILJS_USER_ID;

  const templateParams = {
    name: form.name,
    email: form.email,
    message: form.message
  };

  emailjs.send(serviceId, templateId, templateParams, userId).then(
    () => {
      showToast('Your message has been sent successfully!', 'success');
      resetForm();
    },
    (error) => {
      showToast('Failed to send message. Please try again later.', 'error');
      console.log('FAILED...', error);
    }
  );
};

const showToast = (message, type) => {
  toast.message = message;
  toast.type = type;
  toast.visible = true;
  setTimeout(() => {
    toast.visible = false;
  }, 3000);
};

const resetForm = () => {
  form.name = '';
  form.email = '';
  form.message = '';
};
</script>

<style scoped>
.contact-section {
  background-color: #f8f8f8;
  padding: 50px 0;
  border-top: 1px solid #e7e7e7;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.contact-headline {
  text-align: center;
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

.row {
  display: flex;
  flex-wrap: wrap;
}

.col-sm-8,
.col-sm-4 {
  flex: 1;
  padding: 15px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

.form-group input,
.form-group textarea {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
}

button {
  padding: 12px 20px;
  background-color: #40c055;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #00ff2a;
}

.google-maps iframe {
  border: 0;
  width: 100%;
  height: 300px;
  border-radius: 4px;
}

@media screen and (max-width: 768px) {
  .col-sm-8,
  .col-sm-4 {
    flex: 1 1 100%;
    max-width: 100%;
    padding: 10px;
  }
}

.col-sm-4 h4,
.col-sm-4 p {
  color: #333;
}
</style>
