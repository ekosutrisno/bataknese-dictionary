<template>
    <div class="card-container group">
        <div class="card-batak-text">
            <svg v-if="index == 0" xmlns="http://www.w3.org/2000/svg" class="card-batak-svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
            </svg>
            <span class="truncate capitalize">{{language.batak}}</span>
        </div>

        <div class="">
            <p class="text-xs capitalize italic"><span class="text-gray-500 group-hover:text-white text-[10px]">English:</span> {{language.english}}</p>
        </div>

        <svg  xmlns="http://www.w3.org/2000/svg" area-hidden="true" class="h-6 w-6 transform rotate-90 top-0 right-2 absolute text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
    </div>
</template>
   
<script lang="ts" setup>
defineProps<{ language: { english: string, batak: string }, index: number }>();
</script>