<template>
  <div class="drawer-container">
    <div class="drawer-container__wrapper">
      <div class="wrapper__card">
        <div class="card__header">
          <div class="header__icon --left" @click="drawer = !drawer">
            <i class="light-icon-menu-2"></i>
          </div>
        </div>
        <div class="card__drawer">
          <LvDrawer
            v-model="drawer"
            bottom
            headerTitle="BuildItIndia"
            headerColor="#607c8a"
            close
            shadow
            width="200"
            background="#fff"
          >
            <template #default>
              <div class="list">
                <div
                  class="list-item"
                  v-for="(item, index) in items"
                  :key="index"
                >
                  <span>{{ item.name }}</span>
                  <i :class="`icon light-icon-${item.icon}`"></i>
                </div>
              </div>
            </template>
          </LvDrawer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LvDrawer from "lightvue/drawer";

export default {
  components: {
    LvDrawer,
  },
  data() {
    return {
      items: [
        { name: "Dashboard", icon: "dashboard" },
        { name: "Products", icon: "building-warehouse" },
        { name: "Sales", icon: "cash" },
        { name: "Brands", icon: "brand-facebook" },
        { name: "Credit", icon: "currency-dollar" },
        { name: "Account", icon: "account-security" },
      ],
      drawer: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.drawer-container {
  height: 100%;
  width: 100%;
  margin: auto;
  .drawer-container__wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    .list {
      display: flex;
      flex-direction: column;

      .list-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        min-width: max-content;

        .icon {
          font-size: 18px;
        }
      }
      & > div {
        padding: 10px 15px;
        color: black;
        cursor: pointer;
        &:active,
        &:hover {
          background-color: #607c8a9f;
          color: white;
        }
      }
    }
    .wrapper__card {
      height: 100%;
      width: 100%;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
      margin: 20px 0;
      position: relative;
      .card__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        background-color: #fff;
        .header__icon {
          cursor: pointer;
          height: 100%;
          width: 50px;
          // color: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          i {
            font-size: 28px;
            font-weight: 700;
            color: #607c8a;
            &::before,
            &::after {
              vertical-align: initial;
            }
          }
          &:hover {
            i {
              color: #607c8abb;
            }
          }
        }
      }
    }
    &.--absolute {
      .wrapper__card {
        height: 300px;
        .card__header {
          background-color: #607c8a;
          .header__icon {
            i {
              color: white;
            }
          }
        }
        .card__drawer {
          position: relative;
          height: 100%;
          width: 100%;
        }
      }
    }
  }
}
</style>
