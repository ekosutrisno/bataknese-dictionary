<template>
    <!-- Search -->
    <div class="shadow-sm border-b">
      <section class="container mx-auto flex-none flex-shrink-0 h-20 flex items-center the-header px-4 sm:px-0 sticky top-0 z-20">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type="search" v-model="query" class="w-full rounded bg-transparent border-0 focus:border-transparent focus:ring-transparent text-lg py-3 px-4 placeholder-gray-600 focus:placeholder-gray-400" placeholder="Type a word or sentence">
      </section>
    </div>
  
    <!-- Main -->
    <section class="grid nv-transition h-max p-6 lg:p-0 lg:py-6 flex-1">
      <div class="container mx-auto">
        <div class="flex-1">
          <header class="col-start-1 my-3 row-start-1 flex flex-wrap items-baseline">
            <h2 class="flex-none text-lg leading-6 font-medium text-gray-900 mr-3">Bataknese</h2>
            <p class="flex-auto text-gray-400 text-sm leading-5 font-medium">Translation results into Batak language.</p>
            <p class="flex-none w-full text-sm leading-5 mt-3">Maybe some words or sentences are not quite right.</p>
          </header>
          <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3">
            <ResultCard v-for="(language, idx) in searching()" :language="language.item" :index="idx"/>
          </div>
        </div>
        <div v-if="!searching().length" class="p-4 md:px-8 mx-auto border-2 border-purple-300 border-dashed min-h-[120px] md:w-2/6 rounded-lg mb-6">
          <div class="text-gray-500 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            <p>Please type a word or sentence in the search field above to see the results.</p>
            <p class="text-right mt-4 text-xs italic">&dash; Bataknese App</p>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Fuse from 'fuse.js'
import dictionaryJSON from '../assets/dictionary-batak-toba.json';
import ResultCard from './ResultCard.vue';

const query = ref('');
const dictionary = ref(dictionaryJSON);

function searching() {
  const options = {
    // isCaseSensitive: false,
    includeScore: false,
    shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    minMatchCharLength: 3,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    // fieldNormWeight: 1,
    keys: [
      "english"
    ]
  };

  const fuse = new Fuse(dictionary.value, options);
  return fuse.search(query.value).sort((s, b)=> s.score! - b.score!);
}
</script>