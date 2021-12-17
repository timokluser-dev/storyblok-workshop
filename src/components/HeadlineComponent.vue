<template>
  <div v-editable="blok">
    <h1>{{ blok.text }}</h1>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class HeadlineComponent extends Vue {
  @Prop() blok!: {
    text: null
  };
}
</script>

<style scoped></style>
