<template>
  <div>
    <div class="header-position">
      <HeaderLayout
        :toggle-click="toggleClick"
        :toggle="toggle"
        :is-render="render" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HeaderLayout from "./_components/header-layout.vue";

type Data = {
  render: boolean;
  toggle: boolean;
  windowWidth: Number;
};

export default defineComponent({
  name: "ManageHeaderMenu",
  components: {
    HeaderLayout,
  },
  data(): Data {
    return {
      render: true,
      toggle: true,
      windowWidth: 0,
    };
  },
  created() {},
  mounted() {
    this.calculateWindowWidth();

    if (this.toggle) this.closeSideMenu();
  },
  methods: {
    toggleClick() {
      this.toggle = !this.toggle;
    },
    calculateWindowWidth() {
      this.windowWidth = window.innerWidth;
      if (Number(this.windowWidth) <= 600) {
        this.toggle = false;
      } else {
        this.toggle = true;
      }
    },
    closeSideMenu() {},
  },
});
</script>

<style lang="scss" scoped>
.header-position {
  position: sticky;
  top: 0;
  z-index: 999;
}
.side-position {
  position: fixed;
}

.has-sidenav {
  padding-left: 100px;

  @media screen and (max-width: 599px) {
    padding-left: 0;
  }
}
</style>
