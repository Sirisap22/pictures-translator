<template>
<section id="button-upload">
  <div class="container custom-width">
    <div class="file is-primary">
      <label class="file-label "> 
        <input type="file" class="file-input" name="image" @change="addImages" multiple/>
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload"></i>
          </span>
          <span class="file-label">
          Choose images...
          </span>
        </span>
      </label>
    </div>
  </div>
</section>

<section id="images-preview">
  <figure v-for="(imgSrc, index) in imagesUrl" class="image image-size" :key="index">
    <img :src="imgSrc"/>
  </figure>
</section>
</template>

<style scoped>
.custom-width {
  width: 195.86px;
}
.image-size {
  height: 10%;
  width: 10%;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { CustomEventInput, UploadFilesEventTarget } from './utils/types';

export default defineComponent({
  name: 'ManipulateImages',
  data() {
    return {
      images: [] as File[],
      imagesUrl: [] as string[]
    }
  },
  methods: {
    addImages(e: CustomEventInput<UploadFilesEventTarget>) {
      if (e.target) {
        // images
        for (const image of e.target.files) {
          this.images.push(image);
          this.imagesUrl.push(URL.createObjectURL(image));
        }
        console.log(e.target.files);
        

      }
    },
    removeImage(deleteIndexs: number[]) {
      for (const index of deleteIndexs) {
        this.images.splice(index, 1);
        this.imagesUrl.splice(index, 1);
      }
    }
  }
  
});
</script>

