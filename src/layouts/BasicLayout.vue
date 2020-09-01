<template>
  <div>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider :trigger="null" v-model="collapsed" collapsible>
        <div class="logo" />
        <Sider></Sider>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="collapsed != collapsed"
          >
          </a-icon>
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
    <SettingDrawer />
  </div>
</template>
<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Sider from "./SiderMenu.vue";
import SettingDrawer from "../components/SettingDrawer";
export default {
  data() {
    return {
      collapsed: false
    };
  },
  components: {
    Header,
    Footer,
    Sider,
    SettingDrawer
  }
};
</script>
<style scoped lang="less">
.trigger {
  padding: 0 20px;
  line-height: 64px;
  font-size: 20px;

  &:hover {
    background: #eeeeee;
  }
}
</style>
