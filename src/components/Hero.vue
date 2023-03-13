<template>
    <section class="bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500 h-full md:h-80 px-4 sm:px-6 lg:px-16">
        <div class="container mx-auto pb-6">
        <Header :title="'Bataknese App'" />
        <div class="grid lg:grid-cols-2">
            <div class="w-full flex-none text-center xl:w-auto xl:flex-auto xl:text-left mt-10">
            <button class="text-white text-3xl leading-9 font-semibold sm:text-3xl 2xl::text-4xl sm:leading-10">
                Learning Batak language is more fun here 🥳
            </button>
            <div
                class="flex flex-wrap justify-center xl:justify-start whitespace-no-wrap text-purple-100 font-medium mt-3 leading-5">
                <div class="flex items-center mx-3 sm:mx-4 xl:ml-0 xl:mr-8 mt-3">
                <div class="mr-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"
                    class="text-purple-400">
                    <path fill-rule="evenodd"
                        d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                        clip-rule="evenodd"></path>
                    </svg>
                </div>
                <div>{{ dictionaryLength }} Words or Sentences.</div>
                </div>
            </div>
            </div>
            <div class="pt-10">
                <div class="md:text-right text-center text-indigo-50">
                    <p>The Batak language is one of the most well-known ethnic languages <br class="hidden md:block"> in North Sumatera, Indonesia. Specifically, the Batak tribe.</p>
                    <p class="text-right mt-4 text-xs italic">&dash; Bataknese App</p>
                </div>
            </div>
        </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Header from './Header.vue';

defineProps<{ dictionaryLength: number }>();
</script>