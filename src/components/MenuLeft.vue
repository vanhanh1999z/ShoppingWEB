<template>
  <div>
    <b-navbar type="light" variant="light">
        <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
        <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-navbar>

    <b-list-group> 
      <b-list-group-item>
        <h3> ÁO PHÔNG </h3>
        <b-form-checkbox-group
          id="checkbox-1"
          v-model="selected"  
          name="checkbox-1"
          :options="options1"
          class="mb-3 justify-content-center"
          value-field="item"
          text-field="name"
          disabled-field="notEnabled"
        ></b-form-checkbox-group>
      </b-list-group-item>

      <b-list-group-item>
        <h3> ÁO SƠ MI </h3>
        <b-form-checkbox-group
          id="checkbox-2"
          v-model="selected"
          name="checkbox-2"
          :options="options2"
          class="mb-3"
          value-field="item"
          text-field="name"
          disabled-field="notEnabled"
        ></b-form-checkbox-group>
      </b-list-group-item>

      <b-list-group-item>
        <h3> QUẦN ÂU </h3>
        <b-form-checkbox-group
          id="checkbox-3"
          v-model="selected"
          name="checkbox-3"
          :options="options3"
          class="mb-3"
          value-field="item"
          text-field="name"
          disabled-field="notEnabled"
        ></b-form-checkbox-group>
      </b-list-group-item>     
      </b-list-group>
      &nbsp;
      <b-button-group>
      <b-dropdown right text="Giá Tiền">
        <b-dropdown-item>Item 1</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Item 2</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Item 3</b-dropdown-item>
      </b-dropdown>
      <b-dropdown right text="Màu Sắc">
        <b-dropdown-item>Item 1</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Item 2</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Item 3</b-dropdown-item>
      </b-dropdown>
      <b-dropdown right split text="Giới Tính">
        <b-dropdown-item>Item 1</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Item 2</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Item 3</b-dropdown-item>
      </b-dropdown>
    </b-button-group>
  </div>
</template>

<script>
  export default {
    el: 'checkbox-1',
    data() {
      return {
        selected: [],
        options1: [
          { item: 'A', name: 'Option A' },
          { item: 'B', name: 'Option B' },
          { item: 'C', name: 'Option C' },
          { item: 'D', name: 'Option D' }
        ],
        options2: [
          { item: 'E', name: 'Option E' },
          { item: 'F', name: 'Option F' },
          { item: 'G', name: 'Option G' },
          { item: 'H', name: 'Option H' }
        ],
        options3: [
          { item: 'I', name: 'Option I' },
          { item: 'K', name: 'Option K' },
          { item: 'M', name: 'Option M' },
          { item: 'L', name: 'Option L' }
        ]

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .mr-sm-2 {
    width:80% ;
    margin-right: 8px;
  }
  .my-2 my-sm-0 {
    width:30% ;
  }
  #b-button-group{
    width: 50%;
  }
</style>
