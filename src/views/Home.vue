<template>
  <div class="home">
    <ManipulateImages />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ManipulateImages from '@/components/ManipulateImages.vue';

export default defineComponent({
  name: 'Home',
  components: {
    ManipulateImages
  },
});
</script>
