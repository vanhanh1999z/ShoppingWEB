<template>
  <div class="label-align">
    <span>
      <strong>Checkout</strong>
    </span><br>
    <span> Subtotal: {{ cash }}</span><br>
    <span>Tax: $0.97</span><br>
    <span>Total: ${{ total }}</span><br>

    This is where our payment processor goes
  </div>
</template>

<script>
export default {
  props: ["cash", "total"],
};
</script>

<style></style>
