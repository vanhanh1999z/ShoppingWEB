<template>
  <div class="shoppingCart">
       <div>
                      <b-table striped hover :items="items" :fields="fields">
                        <template #cell(name)="data">
                          <b >{{data.item.title}}</b>
                        </template>
                        <template #cell(newCash)="data">
                        <b>{{data.item.priece | dauCham}} VNĐ</b>
                        </template>
                        <template #cell(qty)="data">
                          <input v-model="data.item.qty" class="form-control input-qty" type="number">
                        </template>
                        <template #cell(total)="data">
                          <b>{{data.item.qty*data.item.priece | dauCham}} VNĐ</b>
                        </template>
                        <template #cell(del)= "data">
                          <b-button style="color:white" variant="danger" @click="removeItem(data.item.title)">Xóa</b-button>
                        </template>
                      </b-table>
                      <span class="text-primary "><strong>Tổng tiền: {{Total | dauCham}} VNĐ</strong></span>
                      
                  </div>
  </div>
</template>

<script>
export default {
  props:[
    'items'
  ],
  data: ()=>{
    return{
      fields: [{key:'Name', label:'Tên'}, {key:'newCash', label:'Giá tiền'}, {key:'qty', label:'Số lượng'}, {key:'total', label:'Tổng tiền'},{key:'del',label:'Xóa'}],
    }
  },

  computed: {
    Total() {
      let total = 0;
      this.items.forEach(item => {
        total += (item.priece * item.qty);
      });
      return total;
    }
  },

  methods: {
		// Remove item by its index
    removeItem(index) {
      this.items.splice(index, 1)
    }
  },
  filters: {
    dauCham: function(soTien) {
      return soTien.toLocaleString('it-IT');
      
  }}
}
</script>

<style>
*{
  font-family:Arial, Helvetica, sans-serif;
  font-size: 13px;
}
</style>