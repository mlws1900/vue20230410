<template>
  <div style="line-height: 60px;display: flex">
    <div style="flex: 1">
      <span :class="collapseBtnClass" style="cursor: pointer;font-size: 18px" @click="collapse"></span>
        <el-breadcrumb separator="/" style="display: inline-block;margin-left: 10px;">
          <el-breadcrumb-item :to="'/home'">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ currentPathName }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <el-dropdown style="width: 100px;cursor: pointer">
      <span>{{user.username}}</span><i class="el-icon-arrow-down" style="margin-left: 5px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>
          <span style="text-decoration: none" @click="logout">退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    collapseBtnClass: String,
    collapse: Function,
  },
  computed: {
    currentPathName () {
      return this.$store.state.currentPathName;
    }
  },
  data() {
    return {
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) :{}
    }
  },
  watch: {
    currentPathName (newVal, oldVal) {
      console.log(newVal)
    }
  },
  methods: {
    logout() {
      this.$router.push("/")
      localStorage.removeItem("user")
      this.$message.success("退出成功")
    }
  }
}
</script>

<style scoped>

</style>
