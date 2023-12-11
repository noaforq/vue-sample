<template>
  <v-app>
    <HeaderMenu />
    <Nuxt />
  </v-app>
</template>

<script>
import HeaderMenu from "@/components/features/header/header-menu.vue";
export default {
  name: "DefaultLayout",
  components: {
    HeaderMenu,
  },
};
</script>
