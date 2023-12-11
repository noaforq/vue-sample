<template>
  <v-app-bar id="header-nav" class="header-container" elevation="3">
    <div class="header-wrapper">
      <div class="header-icon-logo">
        <div v-if="!toggle && isRender" class="toggle" @click="toggleClick">
          <img
            src="~assets/images/header/ic-sidebar-open.svg"
            alt="Icon Sidebar Open" />
        </div>
        <div v-if="toggle && isRender" class="toggle" @click="toggleClick">
          <img
            src="~assets/images/header/ic-sidebar-close.svg"
            alt="Icon Sidebar Open" />
        </div>
        <nuxt-link class="logo-image" :to="headerLinkComputed">
          <img src="~assets/images/logo/TechFUL+.svg" alt="TechFUL plus" />
        </nuxt-link>
      </div>
      <ul class="header-menus">
        <li v-for="(data, index) in headerMenuDataSet" :key="index">
          <HeaderPart :data="data" />
        </li>
      </ul>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, type PropType } from "vue";

import HeaderPart from "./header-part.vue";

import { type NavMenuType } from "@/shared/types/nav-menu";

type Props = {
  toggleClick: () => void;
  toggle: boolean;
  isRender: boolean;
};

export default defineComponent({
  name: "HeaderLayout",
  components: {
    HeaderPart,
  },
  props: {
    toggleClick: {
      type: Function as PropType<Props["toggleClick"]>,
      required: true,
    },
    toggle: {
      type: Boolean as PropType<Props["toggle"]>,
      required: true,
    },
    isRender: {
      type: Boolean as PropType<Props["isRender"]>,
      default: true,
    },
  },
  setup(props) {
    const headerMenuDataSet = ref<NavMenuType[]>();
    const headerLinkComputed = computed<string>(() => {
      return "/";
    });

    onMounted(() => {
      headerMenuDataSet.value = [
        {
          label: "お知らせ",
          link: "",
          iconName: "bell",
          badge: 101,
        },
        {
          label: "アカウント",
          link: "",
          iconName: "circle-user",
          child: [
            { label: "アカウント情報へ", link: "" },
            { label: "ログアウト", link: "" },
          ],
        },
      ];
    });

    return {
      headerLinkComputed,
      headerMenuDataSet,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.header-container {
  background: var(--color-nav-header);
  > .header-wrapper {
    height: 58px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 8px 48px;
    box-shadow: 0px 4px 4px 0px rgba(65 122 190/ 0.25);
  }
}

.header-icon-logo {
  display: flex;
  > .toggle {
    margin-right: 48px;
    width: 16px;
    height: 16px;
    @apply cursor-pointer;
  }
}

.logo-image {
  height: 16.76px;
  object-fit: cover;
}

.header-menus {
  display: flex;
  gap: 28px;
  text-align: center;
  align-items: center;
  color: var(--color-nav-menu);
  @media screen and (min-width: 499px) {
    justify-self: end;
  }
  li {
    list-style: none;
  }
  .header-icon {
    font-size: 2rem;
  }
  .badge {
    background-color: var(--color-button-outline-font-tertiary);
    font-size: 0.5rem;
    color: var(--color-main-secondary);
    height: 20px;
    width: 20px;
    line-height: 20px;
    border-radius: 50%;
    bottom: 20px;
    right: 20px;
    position: relative;
    transform: translate(66%, 152%);
  }
  p {
    font-family: var(--font-family-root);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
  }
  .selected {
    font-weight: bold;
    color: var(--color-font-secondary);
  }
  .link-tag-with-child {
    cursor: pointer;
    position: relative;
  }
}

.link-tag-with-child {
  .child-layout {
    position: absolute;
    transform: translate(-32%, 0%);
  }
}

.link-tag {
  cursor: pointer;
  .menu-text {
    margin-top: 2px;
  }
  .country-icon {
    width: 32.5px;
    height: 24px;
  }
  img {
    height: 24px;
    margin-bottom: 4px;
  }
}

.lang {
  .text {
    font-family: var(--font-family-label);
    font-size: var(--font-size-minimum);
    @apply cursor-pointer;
  }
  .selected {
    color: var(--color-main-primary);
  }
}

@include media(xs) {
  .header-container {
    .header-wrapper {
      flex-direction: column;
      height: 95px;
      gap: 20px;
    }
  }

  .header-icon-logo {
    justify-content: center;
    gap: 20px;
    .toggle {
      margin-right: 0px;
    }
  }
}
</style>

