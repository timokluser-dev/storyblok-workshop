<template>
  <div id="app">
    <DynamicComponent/>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Provide} from 'vue-property-decorator';
import DynamicComponent from './components/DynamicComponent.vue';
import StoryblokClient, {RichtextInstance, StoryblokConfig} from 'storyblok-js-client'

@Component({
  components: {
    DynamicComponent,
  },
})
export default class App extends Vue {
  private readonly storyblokConfig: StoryblokConfig = {
    accessToken: process.env.VUE_APP_STORYBLOK_PREVIEW_TOKEN
  };

  @Provide() storyblokClient: StoryblokClient = new StoryblokClient(this.storyblokConfig);
  @Provide() richTextResolver: RichtextInstance = this.storyblokClient.richTextResolver;

  created() {
    // used for visual editor
    window.storyblok.init(this.storyblokConfig)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
