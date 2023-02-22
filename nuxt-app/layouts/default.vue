<script setup lang="ts">
import BaseHeader from "~/components/UI/header/BaseHeader.vue";
</script>

<template>
  <div class="px-6 lg:px-20">
    <BaseHeader/>
    <slot />
  </div>
</template>
