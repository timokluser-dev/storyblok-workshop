<template>
  <div v-editable="blok" class="image-component">
    <img
        :src="blok.src.filename"
        :alt="blok.altText"
        :width="blok.width"
        :height="blok.height"
    />
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class ImageComponent extends Vue {
  @Prop() blok!: {
    src: {
      filename: null
    },
    altText: null,
    width: null,
    height: null
  };
}
</script>

<style scoped></style>
