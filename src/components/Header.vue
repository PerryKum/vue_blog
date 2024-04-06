<template>
    <header class="header">
        <img src="../assets/icon/logo.png" alt="logo" class="logo" @click="$router.push('/')">
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
.header {
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 60px;
    background: rgb(240, 240, 240);
    border-radius: 10px;
    font-weight: bold;
    user-select: none;
}

.logo {
    height: 80px;
    margin: 10px 0 0 10px;
    z-index: 100;
    position: flex;
}
</style>
