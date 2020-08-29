<template>
  <div id="app">
    <div id="nav">
      <button>按钮</button>
      <br />
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less"></style>
