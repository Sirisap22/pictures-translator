<template>
<div class="card image-size">
  <div class="card-image">
    <figure class="image">
      <img :src="imgSrc" alt="image">
    </figure>
  </div>
  <div class="card-content">
    <div class="content">
      {{ imgName }}
    </div>
  </div>
</div>
 
</template>

<style scoped>
.image-size {
  height: 30%;
  width: 30%;
  margin: 5px 5px 5px 5px;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImageCard',
  methods: {
   
  },
  props: {
    imgSrc: String,
    imgName: String
  }
  })
  
</script>