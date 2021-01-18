<template>
<section id="button-upload">
  <div class="columns is-mobile is-centered">
    <div class="file is-primary">
      <label class="file-label "> 
        <input type="file" class="file-input" accept="image/*" name="images" @change="addImages" multiple/>
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
  <div class="container">
    <div class="is-flex is-flex-wrap-wrap is-justify-content-center">
      <ImageCard v-for="(image, index) in images" :key="index" :img-src="imageToURL(image)" :img-name="image.name"/>
    </div>
  </div>
</section>
</template>

<style scoped>
.custom-width {
  width: 195.86px;
}
#images-preview {
  margin-top: 20px;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

import { CustomEventInput, UploadFilesEventTarget } from './utils/types';
import ImageCard from './ImageCard.vue';

export default defineComponent({
  name: 'ManipulateImages',
  components: {
    ImageCard
  },
  data() {
    return {
      images: [] as File[],
    }
  },
  methods: {
    addImages(e: CustomEventInput<UploadFilesEventTarget>) {
      if (e.target) {
        // images
        for (const image of e.target.files) {
          this.images.push(image);
        }
      }
    },
    removeImage(deleteIndexs: number[]) {
      for (const index of deleteIndexs) {
        this.images.splice(index, 1);
      }
    },
    imageToURL(img: File) {
      return URL.createObjectURL(img);
    }
  },
  
});
</script>

