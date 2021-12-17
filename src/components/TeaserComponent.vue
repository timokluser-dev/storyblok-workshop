<template>
  <div class="teaser">
    <div class="teaser__inner bg-green-100">
      <h1>{{ blok.headline }}</h1>
      <h2>{{ blok.subtitle }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class TeaserComponent extends Vue {
  @Prop() blok!: {
    headline: null,
    subtitle: null
  };
}
</script>

<style scoped></style>
