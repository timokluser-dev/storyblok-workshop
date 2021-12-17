<template>
  <div>
    <component :blok="story.content" :is="story.content.component"></component>
  </div>
</template>

<script lang="ts">
import {Component, Inject, Vue} from 'vue-property-decorator';
import StoryblokClient from "storyblok-js-client";

@Component
export default class DynamicComponent extends Vue {
  @Inject() storyblokClient!: StoryblokClient;

  story = {
    content: {
      body: []
    }
  };

  constructor() {
    super();
  }

  mounted() {
    this.getStory();

    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
        // live edit
        window.storyblok.on("input", (payload) => {
          this.story = payload?.story
        })
      }
    })


  }

  async getStory() {
    await this.storyblokClient
        .get('cdn/stories/home', {
          version: 'draft'
        })
        .then(response => {
          console.log(response);
          this.story = response.data.story
        })
        .catch(error => {
          console.error(error);
        })
  }
}
</script>

<style scoped>
</style>
