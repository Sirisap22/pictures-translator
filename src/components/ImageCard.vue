<template>
<div class="card image-size">
  <div v-if="deleteMode" class="card-header is-flex is-justify-content-flex-end">
    <button @click="$emit('removeImage')" class="delete is-large delete-btn"></button>
  </div>
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

<style lang="css" scoped>
.image-size {
  height: 30%;
  width: 30%;
  margin: 5px;
}

.delete-btn {
  margin: 5px;
}

@media (max-width: 1024px) {
  .image-size {
    height: 45%;
    width: 45%;
    margin: 5px;
  }
}

@media (max-width: 480px) {
  .image-size {
    height: 100%;
    width: 100%;
    margin: 10px;
  }
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
    imgName: String,
    deleteMode: Boolean
  }
  })
  
</script>