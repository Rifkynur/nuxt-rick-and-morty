<script setup lang="ts">
defineProps<{
  character: {
    id: number;
    name: string;
    image: string;
    status: string;
    location: {
      name: string;
    };
  };
}>();

const statusMap: Record<string, string> = {
  Dead: "bg-red-500",
  Alive: "bg-green-500",
  unknown: "bg-blue-500",
};
</script>
<template>
  <div class="w-full rounded-md relative shadow-md">
    <img
      :src="character.image"
      alt=""
      class="w-full h-80 object-cover rounded-t-md lg:h-96"
    />
    <div class="p-4 flex flex-col gap-2">
      <h2 class="font-bold">{{ character.name }}</h2>
      <div class="flex flex-col gap-1">
        <p>Latest Location :</p>
        <p class="font-semibold">{{ character?.location?.name }}</p>
      </div>
    </div>
    <div
      class="absolute top-1 right-1 text-xs flex items-center justify-center p-1 rounded-lg text-white font-semibold"
      :class="statusMap[character?.status]"
    >
      <p>{{ character?.status }}</p>
    </div>
  </div>
</template>
