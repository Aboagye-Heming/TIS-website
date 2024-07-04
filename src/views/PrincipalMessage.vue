<template>
  <section class="history-page">
    <HeaderTitle title="Principal's Message" />
    <div class="container">
      <section class="history-content">
        <div class="content-wrapper">
          <div class="history-images-container">
            <img
              src="@/assets/images/fistpumps.jpg"
              alt="Our History Image"
              class="history-image"
            />
            <!-- <img
              src="@/assets/images/fistpumps.jpg"
              alt="Our History Image"
              class="history-image"
            />
            <img
              src="@/assets/images/art_show.jpg"
              alt="Our History Image"
              class="history-image"
            /> -->
          </div>
          <div class="history-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vestibulum, libero ut viverra blandit, sapien augue placerat
              libero, vel ultricies risus ipsum ac eros. Sed bibendum diam quis
              sapien tincidunt, ut eleifend ex faucibus.
            </p>
            <p>
              Vestibulum vel nunc vel lorem sodales fermentum. Duis vehicula
              lectus a velit lacinia, non sollicitudin orci lacinia. Aenean
              aliquet, tortor a eleifend fringilla, purus libero dapibus eros,
              ut feugiat arcu eros vel ligula. Nam ullamcorper tellus ut magna
              accumsan, id dignissim dolor volutpat.
            </p>
            <p>
              Praesent aliquet lectus vel justo vehicula, a sodales velit
              rhoncus. Nulla facilisi. Curabitur sed lectus et nisi elementum
              facilisis. Quisque bibendum, turpis et gravida blandit, erat velit
              congue massa, a vestibulum arcu felis sed urna.
            </p>
            <p>
              Aliquam id lorem et felis hendrerit hendrerit ut a odio. Nullam
              feugiat risus non nunc cursus, in tincidunt odio ultrices. Ut
              sagittis, metus et commodo facilisis, est nunc malesuada lorem, in
              faucibus justo leo non justo.
            </p>
            <p>
              Sed posuere enim et orci pulvinar, a tristique nunc interdum.
              Morbi non purus ac augue consequat elementum. Donec porttitor
              bibendum sapien, a blandit felis laoreet eget. Nunc euismod
              interdum urna nec condimentum.
            </p>
            <p>
              Fusce condimentum lectus nec eros fermentum, in cursus magna
              gravida. Proin sollicitudin mi nec lorem tempor, eget venenatis
              nunc interdum. In faucibus sapien eu felis dignissim, a bibendum
              tortor volutpat.
            </p>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import HeaderTitle from "@/components/HeaderTitle.vue";
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.history-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  margin-top: 50px;
}

.history-header {
  background-color: #84dd84;
  color: black;
  padding: 20px;
  text-align: center;
  border-bottom: 2px solid #2c3e50;
}

.history-content {
  flex: 1;
  padding: 40px 0;
  background-color: white;
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  color: #2c3e50;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.history-text {
  flex: 2;
  min-width: 250px;
  animation: fadeIn 1s ease-in-out;
}

.history-images-container {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
}

.history-image {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  transition: transform 0.3s ease-in-out;
  animation: fadeIn 1s ease-in-out;
}

.history-image:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .history-content {
    padding: 20px 10px;
  }
  .content-wrapper {
    padding: 10px;
    flex-direction: column;
    align-items: center;
  }
  .history-images-container {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
  }
}
</style>
