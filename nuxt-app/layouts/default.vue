<script setup lang="ts">
import BaseHeader from "~/components/UI/header/BaseHeader.vue";
import BaseCopyright from "~/components/UI/BaseCopyright.vue";
</script>

<template>
  <div class="px-6 md:px-20">
    <div class="flex flex-col lg:justify-between lg:h-screen">
      <BaseHeader/>
      <slot/>
      <BaseCopyright/>
    </div>
  </div>
</template>
