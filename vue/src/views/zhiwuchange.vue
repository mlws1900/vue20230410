<template>
  <div>

    <div style="padding: 10px 0">
      <el-input style="width: 200px;" placeholder="请输入名称" v-model="name" :disabled="false"></el-input>
      <el-button style="margin-left: 10px" type="primary" @click="load">查看</el-button>
    </div>

    <el-table :data="tableData" border stripe header-cell-class-name="headerBg">
      <el-table-column prop="owner" label="作者" width="140">
      </el-table-column>
      <el-table-column prop="name" label="植物" width="120">
      </el-table-column>
      <el-table-column prop="type" label="植物科名">
      </el-table-column>
      <el-table-column prop="time" label="上传时间">
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <el-button type="success" @click="handleEdit(scope.row)">修 改 <i class="el-icon-edit"></i></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="padding: 10px 0">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNum"
          :page-sizes="[2, 5, 10, 15]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
      </el-pagination>
    </div>

    <el-dialog title="信息" :visible.sync="dialogFormVisible">
      <el-form label-width="120px" size="small">
        <el-form-item label="作者">
          <el-input v-model="form.owner" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="植物名称">
          <el-input v-model="form.name" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="科名">
          <el-input v-model="form.type" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="植物介绍">
          <!--          <el-input v-model="form.introduce" autocomplete="off"></el-input>-->
          <el-input
              type="textarea"
              :rows="5"
              v-model="form.description">
          </el-input>
        </el-form-item>
        <el-form-item label="植物高度（cm）">
          <el-input v-model="form.height" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="植物宽度（cm）">
          <el-input v-model="form.width" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="植物长度（cm）">
          <el-input v-model="form.length" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="植物重量（kg）">
          <el-input v-model="form.weight" autocomplete="off" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="save" :disabled="disabled">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "Guanlibanquan",
  data() {
    return{
      tableData: [],
      total: 0,
      pageNum: 1,
      pageSize: 2,
      name: "",
      form: {},
      dialogFormVisible: false,
      dialogFormVisible1: false,
      headerBg: 'headerBg',
      temp: "",
      owner:"",
      disabled: false,
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) :{},
      url: "",
      id:"",
      form1:{},
      temp1:""
    }
  },
  created() {
    this.request.get("http://localhost:9091/user1/username/" + this.user.owner).then(res => {
      this.name = res.name
    })
  },
  methods: {
    load() {
      this.request.get("http://localhost:9091/banquan/page?pageNum="+this.pageNum+"&pageSize="+this.pageSize+"&name="+ this.name).then(res => {
        this.tableData = res.records
        this.total = res.total
      })
    },
    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.load()
    },
    handleCurrentChange(pageNum) {
      this.pageNum = pageNum
      this.load()
    },
    handleAdd() {
      this.dialogFormVisible = true
      this.form = {}
    },
    save() {
      this.request.post("http://localhost:9091/banquan", this.form).then(res => {
        if(res) {
          this.shangchuan(this.form)
          // this.$message.success("保存成功")
          this.dialogFormVisible = false
          this.load()
        }else {
          this.$message.error("保存失败")
        }
      })
    },
    handleEdit(row) {
      // console.log(row.id)
      this.form = row
      if(this.form.url === null) {
        this.disabled = true
      }else{
        this.disabled = false
      }
      this.dialogFormVisible = true
    },
    shangchuan(form) {
      form.key = form.id + ""
        this.request.post("http://localhost:8081/cat/update", form).then(res => {
          if(res.status === "ok") {
            this.$message.success("信息修改成功")
            this.dialogFormVisible = false
            this.disabled = false
            this.load()
          }else {
            this.$message.error("保存失败")
          }
        })
    },
  }
}
</script>

<style>
.headerBg {
  background: #eee!important;
}
</style>

