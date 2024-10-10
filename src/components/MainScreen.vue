<script setup>
defineProps({
    colors_3: Object
})

const imageList = [
    new URL("/img/Wildcard.png", import.meta.url).href,
    new URL("/img/Diamonds.png", import.meta.url).href,
    new URL("/img/Hearts.png", import.meta.url).href,
    new URL("/img/Spades.png", import.meta.url).href,
    new URL("/img/Clubs.png", import.meta.url).href,
];

</script>

<template>
    <div class="flex justify-center items-center py-10" :style="{ backgroundColor: colors_3.background }">
        <div class="grid grid-cols-5">
            <div class="flex flex-col border-4 gap-5 p-2" v-for="i in 5" :key="i" :style="{
                backgroundColor: colors_3.reels,
                borderColor: colors_3.reel_border
            }">
                <img v-for="i in 4" :key="i" :src="imageList[~~(Math.random() * imageList.length)]"
                    class="bg-inherit" />
            </div>
        </div>
    </div>
    <div class="inline-flex gap-2">
        <div class="flex items-center gap-2">
            <label>Background: </label>
            <color-picker format="hex" v-model:pureColor="colors_3.background" />
        </div>
        <div class="flex items-center gap-2">
            <label>Reels Background </label>
            <color-picker format="hex" v-model:pureColor="colors_3.reels" />
        </div>
        <div class="flex items-center gap-2">
            <label>Reels Border: </label>
            <color-picker format="hex" v-model:pureColor="colors_3.reel_border" />
        </div>
    </div>

</template>