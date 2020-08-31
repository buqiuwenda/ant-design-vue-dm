<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider :trigger="null" v-model="collapsed" collapsible>
      <div class="logo" />
      <Sider></Sider>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon type="menu-fold"></a-icon>
        <Header></Header>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        <Footer></Footer>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Sider from "./SiderMenu.vue";
export default {
  data() {
    return {
      collapsed: false
    };
  },
  components: {
    Header,
    Footer,
    Sider
  }
};
</script>
<style></style>
