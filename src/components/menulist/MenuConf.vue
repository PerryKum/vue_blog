<template>
    <el-sub-menu index="1">
        <template #title>
            <span>环境配置</span>
        </template>
        <RouterLink to="/conf/ruoyi">
            <el-menu-item index="1-1">Ruoyi</el-menu-item>
        </RouterLink>
        <RouterLink to="/conf/nodejs">
            <el-menu-item index="1-2">Node.js</el-menu-item>
        </RouterLink>
        <RouterLink to="/conf/mysql">
            <el-menu-item index="1-3">MySQL</el-menu-item>
        </RouterLink>
        <RouterLink to="/conf/redis">
            <el-menu-item index="1-4">Redis</el-menu-item>
        </RouterLink>
        <RouterLink to="/conf/vue">
            <el-menu-item index="1-5">Vue</el-menu-item>
        </RouterLink>
        <RouterLink to="/conf/java">
            <el-menu-item index="1-6">Java</el-menu-item>
        </RouterLink>
    </el-sub-menu>
</template>

<script lang="ts" setup>

</script>

<style scoped></style>