<template>
  <div v-editable="blok" v-html="richtext"></div>
</template>

<script lang="ts">
import {Component, Inject, Prop, Vue} from 'vue-property-decorator';
import {Richtext as StoryblokRichtext, RichtextInstance} from "storyblok-js-client";

@Component
export default class RichtextComponent extends Vue {
  @Prop() blok!: {
    richtext_content: StoryblokRichtext
  };

  @Inject() richTextResolver!: RichtextInstance;

  get richtext() {
    return this.richTextResolver.render(this.blok.richtext_content);
  }

  getComponent(item: any) {
    if (item.type === 'heading') {
      return 'h1';
    } else {
      return 'p';
    }
  }

  getClass(classArray: any) {
    let applyClass;
    if (classArray.marks) {
      classArray.marks.map((item: any) => {
        switch (item.type) {
          case 'bold':
            applyClass = 'font-bold';
            break;
          case 'italic':
            applyClass = 'italic';
            break;
          default:
            applyClass = '';
            break;
        }
      });
    }
    return applyClass;
  }
}
</script>

<style scoped></style>
