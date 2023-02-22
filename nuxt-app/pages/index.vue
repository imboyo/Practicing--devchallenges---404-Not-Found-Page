<script lang="ts" setup>
import IndexBaseHero from "~/components/pages/index/IndexBaseHero.vue";
import IndexBaseDescription from "~/components/pages/index/IndexBaseDescription.vue";

useHead({
  title: "404 - Page Not Found",
  meta: [
    {
      hid: "description",
      name: "Page Not Found",
      content: "The Page you are looking for is not found.",
    },
  ],
});
</script>


<template>
  <div class="mt-16 flex flex-col gap-16 lg:flex-row lg:gap-18 xl:gap-32">
    <IndexBaseHero class="lg:w-6/12"/>
    <IndexBaseDescription class="lg:w-6/12" />
  </div>
</template>