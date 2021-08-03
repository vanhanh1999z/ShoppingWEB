<template>
  <div class="checkout">
    <h1>SHOPPING</h1>
    <!-- CDN PLUGIN -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
    />
    <!-- Font Awesome -->
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      rel="stylesheet"
    />
    <!-- Google Fonts -->
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      rel="stylesheet"
    />
    <!-- MDB -->
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css"
      rel="stylesheet"
    />

<div class="container">
      <div class="contentbar">
        <!-- Start row -->
        <div class="row">
          <!-- Start col -->
          <div class="col-md-12 col-lg-12 col-xl-12">
            <div class="card m-b-30">
              <div class="card-header">
                <h4 class="card-title">SHOPPING CART</h4>
              </div>
              <div class="card-body">
                <div class="row justify-content-center">
                  <div class="col-lg-10 col-xl-8">
                    <div class="cart-container">
                      <div class="cart-head">
                        <div class="table-responsive">
                          <div>
                            <table class="table table-borderless">
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Xóa</th>
                                  <th scope="col">Ảnh sản phẩm</th>
                                  <th scope="col">Tên sản phẩm</th>
                                  <th scope="col">Số lượng</th>
                                  <th scope="col">Giá tiền</th>
                                  <th scope="col" class="text-right">Tổng</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="(item, index) in items" :key="index">
                                  <th scope="row">{{ index + 1 }}</th>
                                  <td>
                                    <a
                                      @click="removeItem(item.title)"
                                      class="text-danger"
                                      ><i class="ri-delete-bin-3-line"></i
                                    ></a>
                                  </td>
                                  <td>
                                    <img
                                      v-bind:src="item.url_img"
                                      class="img-fluid"
                                      width="35"
                                      alt="product"
                                    />
                                  </td>
                                  <td>{{ item.title }}</td>
                                  <td>
                                    <div class="form-group mb-0">
                                      <input
                                        v-model="item.qty"
                                        class="form-control input-qty"
                                        type="number"
                                      />
                                    </div>
                                  </td>
                                  <td>{{ item.priece | dauCham }}</td>
                                  <td class="text-right">
                                    {{ (item.qty * item.priece) | dauCham }} VNĐ
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div class="cart-body">
                        <div class="row">
                          <div
                            class="col-md-12 order-2 order-lg-1 col-lg-5 col-xl-6"
                          >
                            <div class="order-note">
                              <form>
                                <div class="form-group">
                                  <div class="input-group">
                                    <input
                                      type="search"
                                      class="form-control"
                                      placeholder="Nhập mã giảm giá..."
                                      aria-label="Search"
                                      aria-describedby="button-addonTags"
                                    />
                                    <div class="input-group-append">
                                      <button
                                        class="input-group-text"
                                        type="submit"
                                        id="button-addonTags"
                                      >
                                        Áp dụng
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label for="specialNotes">Ghi chú:</label>
                                  <textarea
                                    class="form-control"
                                    name="specialNotes"
                                    id="specialNotes"
                                    rows="3"
                                    placeholder="Vui lòng nhập ghi chú..."
                                  ></textarea>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div
                            class="col-md-12 order-1 order-lg-2 col-lg-7 col-xl-6"
                          >
                            <div class="order-total table-responsive ">
                              <table class="table table-borderless text-right">
                                <tbody>
                                  <tr>
                                    <td>Tổng cộng</td>
                                    <td>{{ Total | dauCham }} VNĐ</td>
                                  </tr>
                                  <tr>
                                    <td>Tiền ship :</td>
                                    <td>0 VNĐ</td>
                                  </tr>
                                  <tr>
                                    <td>VAT :</td>
                                    <td>
                                      {{ ((Total * 5) / 100) | dauCham }} VNĐ
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="f-w-7 font-18">
                                      <h4>Tổng cộng: :</h4>
                                    </td>
                                    <td class="f-w-7 font-18">
                                      <h4>
                                        {{
                                          (Total + (Total * 5) / 100) | dauCham
                                        }}
                                        VNĐ
                                      </h4>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="cart-footer text-right">
                        
                        <a class="btn btn-info my-1 btn-rounded"
                          >Thanh Toán<i class="ri-arrow-right-line ml-2"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End col -->
        </div>
        <!-- End row -->
      </div>
    </div>
   
  </div>
</template>
<!-- MDB -->
<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.js"
></script>
<script>
export default {
  name: "Checkout",
  data: () => {
    return {
      items: [],
      fields: [
        { key: "Name", label: "Tên" },
        { key: "newCash", label: "Giá tiền" },
        { key: "qty", label: "Số lượng" },
        { key: "total", label: "Tổng tiền" },
        { key: "del", label: "Xóa" },
      ],
    };
  },
  created() {
    this.items = this.$route.params.item;
  },
  computed: {
    Total() {
      let total = 0;
      this.items.forEach((item) => {
        total += item.priece * item.qty;
      });
      return total;
    },
  },

  methods: {
    // Remove item by its index
    removeItem(index) {
      this.items.splice(index, 1);
    },
  },
  filters: {
    dauCham: function(soTien) {
      return soTien.toLocaleString("it-IT");
    },
  },
};
</script>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
}
body {
  background: #f4f5f7;
  margin-top: 50px;
}
.cart-container {
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 20px;
}
.cart-container .cart-body {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: 30px 0 20px;
  margin: 40px 0 30px;
}
</style>
