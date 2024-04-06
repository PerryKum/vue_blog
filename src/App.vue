<template>
    <el-container>
        <el-header class="el-header">
            <Header />
        </el-header>
        <el-row>
            <el-col :span="4">
                <el-main>
                    <MenuList />
                </el-main>
            </el-col>
            <el-col :span="20">
                <el-main>
                    <Details />
                </el-main>
            </el-col>
        </el-row>
    </el-container>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import MenuList from './components/MenuList.vue'
import Details from './components/Details.vue'
</script>

<style scoped>
.el-header {
    margin-bottom: 35px;
}
</style>
