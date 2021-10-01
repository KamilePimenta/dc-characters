<template>
  <section :class="`home ${darkMode ? 'dark' : 'light'}`">
    <main>
      <Switch class="change-theme" title="Modo escuro" name="theme"/>
      <Splide :options="splideOptions">
        <SplideSlide v-for="character in characters" :key="character.name">
          <Card :data="character" :darkMode="darkMode"/>
        </SplideSlide>
      </Splide>
    </main>
  </section>
</template>
<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import Switch from '@/components/shared/Switch.vue';
import Card from '@/components/Card.vue';
import Characters from '@/data/characters.js';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
  name: 'Home',
  components: {
    Splide,
    SplideSlide,
    Switch,
    Card,
  },
  data() {
    return {
      characters: Characters,
      splideOptions: {
        pagination: false,
      },
    };
  },
  computed: {
    darkMode() {
      return this.$store.getters['darkMode'];
    },
  },
  watch: {

  },
}
</script>
<style lang="scss" scoped>
  .home {
    @media only screen and (min-width: 540px) {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      &.light {
        background-color: $greyLight;
        background-image: url(../assets/img/bg-light.png);
      }
      &.dark {
        background-color: $greyDark;
        background-image: url(../assets/img/bg-dark.png);
      }
    }

    .change-theme {
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 100;
    }
  }

</style>