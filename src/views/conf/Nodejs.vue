<template>
    <div class="rtcl">
        <h1>Node.js</h1>
        <h3>版本选择：「>=12,<=16」，实测更高版本无法运行 Ruoyi。</h3>
                <h3>「<a href="https://nodejs.org/en/download" target="_blank">官网下载</a>」。</h3>
                <h3>「Win + R」输入「cmd」并启动，运行「 <code>node -v</code> 」、「<code>npm -v</code> 」查询版本，显示版本号即安装成功。</h3>
                <br>
                <h2>nvm</h2>
                <h3>如果你已经安装过新版本（>16）的node.js，则可以用「nodejs」的版本管理器「nvm」进行版本切换。</h3>
                <h3>1、「<a href="https://github.com/coreybutler/nvm-windows" target="_blank">下载 nvm-windows</a>」并安装。</h3>
                <h3>2、终端运行「 <code>nvm install 16</code> 」。</h3>
                <h3 style="color: red;">【注意】（随时补充）</h3>
                <h3>1、按照「<a href="https://blog.csdn.net/m0_64498202/article/details/135651133"
                        target="_blank">此教程</a>」部署 Node.js 的过程中，在第 5、6 步配置全局环境变量时可能会出现「
                    <code>&lt;direct&gt; is not a valid npm option</code> 」的错误，是「npm」版本过高问题导致的，用「<code>npm install -g npm@~8</code>」降级到 8 版本即可。</h3>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped></style>