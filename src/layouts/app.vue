<template>
  <div
    class="grid md:grid-cols-[200px_1fr_auto] grid-rows-[50px_1fr_auto] w-full h-full"
  >
    <!-- Header -->
    <div>
      <TheSidebar />
    </div>

    <!-- Content -->
    <div>
      <RouterView />
    </div>

    <!-- Footer -->
    <div class="row-start-3 col-start-1 col-end-3">
      <h2 class="bg-cyan-100">FOOTER</h2>
    </div>
  </div>
</template>

<script>
import LvDrawer from "lightvue/drawer";
import { defineAsyncComponent } from "vue";
export default {
  name: "AppLayout",
  components: {
    LvDrawer,
    TheSidebar: defineAsyncComponent(() =>
      import("@/components/layout/TheSidebar.vue")
    ),
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.list-item {
  color: #202022;
  font-weight: light;
}
</style>
