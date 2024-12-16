<template>
  <div>
    <!-- 三级分类 -->
    <Category :scene="scene"></Category>
    <el-card style="margin: 10px 0px">
      <el-button type="primary" size="default" icon="Plus">添加SPU</el-button>
      <!-- 表格 -->
      <el-table border style="margin: 10px 10px" :data="records">
        <el-table-column
          label="序号"
          type="index"
          align="center"
          width="80px"
        ></el-table-column>
        <el-table-column label="SPU名称" prop="spuName"></el-table-column>
        <el-table-column
          label="SPU描述"
          prop="description"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column label="SPU操作">
          <!-- row:即为已有的SPU对象 -->
          <template #="{ row, $index }">
            <el-button
              type="primary"
              size="small"
              icon="Plus"
              title="添加SKU"
            ></el-button>
            <el-button
              type="primary"
              size="small"
              icon="Edit"
              title="修改SPU"
            ></el-button>
            <el-button
              type="primary"
              size="small"
              icon="View"
              title="查看SKU列表"
            ></el-button>
            <el-popconfirm :title="`你确定删除${row.spuName}?`" width="200px">
              <template #reference>
                <el-button
                  type="primary"
                  size="small"
                  icon="Delete"
                  title="删除SPU"
                ></el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <el-pagination
        v-model:current-page="pageNo"
        v-model:page-size="pageSize"
        :page-sizes="[3, 5, 7, 9]"
        :background="true"
        layout=" prev, pager, next, jumper,->,total, sizes,"
        :total="400"
      />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
//场景数据
let scene = ref<number>(0)
//分页器默认页码
let pageNo = ref<number>(1)
//每一页展示几条数据
let pageSize = ref<number>(3)
</script>
<style lang="scss" scoped></style>
