<template>
  <div id="main">
    <!-- CDN PLUGIN -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
    />
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

    <!-- SHOPPING CART -->

    <div style="margin-left:10px; margin-top:15px; " class="text-left">
      <div style="text-align:center;">
        <b-button class="btn btn-info "
          
          id="show-btn"
          @click="$bvModal.show('cartModal')"
        >
          <i class="fas fa-shopping-cart"></i>   Giỏ hàng:
          <span class="badge badge-success">{{ cartItems.length}}</span>
          
        </b-button>

        <!-- MODAL SHOPPING CART -->
        <b-modal size="lg" id="cartModal" hide-footer>
          <template #modal-title>
            SHOPPING CART
          </template>
          <div class="d-block text-left">
            <shoppingCart :items="cartItems"></shoppingCart>
          </div>

          <b-button  class="mt-3 w-100" @click="sendData()">Check out</b-button>
        </b-modal>
      </div>
    </div>

    <!-- --------------------------- -->

    <!-- ITEM  -->
    <div class="overflow-auto">
      <b-row>
        <b-col
          style="           
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1050px;"
        >
          <div
            class="Menu-item"
            v-for="(item, index) in items.slice(
              8 * (currentPage - 1),
              8 * currentPage
            )"
            :key="index"
          >
            <b-card
              v-bind:img-src="item.url_img"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 17.4rem;"
              class="mb-2"
            >
              <b-card-text>
                <div>
                  <span @click="openModal(item)" v-b-modal.modal-center>
                    <strong>{{ item.title }}</strong>
                  </span>
                </div>

                <div class="money">
                  <span
                    style="font-size:13px;
             color: red;"
                    ><strong>
                      <i class="bi bi-arrow-return-right"></i>
                      {{ ((item.priece * (100 - item.sale)) / 100) | dauCham }}
                      đ</strong
                    ></span
                  >
                  <span
                    style="font-size:13px;
            color:grey;"
                  >
                    <del>{{ item.priece | dauCham }} đ</del></span
                  >
                </div>
              </b-card-text>
              <button @click="addToCart(item)"  class=" btn btn-primary"
                ><i class="fas fa-shopping-cart"></i> Thêm giỏ hàng</button>
                
              <i
                :class="{ click: item.isChecked }"
                @click="item.isChecked = !item.isChecked"
                class="bi bi-bookmark-heart"
              ></i>
            </b-card>
          </div>

          <!-- MODEL CHI TIET SP -->
          <b-modal
            v-if="modalVisible"
            @close="modalVisible = false"
            :data="modalData"
            id="modal-center"
            centered
            size="xl"
            title="Chi tiết sản phẩm"
          >
            <!--Section: Block Content-->
<section class="mb-5">

  <div class="row">
    <div class="col-md-6 mb-4 mb-md-0">

      <div id="mdb-lightbox-ui"></div>

      <div class="mdb-lightbox">

        <div class="row product-gallery mx-1">

          <div class="col-12 mb-0">
            <figure class="view overlay rounded z-depth-1 main-img">
              <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                data-size="710x823">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                  class="img-fluid z-depth-1">
              </a>
            </figure>
            <figure class="view overlay rounded z-depth-1" style="visibility: hidden;">
              <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                data-size="710x823">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                  class="img-fluid z-depth-1">
              </a>
            </figure>
            <figure class="view overlay rounded z-depth-1" style="visibility: hidden;">
              <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                data-size="710x823">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                  class="img-fluid z-depth-1">
              </a>
            </figure>
            <figure class="view overlay rounded z-depth-1" style="visibility: hidden;">
              <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                data-size="710x823">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                  class="img-fluid z-depth-1">
              </a>
            </figure>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-3">
                <div class="view overlay rounded z-depth-1 gallery-item">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                    class="img-fluid">
                  <div class="mask rgba-white-slight"></div>
                </div>
              </div>
              <div class="col-3">
                <div class="view overlay rounded z-depth-1 gallery-item">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                    class="img-fluid">
                  <div class="mask rgba-white-slight"></div>
                </div>
              </div>
              <div class="col-3">
                <div class="view overlay rounded z-depth-1 gallery-item">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                    class="img-fluid">
                  <div class="mask rgba-white-slight"></div>
                </div>
              </div>
              <div class="col-3">
                <div class="view overlay rounded z-depth-1 gallery-item">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                    class="img-fluid">
                  <div class="mask rgba-white-slight"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
    <div class="col-md-6">

      <h5>Fantasy T-shirt</h5>
      <p class="mb-2 text-muted text-uppercase small">Shirts</p>
      <ul class="rating">
        <li>
          <i class="fas fa-star fa-sm text-primary"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-primary"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-primary"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-primary"></i>
        </li>
        <li>
          <i class="far fa-star fa-sm text-primary"></i>
        </li>
      </ul>
      <p><span class="mr-1"><strong>$12.99</strong></span></p>
      <p class="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit
        error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio,
        officia quis dolore quos sapiente tempore alias.</p>
      <div class="table-responsive">
        <table class="table table-sm table-borderless mb-0">
          <tbody>
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Model</strong></th>
              <td>Shirt 5407X</td>
            </tr>
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Color</strong></th>
              <td>Black</td>
            </tr>
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Delivery</strong></th>
              <td>USA, Europe</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr>
      <div class="table-responsive mb-2">
        <table class="table table-sm table-borderless">
          <tbody>
            <tr>
              <td class="pl-0 pb-0 w-25">Quantity</td>
              <td class="pb-0">Select size</td>
            </tr>
            <tr>
              <td class="pl-0">
                <div class="def-number-input number-input safari_only mb-0">
                  <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                    class="minus"></button>
                  <input class="quantity" min="0" name="quantity" value="1" type="number">
                  <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                    class="plus"></button>
                </div>
              </td>
              <td>
                <div class="mt-1">
                  <div class="form-check form-check-inline pl-0">
                    <input type="radio" class="form-check-input" id="small" name="materialExampleRadios"
                      checked>
                    <label class="form-check-label small text-uppercase card-link-secondary"
                      for="small">Small</label>
                  </div>
                  <div class="form-check form-check-inline pl-0">
                    <input type="radio" class="form-check-input" id="medium" name="materialExampleRadios">
                    <label class="form-check-label small text-uppercase card-link-secondary"
                      for="medium">Medium</label>
                  </div>
                  <div class="form-check form-check-inline pl-0">
                    <input type="radio" class="form-check-input" id="large" name="materialExampleRadios">
                    <label class="form-check-label small text-uppercase card-link-secondary"
                      for="large">Large</label>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button type="button" class="btn btn-primary btn-md mr-1 mb-2">Buy now</button>
      <button type="button" class="btn btn-light btn-md mr-1 mb-2"><i
          class="fas fa-shopping-cart pr-2"></i>Add to cart</button>
    </div>
  </div>

</section>
<!--Section: Block Content-->
          </b-modal>
        </b-col>
      </b-row>

      <!-- PAGINATION -->
      <b-row>
        <b-pagination
          style="margin-left: 10px;
      display: flex;
    justify-content: center"
          v-model="currentPage"
          :total-rows="Math.ceil(items.length / 8)"
          :per-page="perPage"
          :items="items"
          aria-controls="my-list"
        ></b-pagination>
      </b-row>
    </div>
  </div>
</template>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.js"
  integrity="sha512-otOZr2EcknK9a5aa3BbMR9XOjYKtxxscwyRHN6zmdXuRfJ5uApkHB7cz1laWk2g8RKLzV9qv/fl3RPwfCuoxHQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>
<!-- MDB -->
<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.js"
></script>
<script src="https://cdn.jsdelivr.net/vuejs-paginator/2.0.0/vuejs-paginator.min.js"></script>
<script>
import shoppingCart from "./shoppingCart.vue";

export default {
  data: () => {
    return {
      pageArr: [],
      cartItems: [],
      items: [],
      cartItems: [],
      perPage: 1,
      currentPage: 1,
      modalVisible: false,
      modalData: null,
    };
  },

  components: {
    shoppingCart,
  },
  mounted() {},
  async created() {
    const response = await axios.get("https://localhost:44314/api/Items");
    this.items = response.data;
  },
  methods: {
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },

    addToCart(itemToAdd) {
      let found = false;

      // Add the item or increase qty
      let itemInCart = this.cartItems.filter(
        (item) => item.id === itemToAdd.id
      );
      let isItemInCart = itemInCart.length > 0;

      if (isItemInCart === false) {
        this.cartItems.push(Vue.util.extend({}, itemToAdd));
      } else {
        itemInCart[0].qty += itemToAdd.qty;
      }

      itemToAdd.qty = 1;
    },
    sendData() {
      this.$router.push({ name: "Checkout", params: { item: this.cartItems } });
    },

    openModal(data) {
      this.modalData = data;
      this.modalVisible = true;
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
  margin: 0;
  padding: 0;
}
body{
  font-family: Arial, Helvetica, sans-serif;
}
.row {
  text-align: center;
  display: flex;
  justify-content: center;
  max-width: 99%;
}
.money span {
  margin: 5px;
}
.submit {
  margin: 5px;
}
.Menu-item {
  display: block;
  float: left;
  margin: 10px;
}
#app {
  width: 70%;
  height: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.hover-zoomin img {
  border-radius: 20px 5px;
  width: 100%;
  height: auto;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
.hover-zoomin:hover img {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.bi-bookmark-heart {
  font-size: 20px;
  float: right;
}
.bi-bookmark-heart:hover {
  cursor: pointer;
}
.click {
  color: red;
}
</style>
