<script setup>
import { reactive, ref } from 'vue'
import MainScreen from './components/MainScreen.vue';
import ChoiceScreen from './components/ChoiceScreen.vue';

//#region 
/** @typedef {object} colors3
 * @property {object}
 * @property {string} background
 * @property {string} button_border
 * @property {string} button_color_continue
 * @property {string} button_color_continue_text
 * @property {string} button_color_exit
 * @property {string} button_color_exit_text
 * @property {string} button_color_header
 * @property {string} button_color_header_text
 * @property {string} button_color_inventory
 * @property {string} button_color_inventory_text
 * @property {string} button_color_misc
 * @property {string} button_color_misc_text
 * @property {string} button_color_mods
 * @property {string} button_color_mods_text
 * @property {string} button_color_options
 * @property {string} button_color_options_text
 * @property {string} button_color_page
 * @property {string} button_color_promo
 * @property {string} button_color_promo_text
 * @property {string} button_color_removal
 * @property {string} button_color_start
 * @property {string} button_color_start_text
 * @property {string} button_color_stats
 * @property {string} button_color_stats_text
 * @property {string} email_background
 * @property {string} email_border
 * @property {string} inventory_background
 * @property {string} inventory_text
 * @property {string} item_background
 * @property {string} item_count_text
 * @property {string} item_destroy_text
 * @property {string} item_reminder_down_text
 * @property {string} item_reminder_up_text
 * @property {string} options_background
 * @property {string} reel_border
 * @property {string} reels
 * @property {string} scroll_bar
 * @property {string} scroll_bar_border
 * @property {string} symbol_background
 * @property {string} symbol_bonus_text
 * @property {string} symbol_multiplier_text
 * @property {string} symbol_reminder_down_text
 * @property {string} symbol_reminder_up_text
 * @property {string} text_color_common
 * @property {string} text_color_essence
 * @property {string} text_color_keyword
 * @property {string} text_color_misc
 * @property {string} text_color_rare
 * @property {string} text_color_uncommon
 * @property {string} text_color_very_rare
 */

/**
 * @type {colors3}
 */
const colors_3 = reactive({
  background: "#FF8300",
  button_border: "#000000",
  button_color_continue: "#06799F",
  button_color_continue_text: "#FFFFFF",
  button_color_exit: "#6A1111",
  button_color_exit_text: "#FFFFFF",
  button_color_header: "#C4DA0C",
  button_color_header_text: "#FFFFFF",
  button_color_inventory: "#046BF9",
  button_color_inventory_text: "#FFFFFF",
  button_color_misc: "#F28050",
  button_color_misc_text: "#FFFFFF",
  button_color_mods: "#800080",
  button_color_mods_text: "#FFFFFF",
  button_color_options: "#C4C4C4",
  button_color_options_text: "#FFFFFF",
  button_color_page: "#228C8C",
  button_color_promo: "#1A1A1A",
  button_color_promo_text: "#FFFFFF",
  button_color_removal: "#222222",
  button_color_start: "#C71585",
  button_color_start_text: "#FFFFFF",
  button_color_stats: "#2A570F",
  button_color_stats_text: "#FFFFFF",
  email_background: "#122950",
  email_border: "#000000",
  inventory_background: "#000000",
  inventory_text: "#FFFFFF",
  item_background: "#094643",
  item_count_text: "#61D3E3",
  item_destroy_text: "#7234BF",
  item_reminder_down_text: "#E14A68",
  item_reminder_up_text: "#FBF236",
  options_background: "#000000",
  reel_border: "#000000",
  reels: "#FFFFFF",
  scroll_bar: "#FFFFFF",
  scroll_bar_border: "#000000",
  symbol_background: "#640F39",
  symbol_bonus_text: "#FBF236",
  symbol_multiplier_text: "#FBF236",
  symbol_reminder_down_text: "#E14A68",
  symbol_reminder_up_text: "#FBF236",
  text_color_common: "#797979",
  text_color_essence: "#FF005D",
  text_color_keyword: "#E14A68",
  text_color_misc: "#FFFFFF",
  text_color_rare: "#F8F87B",
  text_color_uncommon: "#38769A",
  text_color_very_rare: "#4A1369"
})
//#endregion

const showColorsMenu = ref(false);  // Toggle to show/hide the color pop-up

function toggleColorsMenu() {
  showColorsMenu.value = !showColorsMenu.value;
}

</script>

<template>
  <div class="space-y-4">
    <MainScreen :colors_3="colors_3" />
    <ChoiceScreen :colors_3="colors_3" />

    <button @click="toggleColorsMenu" class="fixed right-4 top-4 bg-blue-500 text-white p-2 rounded">Show
      Colors</button>
    <div v-if="showColorsMenu"
      class="fixed right-4 top-16 bg-white p-4 shadow-lg rounded-lg max-w-fit max-h-96 overflow-y-auto">

      <h2 class="text-xl font-bold mb-4">Color Menu</h2>
      <ul>
        <li v-for="(color, key) in colors_3" :key="key" class="flex items-center justify-between mb-2">
          <div class="flex items-center space-x-2">
            <span :style="{ backgroundColor: color }" class="inline-block w-6 h-6 rounded-full border"></span>
            <span class="text-gray-700">{{ key }}</span>
          </div>
          <span class="text-gray-500">{{ color }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.symbol-row>* {
  background-color: inherit;
}
</style>
