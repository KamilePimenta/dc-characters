<template>
  <section>
    <main>
      <Card v-for="character in characters" :key="character.name" :data="character"/>
    </main>
  </section>
</template>
<script>
import Card from '@/components/Card.vue';
import Characters from '@/data/characters.js';

export default {
  name: 'Home',
  components: {
    Card,
  },
  data() {
    return {
      characters: Characters,
    };
  },
}
</script>
