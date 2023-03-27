<template>
  <div>
    <header-menu v-if="!$route.meta.hideHeader" />
    {{ $route.meta.header }}
    <router-view />
    <footer-menu v-if="!$route.meta.hideFooter" />
    <div class="loader">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
const options = {
  moduleCache: {
    vue: Vue,
  },
  getFile(url) {
    return fetch(url).then((resp) =>
      resp.ok ? resp.text() : Promise.reject(resp)
    );
  },
  addStyle(styleStr) {
    const style = document.createElement("style");
    style.textContent = styleStr;
    const ref = document.head.getElementsByTagName("style")[0] || null;
    document.head.insertBefore(style, ref);
  },
  log(type, ...args) {
    console.log(type, ...args);
  },
};

const { loadModule } = window["vue3-sfc-loader"];

// Header
//import HeaderMenu from '@/components/HeaderMenu.vue'
// Footer
//import FooterMenu from '@/components/FooterMenu.vue'

export default {
  name: "HomeView",
  components: {
    HeaderMenu: Vue.defineAsyncComponent(() =>
      loadModule("src/components/HeaderMenu.vue", options)
    ),
    FooterMenu: Vue.defineAsyncComponent(() =>
      loadModule("src/components/FooterMenu.vue", options)
    ),
    //FooterMenu,
  },
  created() {
    /* this.axios.interceptors.request.use(
      (config) => {
        this.$store.commit("loader/loading", true);
        return config;
      },
      (error) => {
        this.$store.commit("loader/loading", false);
        return Promise.reject(error);
      }
    );

    this.axios.interceptors.response.use(
      (response) => {
        this.$store.commit("loader/loading", false);
        return response;
      },
      (error) => {
        this.$store.commit("loader/loading", false);
        return Promise.reject(error);
      }
    ); */
  },
};
</script>

<style lang="scss"></style>
