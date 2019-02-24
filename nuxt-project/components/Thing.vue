<template>
  <div class="thing">
    <nuxt-link :to="'/item/'+item.id">
      <h2>{{ item.id }}</h2>
    </nuxt-link>
  </div>

</template>

<script>
  export default {
    props: {
      itemdata: {
        type: Object
      },
    },
    data() {
      return {
        item: this.itemdata
      }
    }
  };
</script>

<style>
</style>
