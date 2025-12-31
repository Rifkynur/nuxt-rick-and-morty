<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { axiosIntance } from "../../lib/axiosIntance";

definePageMeta({
  ssr: false,
});

const { data, isLoading, error } = useQuery({
  queryKey: ["all-char"],
  queryFn: async () => {
    const res = await axiosIntance.get("/character");
    return res.data;
  },
});

watch(data, (newVal) => {
  if (newVal) {
    console.log(newVal?.results);
  }
});
</script>

<template>
  <div>
    <!-- <h1 class="bg-red-300">adsa</h1>
    <ul>
      <li v-for="item in data?.results" :key="item.id">
        {{ item.name }}
      </li>
    </ul> -->
  </div>
</template>
