<template>
  <div class="flex flex-col justify-start font-space-mono lg:w-auto">
    <!--   Title   -->
    <h1 class="text-5xl font-bold text-app-gray-1 title lg:text-6xl">I have bad news for you</h1>
    <!--   Description   -->
    <p class="mt-8 text-lg text-app-gray-2 lg:text-2xl xl:w-8/12">The page you are looking for might be removed or is tempoarily
      unavailable</p>
    <!--   Button   -->
    <button class="mt-16 w-fit px-10 py-6 text-sm font-bold text-white transition-all duration-300 bg-app-gray-1 hover:bg-gray-600">BACK TO HOMEPAGE</button>
  </div>
</template>

<style lang="scss" scoped>
.title {
  line-height: 70px;
}

@media (min-width: 1024px) {
  .title {
    line-height: 95px;
  }
}
</style>