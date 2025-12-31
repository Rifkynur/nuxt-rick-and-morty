<script setup lang="ts">
const isNavbarOpen = ref<boolean>(false);
</script>

<template>
  <nav class="p-4 mx-auto relative shadow-md">
    <div class="flex items-center justify-between max-w-7xl mx-auto">
      <img src="/image/logo.png" alt="" />
      <div class="items-center gap-4 hidden md:flex font-semibold">
        <NuxtLink to="/" active-class="text-red-500">Home</NuxtLink>
        <NuxtLink to="/favorit">Favorit</NuxtLink>
        <NuxtLink to="/episode">Episode</NuxtLink>
      </div>
      <button
        @click="isNavbarOpen = !isNavbarOpen"
        class="md:hidden w-8 h-8 flex items-center justify-center transition-transform duration-300 ease-in-out"
        :class="isNavbarOpen ? 'rotate-180' : 'rotate-0'"
      >
        <Icon
          :name="
            isNavbarOpen
              ? 'ant-design:close-circle-outlined'
              : 'ant-design:menu-outlined'
          "
          class="text-2xl transition-all duration-300"
        />
      </button>
    </div>
    <div
      class="absolute w-fit bg-white/70 py-4 px-8 rounded-xl shadow-md -bottom-28 right-8 md:hidden transition-all duration-300 ease-out"
      :class="
        isNavbarOpen
          ? 'block opacity-100 translate-y-0 pointer-events-auto'
          : 'hidden opacity-0 translate-y-4 scale-95 pointer-events-none'
      "
    >
      <ul class="flex flex-col gap-3 font-semibold">
        <li><NuxtLink to="/" active-class="text-red-500">Home</NuxtLink></li>
        <li>
          <NuxtLink to="/favorit" active-class="text-red-500">Favorit</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/episode" active-class="text-red-500">Episode</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
