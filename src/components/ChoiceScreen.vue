<script setup>
import { computed } from "vue"
import ThemePicker from "./ThemePicker.vue";
const props = defineProps({
    colors_3: Object
})

const symbols = [
    {
        name: "Wildcard",
        image: new URL('/img/Wildcard.png', import.meta.url).href,
        rarity: "Very Rare",
        description: "Gives Coin equal to the highest value among adjacent symbols."
    },
    {
        name: "Diver",
        image: new URL('/img/Diver.png', import.meta.url).href,
        rarity: "Rare",
        description: "Removes adjacent Snail Snail, Turtle Turtle, Anchor Anchor, Crab Crab, Goldfish Goldfish, Oyster Oyster, Pearl Pearl, Jellyfish Jellyfish, Pufferfish Pufferfish, and Sand Dollar Sand Dollar. Permanently gives Coin 1 for each symbol removed.",
    },
    {
        name: "Five Sided Die",
        image: new URL('/img/Five-Sided_Die.png', import.meta.url).href,
        rarity: "Uncommon",
        description: "Gives between Coin 1 and Coin 5 randomly."
    },
    {
        name: "Anchor",
        image: new URL('/img/Anchor.png', import.meta.url).href,
        rarity: "Common",
        description: "Gives 4 coin when in a corner"
    }
];

const getRarityColor = (rarity) => {
    switch (rarity) {
        case "Common": {
            return props.colors_3.text_color_common
        }
        case "Uncommon": {
            return props.colors_3.text_color_uncommon
        }
        case "Rare": {
            return props.colors_3.text_color_rare
        }
        case "Very Rare": {
            return props.colors_3.text_color_very_rare
        }
    }
}

</script>

<template>
    <div class="flex flex-col justify-center items-center" :style="{ backgroundColor: colors_3.email_background }">
        <!-- SYMBOLS CHOICE -->
        <div class="grid grid-cols-4 gap-4 p-4">
            <div class="flex flex-col p-3 border-2 border-black max-w-72 gap-4" v-for="i in symbols" :key="i"
                :style="{ backgroundColor: colors_3.symbol_background }">
                <div class="flex flex-col justify-center items-center">
                    <span class="text-xl mb-4">{{ i.name }}</span>
                    <img :src="i.image" />
                    <span :style="{ color: getRarityColor(i.rarity) }">{{ i.rarity }}</span>
                    <span>Gives 2 coins</span>
                </div>
                <hr>
                <p>
                    {{ i.description }}
                </p>
            </div>

            <!-- ITEM CHOICE -->
            <div class="flex flex-col p-3 border-2 border-black max-w-72 gap-4"
                :style="{ backgroundColor: colors_3.item_background }">
                <div class="flex flex-col justify-center items-center">
                    <span class="text-xl mb-4">Coffee Essence</span>
                    <img src="/img/Coffee_Essence.png" />
                    <span :style="{ color: colors_3.text_color_essence }"></span>
                </div>
                <hr>
                <p>
                    Destroys itself before you would pay rent. When destroyed, you spin 2 additional times.
                </p>
            </div>

            <div class="flex flex-col backdrop-brightness-50 text-white col-span-3 border-2 p-2 border-black">
                <ThemePicker label="Email / Pop up window background " v-model="colors_3.email_background" />
                <div class="flex flex-col gap-4 m-3">
                    <ThemePicker label="Common" v-model="colors_3.text_color_common" grid />
                    <ThemePicker label="Uncommon" v-model="colors_3.text_color_uncommon" grid />
                    <ThemePicker label="Rare" v-model="colors_3.text_color_rare" grid />
                    <ThemePicker label="Very Rare" v-model="colors_3.text_color_very_rare" grid />
                    <ThemePicker label="Essence" v-model="colors_3.text_color_essence" grid />
                </div>
            </div>
        </div>
    </div>
</template>