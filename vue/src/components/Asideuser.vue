<template>
  <el-menu :default-openeds="['1', '3']" style="height: 100%;overflow-x: hidden"
           background-color="rgb(48,65,86)"
           text-color="#fff"
           active-text-color="#ffd04b"
           :collapse-transition="false"
           :collapse="isCollapse"
           router
           @select="handleSelect"
  >

    <div style="height: 60px;line-height: 60px;text-align: center">
      <img src="../assets/logo.png" alt="" style="width: 20px;position: relative;top: 5px;margin-right: 5px;">
      <b style="color: #cccccc;" v-show="logoTextshow">个人中心</b>
    </div>

    <el-menu-item index="/manageuser/info">
      <template slot="title">
        <i class="el-icon-search"></i>
        <span slot="title">个人信息</span>
      </template>
    </el-menu-item>

    <el-menu-item index="/manageuser/zhiwuupload">
      <template slot="title">
        <i class="el-icon-house"></i>
        <span slot="title">植物上传</span>
      </template>
    </el-menu-item>

    <el-menu-item index="/manageuser/zhiwuchange">
      <template slot="title">
        <i class="el-icon-house"></i>
        <span slot="title">植物修改</span>
      </template>
    </el-menu-item>

    <el-menu-item index="/manageuser/zhiwunamesearch">
      <template slot="title">
        <i class="el-icon-house"></i>
        <span slot="title">植物名称查询</span>
      </template>
    </el-menu-item>

    <el-menu-item index="/manageuser/zhiwusearch">
      <template slot="title">
        <i class="el-icon-house"></i>
        <span slot="title">植物证书号查询</span>
      </template>
    </el-menu-item>

    <el-menu-item index="/manageuser/zhiwureload">
      <template slot="title">
        <i class="el-icon-house"></i>
        <span slot="title">植物数据恢复</span>
      </template>
    </el-menu-item>



<!--    <el-submenu index="/">-->
<!--      <template slot="title">-->
<!--        <i class="el-icon-message"></i>-->
<!--        <span slot="title">导航一</span>-->
<!--      </template>-->
<!--      <el-menu-item-group>-->
<!--        <template slot="title">分组一</template>-->
<!--        <el-menu-item index="1-2">选项2</el-menu-item>-->
<!--      </el-menu-item-group>-->
<!--      <el-menu-item-group title="分组2">-->
<!--        <el-menu-item index="1-3">选项3</el-menu-item>-->
<!--      </el-menu-item-group>-->
<!--      <el-submenu index="1-4">-->
<!--        <template slot="title">选项4</template>-->
<!--        <el-menu-item index="1-4-1">选项4-1</el-menu-item>-->
<!--      </el-submenu>-->
<!--    </el-submenu>-->
<!--    <el-submenu index="2">-->
<!--      <template slot="title">-->
<!--        <i class="el-icon-menu"></i>-->
<!--        <span slot="title">导航二</span></template>-->
<!--      <el-menu-item-group>-->
<!--        <template slot="title">分组一</template>-->
<!--        <el-menu-item index="2-1">选项1</el-menu-item>-->
<!--        <el-menu-item index="2-2">选项2</el-menu-item>-->
<!--      </el-menu-item-group>-->
<!--      <el-menu-item-group title="分组2">-->
<!--        <el-menu-item index="2-3">选项3</el-menu-item>-->
<!--      </el-menu-item-group>-->
<!--      <el-submenu index="2-4">-->
<!--        <template slot="title">选项4</template>-->
<!--        <el-menu-item index="2-4-1">选项4-1</el-menu-item>-->
<!--      </el-submenu>-->
<!--    </el-submenu>-->
<!--    <el-submenu index="3">-->
<!--      <template slot="title">-->
<!--        <i class="el-icon-setting"></i>-->
<!--        <span slot="title">导航三</span></template>-->
<!--      <el-menu-item-group>-->
<!--        <template slot="title">分组一</template>-->
<!--        <el-menu-item index="3-1">选项1</el-menu-item>-->
<!--        <el-menu-item index="3-2">选项2</el-menu-item>-->
<!--      </el-menu-item-group>-->
<!--      <el-menu-item-group title="分组2">-->
<!--        <el-menu-item index="3-3">选项3</el-menu-item>-->
<!--      </el-menu-item-group>-->
<!--      <el-submenu index="3-4">-->
<!--        <template slot="title">选项4</template>-->
<!--        <el-menu-item index="3-4-1">选项4-1</el-menu-item>-->
<!--      </el-submenu>-->
<!--    </el-submenu>-->
  </el-menu>
</template>

<script>
export default {
  name: "Asideuser",
  props: {
    isCollapse: Boolean,
    logoTextshow: Boolean
  },
  methods: {
    handleSelect() {

    }
  }
}
</script>

<style scoped>

</style>
