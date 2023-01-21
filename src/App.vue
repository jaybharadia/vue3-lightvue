<script setup>
import { RouterView } from "vue-router";

import { watch, ref } from "vue";
import { useExtension } from "@/composables/use-extension.js";

const type = ref("panel");

const name = ref("input-code");

const extensionInfo = useExtension(type, name);
</script>

<template>
  <div class="h-screen w-screen">
    <RouterView />

    <button
      type="button"
      style="padding: 20px; background: #222"
      @click="name = 'input-area'"
    >
      Update Data
    </button>

    <VueTable />
  </div>
</template>
