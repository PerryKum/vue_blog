<template>
    <div class="details" :style="{ height: detailsBox.height + 'px' }">
        <RouterView />
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { RouterView } from 'vue-router'

const detailsBox = reactive({
    height: window.innerHeight - 155
})

window.addEventListener('resize', () => {
    detailsBox.height = window.innerHeight - 155
})
</script>

<style scoped>
.details {
    width: 100%;
    height: 800px;
    background: rgb(250, 250, 250);
    border-radius: 10px;
}
</style>