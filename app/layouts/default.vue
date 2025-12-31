<script setup>
import Navbar from "~/components/common/Navbar.vue";
</script>

<template>
  <div>
    <Navbar />
    <div class="p-4 max-w-7xl mx-auto">
      <slot />
    </div>
  </div>
</template>
