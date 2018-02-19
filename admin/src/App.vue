<template>
  <div id="app">
    <el-container>
      <el-header class="header" height="auto">
        <div class="header__content">
          Header
        </div>
      </el-header>
      <el-container>
        <el-aside width="auto">
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>
          <el-menu
              default-active="1-4-1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              :collapse="isCollapse"
              :router="true">
            <el-menu-item index="/">
              <i class="el-icon-menu"></i>
              <span slot="title">Home</span>
            </el-menu-item>
            <el-menu-item index="/about">
              <i class="el-icon-menu"></i>
              <span slot="title">About</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
      <el-footer class="footer" height="auto">
        <div class="footer__content">
          Footer
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  private isCollapse: boolean = false;

  private handleOpen() {}

  private handleClose() {}
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
.footer {
  position: fixed;
  bottom: 0;
}
.header__content,
.footer__content {
  height: 40px;
  padding: 10px 0;
  box-sizing: border-box;
  line-height: 20px;
}
</style>
