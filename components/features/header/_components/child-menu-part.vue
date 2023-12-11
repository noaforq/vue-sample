<script lang="ts" setup>
type Props = {
  childMenuData: {
    label: String;
    link: string;
  }[];
};

defineProps<Props>();

const handleClickLogout = async () => {};
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChildMenuPart",
});
</script>

<template>
  <ul class="child-menu">
    <div class="mask" />
    <li v-for="(data, index) in childMenuData" :key="index" class="item">
      <div
        v-if="data.label === 'ログアウト'"
        class="menu-item"
        @click="handleClickLogout">
        <span class="label">
          {{ data.label }}
        </span>
      </div>
      <nuxt-link
        v-else
        :to="data.link"
        target="_blank"
        tag="a"
        class="menu-item">
        <span class="label">{{ data.label }}</span>
      </nuxt-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.child-menu {
  width: 232px;
  padding-left: 0;

  .mask {
    visibility: hidden;
    height: 5px;
    background-color: unset;
  }

  .item {
    background-color: var(--color-nav-menu);
    list-style: none;
    border-top: 2px solid var(--color-border-primary);
    height: 42px;
  }
}

.label {
  font-family: var(--font-family-label);
}

.menu-item {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: var(--color-main-primary);
  }

  .label {
    font-size: var(--font-size-minimum);
    color: var(--color-main-secondary);
  }
}
</style>
