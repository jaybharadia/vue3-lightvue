<template>
  <div>
    Extension INFO
    <pre>
      {{ extensionInfo }}
    </pre>

    <h3>PROPS</h3>

    <pre>
      {{ props }}
    </pre>
  </div>
</template>

<script setup>
import { useExtension } from "@/composables/use-extension.js";
import { computed, toRefs } from "vue";
const props = defineProps({
  type: null,
  name: null,
});

const { type } = toRefs(props);
// const directUsComputed = computed(() => props.type);
const extensionInfo = useExtension(type, props.name);
</script>
<!-- <script>
import { defineComponent } from "vue";
import { useExtension } from "@/composables/use-extension.js";

export default defineComponent({
  name: "ExtensionOptions",
  props: {
    type: String,
    name: String,
  },
  setup(props) {
    console.log("props->>>>", props);

    const extensionInfo = useExtension(props.type, props.name);
  },
});
</script> -->

<style lang="scss" scoped></style>
