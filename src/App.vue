<script setup>
import { RouterView } from "vue-router";
import { ref } from "vue";
import ExtensionOptions from "@/components/ExtensionOptions.vue";

const name = ref("input-multiline");
const type = ref("display");
</script>

<template>
  <div class="h-screen w-screen">
    <RouterView />

    <ExtensionOptions :type="type" :name="name" />

    <VueTable />
  </div>
</template>
