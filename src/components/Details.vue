<template>
    <div class="details">
        <RouterView />
    </div>
</template>

<script lang="ts" setup>
    import { RouterView } from 'vue-router'
</script>

<style scoped>
    .details {
        width: 100%;
        height: 800px;
        background: rgb(250, 250, 250);
        border-radius: 10px;
    }
</style>