<template>
  <div color="#000">
    <h1>{{id}}</h1>
    <h2>{{value}}</h2>
  </div>
</template>

<script>
  import MYDATA from '../../data/index.json';
  function getItemById(id, items){
    const result = items.filter(item=>item.id===id);
    return result[0];
  }

  export default {

    async asyncData({params}){
      let myid = parseInt(params.id);
      console.log(myid,MYDATA);
      console.log('a');
      return getItemById(myid,MYDATA);
    }
  };
</script>

<style>


</style>
