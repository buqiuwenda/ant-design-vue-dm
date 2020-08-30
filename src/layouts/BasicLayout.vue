<template>
  <div>
    <Header />
    <Sider />
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Sider from "./SiderMenu.vue";
export default {
  components: {
    Header,
    Footer,
    Sider
  }
};
</script>
<style></style>
