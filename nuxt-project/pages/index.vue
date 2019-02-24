<template>
  <section class="container">
      <h1 class="title">I'm Title</h1>

      <div class="item-grid">

        <div v-for="item in items" :key="item.id">
          <Thing :itemdata="item"/>
        </div>

      </div>


  </section>
</template>

<script>
import MYDATA from '../data/index.json';
import Thing from '@/components/Thing';

export default {
  components: {
    Thing
  },
  data() {
    return {
      items: MYDATA
    }
  }
};
</script>

<style>

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  text-align: center;
}

.item-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.thing {
  background: #ccc;
  padding: 20px;
  margin: 20px;
}
</style>

