<template>

<section id="button-upload">
  <div class="columns is-mobile is-multiline is-centered">
    <div class="column is-narrow">
      <div class="file is-primary">
        <label class="file-label "> 
          <input type="file" 
          :disabled="isDeleteMode"  
          ref="imagesInput"
          class="file-input" 
          accept="image/*" 
          name="images" 
          @change="addImages" 
          multiple
          />
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
    
    <div class="column is-narrow" v-if="haveImage">
      <button
      class="button" 
      :class="deleteButtonStyle" 
      @click="toggleDeleteMode"
      >
      Delete images
      </button>
    </div>  
  </div>
</section>

<section id="images-preview">
  <div class="container is-centered">
    <div class="is-flex is-flex-wrap-wrap is-justify-content-center">
      <ImageCard
        v-for="(image, index) in images" 
        :key="index" 
        :img-src="imageToURL(image)" 
        :img-name="image.name" 
        :delete-mode="isDeleteMode" 
        @remove-image="removeImage(index)"
      />
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

import { CustomEventInput, UploadFilesEventTarget, HTMLFilesInputElement } from './utils/types';
import ImageCard from './ImageCard.vue';

export default defineComponent({
  name: 'ManipulateImages',
  components: {
    ImageCard
  },
  data() {
    return {
      images: [] as File[],
      isDeleteMode: false as boolean,
      deleteButtonStyle: {
        "is-primary": true,
        "is-danger": false
      } as {"is-primary": boolean; "is-danger": boolean},
      cardFadeOutStyle: {
        "fade-out": false
      }
    }
  },
  methods: {
    addImages(e: CustomEventInput<UploadFilesEventTarget>) {
      if (e.target) {
        // images
        for (const image of e.target.files) {
          this.images.push(image);
        }

        // clear path input in element
        const ref = this.$refs.imagesInput as HTMLFilesInputElement;
        ref.value = '';
      }
    },
    removeImage(deleteIndex: number) {
        if (this.images.length <= 1) {
          this.images = [];
        } else {
          this.images.splice(deleteIndex, 1);
        }
        // automatically exit delete mode if do not have image;
        if (this.images.length <= 0) {
         this.isDeleteMode = false;
        }
    },
    imageToURL(img: File) {
      return URL.createObjectURL(img);
    },
    toggleDeleteMode() {
      this.isDeleteMode = !this.isDeleteMode;
    }
  },
  emits: ['removeImage'],
  computed: {
    haveImage(): boolean {
      return this.images.length > 0;
    },
  },
  watch: {
    isDeleteMode: function(newIsDeleteMode: boolean): void {
      this.deleteButtonStyle["is-primary"] = !newIsDeleteMode;
      this.deleteButtonStyle["is-danger"] = newIsDeleteMode;
    }
  }
  
});

</script>

