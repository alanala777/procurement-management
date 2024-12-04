<script>
export default {
  props: ['isCollapse'],
  methods: {
    changMenu() {
      this.$emit('changeShow');
    }
  }
}
</script>

<template>
  <div>
    <!-- 顶部 -->
    <div class="header">
      <div class="open">
        <span v-if="!isCollapse" class="iconfont icon-right-indent" @click="changMenu"></span>
        <span v-else class="iconfont icon-left-indent" @click="changMenu"></span>
      </div>
    </div>
    <!-- 内容 -->
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>

.header {
  height: 50px;
  background: #1e78bf;
  color: #fff;
  line-height: 50px;
  .open {
    .iconfont {
      font-size: 22px;
      cursor: pointer;
    }
  }
}

</style>