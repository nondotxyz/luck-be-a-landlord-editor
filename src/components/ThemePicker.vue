<script setup>
defineProps({
    label: {
        required: true,
        type: String
    },
    grid: {
        required: true,
        type: Boolean
    }
})

const color_prop = defineModel({
    required: true,
})
</script>

<template>
    <div :class="grid ? 'grid grid-cols-2 gap-2 items-center' : 'flex items-center gap-2'">
        <label>{{ label }}</label>
        <color-picker format="hex" v-model:pureColor="color_prop" />
    </div>
</template>
