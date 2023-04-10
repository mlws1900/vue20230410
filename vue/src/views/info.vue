<template>
  <div>
    <el-card style="width: 500px; padding: 20px;">
      <el-form label-width="120px" size="small"  class="rt-input">
        <el-form-item label="用户名">
          <el-input v-model="form.username" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="权限">
          <el-input v-model="form.permission" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="藏品数">
          <el-input v-model="form.collectionamount" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "User-information",
  data() {
    return {
      form: {},
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) :{},
      disabled: true
    }
  },
  created() {
    this.request.get("http://localhost:9091/user1/username/" + this.user.username).then(res => {
      if(res.name != null) {
        this.form = res
      }else{
        this.form = res
        this.disabled = false
      }

    })
  },
  methods: {
    save() {
      this.request.post("http://localhost:9091/user1", this.form).then(res => {
        if(res) {
          this.$message.success("保存成功")
        }else {
          this.$message.error("保存失败")
        }
      })
    }
  }
}
</script>

<style scoped>
.rt-input /deep/ .el-input__inner {
  color: rgb(20, 20, 21) !important;
  cursor: pointer;
}
</style>
