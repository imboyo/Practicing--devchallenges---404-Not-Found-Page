<template>
  <div class="flex justify-center items-center">
    <img src="/Scarecrow.png" alt="hero-illustration" class="hero-img">
  </div>
</template>

<style scoped>
.hero-img {
  width: 285px;
  height: 240px;
}

@media (min-width: 768px) {
  .hero-img {
    width: 500px;
    height: auto;
  }
}

@media (min-width: 1024px) {
  .hero-img {
    width: auto;
    height: auto;
  }
}
</style>