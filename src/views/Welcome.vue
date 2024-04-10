<template>
    <div class="welcome" :style="{ lineHeight: lineHeight + 'px' }">Welcome</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const lineHeight = computed(() => window.innerHeight - 155)
</script>

<style scoped>
.welcome {
    font-size: 100px;
    text-align: center;
    line-height: 800px;
    user-select: none;
}
</style>