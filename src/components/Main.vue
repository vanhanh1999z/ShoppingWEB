<template>
  <div id="main">
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

    <!-- SHOPPING CART -->

    <div style="margin-left:10px; margin-top:15px;" class="text-left">
      <div>
        <b-button
          style="background-color:#008ba7;
          border:#008ba7;"
          id="show-btn"
          @click="$bvModal.show('cartModal')"
        >
          <i style="font-size:16px;" class="bi bi-cart"></i> Giỏ hàng:
          <b-badge style="background:white; color:#008ba7" variant="light"
            >{{ cartItems.length
            }}<span class="sr-only">unread messages</span></b-badge
          >
        </b-button>

        <!-- MODAL SHOPPING CART -->
        <b-modal id="cartModal" hide-footer>
          <template #modal-title>
            SHOPPING CART
          </template>
          <div class="d-block text-left">
            <shoppingCart :items="cartItems"></shoppingCart>
          </div>

          <b-button v-b-modal.my-modal class="mt-3 w-25 btn-info text-white"
            ><router-link to="/check-out"
              ><strong>Checkout</strong></router-link
            ></b-button
          >
          <b-modal id="my-modal">Hello From My Modal!</b-modal>
          <b-button
            class="mt-3 w-100"
            style="background:#008ba7"
            block
            @click="$bvModal.hide('cartModal')"
            ><strong>Close Me</strong></b-button
          >
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
    align-items: center;"
        >
          <div
            class="Menu-item"
            v-for="(item, index) in items.slice(
              6 * (currentPage - 1),
              6 * currentPage
            )"
            :key="index"
          >
            <b-card
              v-bind:title="item.Name"
              v-bind:img-src="item.url_img"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 17.4rem;"
              class="mb-2"
            >
              <b-card-text>
                <div class="money">
                  <span
                    style="font-size:13px;
             color: red;"
                    ><strong>
                      <i class="bi bi-arrow-return-right"></i>
                      {{ ((item.newCash * (100 - item.sale)) / 100) | dauCham }}
                      đ</strong
                    ></span
                  >
                  <span
                    style="font-size:13px;
            color:grey;"
                  >
                    <del>{{ item.newCash | dauCham }} đ</del></span
                  >
                </div>
              </b-card-text>

              <b-button @click="addToCart(item)" variant="primary"
                ><i class="bi bi-cart-plus" style="font-size:16px;"></i> Thêm
                giỏ hàng</b-button
              >
              <i
                :class="{click: item.isClicked}"
                @click="item.isClicked= !item.isClicked"
                class="bi bi-bookmark-heart"
              ></i>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </div>

    <!-- PAGINATION -->
    <b-pagination
      style="margin-left: 10px;"
      v-model="currentPage"
      :total-rows="Math.ceil(items.length / 6)"
      :per-page="perPage"
      :items="items"
      aria-controls="my-list"
    ></b-pagination>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/vuejs-paginator/2.0.0/vuejs-paginator.min.js"></script>
<script>
import json from "../assets/data.json";
import shoppingCart from "./shoppingCart.vue";

export default {
  data: () => {
    return {
      pageArr: [],
      cartItems: [],
      items: json,
      cartItems: [],
      perPage: 1,
      currentPage: 1,
    };
  },

  components: {
    shoppingCart,
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
  },

  filters: {
    dauCham: function(soTien) {
      return soTien.toLocaleString("it-IT");
    },
  },
};
</script>

<style>
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
.click{
  color:red;
}
</style>
