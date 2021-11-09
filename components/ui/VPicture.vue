<template>
  <picture
    ><source :srcset="image.src.desktop" media="(min-width: 1024px)" />
    <source :srcset="image.src.tablet" media="(min-width: 768px)" />
    <source :srcset="image.src.mobile" media="(min-width: 300px)" />
    <img
      :src="image.src.desktop"
      :alt="image.alt"
      :width="image.dimensions.width"
      :height="image.dimensions.height"
      loading="lazy"
      class="w-full"
  /></picture>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
});
</script>
