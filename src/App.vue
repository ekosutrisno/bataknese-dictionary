<template>
  <!-- Hero Page -->
  <Hero :dictionary-length="dictionary.length"/>

  <section class="flex flex-col justify-between h-full">
      <!-- Main Page -->
      <Main />
    
      <!-- Footer -->
      <Footer />
  </section>
</template>
 
<script lang="ts" setup>
import { ref } from 'vue';
import dictionaryJSON from './assets/dictionary-batak-toba.json';
import Hero from './components/Hero.vue';
import Footer from './components/Footer.vue';
import Main from './components/Main.vue';

const dictionary = ref(dictionaryJSON);

</script>