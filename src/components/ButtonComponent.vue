<template>
  <button
      v-editable="blok"
      @click="redirectTo(blok.redirect.url)"
      class="
      bg-green-500
      hover:bg-green-700
      text-white
      font-bold
      py-2
      px-4
      rounded
      border-none
    "
  >
    {{ blok.label }}
  </button>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class ButtonComponent extends Vue {
  @Prop() blok!: {
    redirect: {
      url: null
    }
    label: null
  };

  redirectTo(link: string): void {
    window.location.href = link;
  }
}
</script>

<style scoped></style>
