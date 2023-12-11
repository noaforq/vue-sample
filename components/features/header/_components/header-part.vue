<script lang="ts" setup>
import { ref } from "vue";

import { type NavMenuType } from "@/shared/types/nav-menu";

type Props = {
  data: NavMenuType;
};

defineProps<Props>();

const isOpen = ref<boolean>(false);
const handleClickMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<script lang="ts">
import { defineComponent } from "vue";

import ChildMenuPart from "./child-menu-part.vue";

export default defineComponent({
  name: "HeaderPart",
  components: {
    ChildMenuPart,
  },
});
</script>

<template>
  <nuxt-link v-if="!data.child" class="link-tag" :to="data.link" tag="div">
    <div class="icon lex justify-center relative">
      <font-awesome-icon class="header-icon" :icon="['fas', data.iconName]" />
      <p
        v-if="data.badge && Number(data.badge) <= 99"
        class="text-center badge">
        {{ data.badge }}
      </p>
      <p
        v-else-if="data.badge && Number(data.badge) >= 99"
        class="text-center badge">
        99+
      </p>
    </div>
    <p class="menu-text">
      {{ data.label }}
    </p>
  </nuxt-link>
  <div
    v-else
    class="link-tag-with-child"
    @click="handleClickMenu"
    @mouseleave="isOpen = false">
    <font-awesome-icon class="header-icon" :icon="['fas', data.iconName]" />
    <div class="flex justify-center items-center">
      <p class="menu-text">
        {{ data.label }}
      </p>
      <font-awesome-icon
        class="arrow-icon fa-xs ml-sm-1 ml-lg-1 ml-md-1"
        :icon="['fas', 'chevron-down']" />
    </div>
    <ChildMenuPart
      v-show="isOpen"
      :child-menu-data="data.child"
      class="sub-menu" />
  </div>
</template>

<style lang="scss" scoped>
.link-tag {
  cursor: pointer;
  .icon {
    height: 24px;
    margin-bottom: 4px;
  }
}

.menu-text {
  color: var(--color-nav-layout);
  font-size: var(--font-size-minimum);
  font-family: var(--font-family-label);
}

.header-icon {
  width: 21.3px;
  height: 24px;
}

.arrow-icon {
  width: 8px;
}

.badge {
  background-color: var(--color-button-outline-font-tertiary);
  font-size: 0.5rem;
  color: white;
  height: 15px;
  width: 15px;
  line-height: 15px;
  border-radius: 50%;
  bottom: 0px;
  right: 12px;
  position: absolute;
}

p {
  font-family: var(--font-family-label);
  font-size: var(--font-size-caption);
  line-height: var(--line-height-caption);
}

.link-tag-with-child {
  cursor: pointer;
  position: relative;
  .sub-menu {
    position: absolute;
    right: 0;
  }
}
</style>
