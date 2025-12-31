<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { axiosIntance } from "../../lib/axiosIntance";
import CharacterCard from "~/components/common/CharacterCard.vue";

definePageMeta({
  ssr: false,
});

const search = ref<string>("");

const { data, isLoading, error } = useQuery({
  queryKey: ["all-char", search],
  queryFn: async () => {
    const res = await axiosIntance.get("/character", {
      params: {
        name: search.value,
      },
    });
    return res.data;
  },
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-5 md:pt-8">
    <div class="flex justify-end">
      <input
        type="text"
        name=""
        id=""
        v-model="search"
        class="border rounded-md px-2 border-black/50"
        placeholder="search..."
      />
    </div>
    <div v-if="isLoading">Laoding...</div>

    <CharacterCard
      v-for="val in data?.results"
      :character="val"
      :key="val.id"
    />
  </div>
</template>
