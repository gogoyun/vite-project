<template>
  <div class="container" style="width: 520px">
    <h1>Week 01 | 餐點管理工具</h1>
    <p>Level 3（挑戰）：可以重新設定品項名稱</p>
  </div>
  <div class="container middle">
    <table>
      <thead>
        <tr>
          <th scope="col">品項</th>
          <th scope="col">描述</th>
          <th scope="col">價格</th>
          <th scope="col">庫存</th>
          <th scope="col">管理</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td>{{ item.name }}</td>
          <td>
            <small>{{ item.description }}</small>
          </td>
          <td>{{ item.price }}</td>
          <td class="qty">
            <button @click="item.qty--">-</button>{{ item.qty
            }}<button @click="item.qty++">+</button>
          </td>
          <td>
            <button @click="editItem(item)">編輯</button>
            <button @click="delItem(item)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="edit">
      <div v-if="startEdit">
        品項<input type="text" v-model="editTemp.name" />
        描述<input type="text" v-model="editTemp.description" />
        價格<input type="number" v-model="editTemp.price" />
        <button @click="saveItem()">儲存</button>
        <button @click="cancel">取消</button>
      </div>
      <div v-else><button type="button" @click="editItem()">新增一筆</button></div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const data = ref([
  {
    id: 1,
    name: '珍珠奶茶',
    description: '香濃奶茶搭配QQ珍珠',
    price: 50,
    qty: 20
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    description: '清新冬瓜配上新鮮檸檬',
    price: 45,
    qty: 18
  },
  {
    id: 3,
    name: '翡翠檸檬',
    description: '綠茶與檸檬的完美結合',
    price: 55,
    qty: 34
  },
  {
    id: 4,
    name: '四季春茶',
    description: '香醇四季春茶，回甘無比',
    price: 45,
    qty: 10
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    description: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50,
    qty: 25
  },
  {
    id: 6,
    name: '檸檬冰茶',
    description: '檸檬與冰茶的清新組合',
    price: 45,
    qty: 20
  },
  {
    id: 7,
    name: '芒果綠茶',
    description: '芒果與綠茶的獨特風味',
    price: 55,
    qty: 18
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    description: '抹茶與鮮奶的絕配',
    price: 60,
    qty: 20
  }
])
const editTemp = ref({})
const startEdit = ref(false)
const editItem = (item={}) => {
  startEdit.value = true
  editTemp.value = (item) ? { ...item } : {}
}
const delItem = (del) => {
  const index = data.value.findIndex((item) => item.id === del.id)
  data.value.splice(index, 1)
}
const saveItem = () => {
  if (editTemp.value.id){
    const index = data.value.findIndex((item) => item.id === editTemp.value.id)
    data.value[index] = editTemp.value
  }else{
    editTemp.value.id = new Date().getTime()
    editTemp.value.qty = 0
    data.value.push(editTemp.value)
  }
  
  editTemp.value = {}
}
const cancel = () => {
  startEdit.value = false
  editTemp.value = {}
}
</script>
<style>
.middle {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
table {
  width: 100%;
  text-align: center;
  border: 1px solid #ccc;
  border-spacing: 0;
}
th,
td {
  border-bottom: 1px solid #ccc;
}
td {
  padding: 10px 0;
}
button,
input {
  margin: 0 2px;
}
.edit {
  margin: 20px 0;
  min-height: 50px;
}
.hide {
  display: none;
}
</style>
