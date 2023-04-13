<template>
  <!-- Hero Page -->
  <Hero :dictionary-length="dictionary.length" />

  <section class="flex flex-col justify-between h-full">
    <!-- Main Page -->
    <Main />

    <!-- Footer -->
    <Footer />
  </section>
</template>
 
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import dictionaryJSON from './assets/dictionary-batak-toba.json';
import Hero from './components/Hero.vue';
import Footer from './components/Footer.vue';
import Main from './components/Main.vue';
import { init} from './service/web';

const dictionary = ref(dictionaryJSON);

onMounted(() => init());
</script>