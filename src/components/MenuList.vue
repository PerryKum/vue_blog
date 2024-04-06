<template>
    <el-menu
        mode="vertical"
        default-active="1"
        class="el-menu"
        @open="handleOpen"
        @close="handleClose"
    >
        <MenuConf />
        <MenuVue />
        <MenuJava />
        <MenuDatabase />
        <MenuOthers />
    </el-menu>
</template>

<script lang="ts" setup>
import MenuConf from './menulist/MenuConf.vue';
import MenuVue from './menulist/MenuVue.vue';
import MenuJava from './menulist/MenuJava.vue';
import MenuDatabase from './menulist/MenuDatabase.vue';
import MenuOthers from './menulist/MenuOthers.vue';

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped>
    span {
        user-select: none;
    }
</style>