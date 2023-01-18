<template>
  <div>
     
    <div>
      <div class="header__icon --left" @click="drawer1 = !drawer1">
        <i class="light-icon-menu-2"></i>
      </div>

      <LvDrawer
        v-model="drawer1"
        left
        headerTitle="Title Of Header"
        headerColor="#607c8a"
        close
        shadow
        background="#fff"
        :zIndex="1000"
      >
        <template #default>
          <div class="list">
            <div class="list-item" v-for="(item, index) in items" :key="index">
              {{ item.name }}
            </div>
          </div>
        </template>
      </LvDrawer>
    </div>

    <RouterView />
  </div>
</template>

<script>
import LvDrawer from "lightvue/drawer";

export default {
  name: "AppLayout",
  components: {
    LvDrawer,
  },
  data() {
    return {
      items: [
        { name: "Item 1" },
        { name: "Item 2" },
        { name: "Item 3" },
        { name: "Item 3" },
        { name: "Item 4" },
        { name: "Item 5" },
        { name: "Item 6" },
        { name: "Item 7" },
      ],
      drawer1: true,
    };
  },
};
</script>

<style scoped>
.list-item {
  color: #202022;
  font-weight: light;
}
</style>
