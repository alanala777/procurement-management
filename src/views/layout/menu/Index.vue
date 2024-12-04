<script>
  export default {
    props: ['isCollapse'],
    data() {
      return {
        //isCollapse: false
      }
    }
  }
</script>

<template>
  <div>
    <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#112f50"
        text-color="#fff"
        active-text-color="#ffd04b" router :collapse="isCollapse">
      <el-menu-item>
        <span slot="title">首客生鲜采购系统</span>
      </el-menu-item>

      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="/product">
        <template #title>
          <i class="el-icon-goods"></i>
          <span>产品管理</span>
        </template>
          <el-menu-item-group>
            <!--  <template #title>分组</template>  -->
            <el-menu-item index="/product/product_list">
              <i class="el-icon-menu"></i>
              产品列表
            </el-menu-item>
            <el-menu-item index="/product/product_category">
              <i class="el-icon-menu"></i>
              产品分类
            </el-menu-item>
          </el-menu-item-group>
      </el-submenu>

      <el-submenu index="/order">
        <template #title>
          <i class="el-icon-document"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/order/order_list">
            <i class="el-icon-menu"></i>
            订单列表
          </el-menu-item>
          <el-menu-item index="/order/order_collect">
            <i class="el-icon-menu"></i>
            订单汇总
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="/advert">
        <template #title>
        <i class="el-icon-s-cooperation"></i>
        <span>广告分类</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/advert/advert_list">
            <i class="el-icon-menu"></i>
            广告列表
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="5">
        <template #title>
          <i class="el-icon-setting"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">选项</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style lang="less" scoped>

.el-menu {
  border-right: 0;

  /deep/ .is-active {
    background: #1e78bf !important;
    color: #fff !important;
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

</style>
