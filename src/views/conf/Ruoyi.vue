<template>
    <div class="rtcl">
        <h1>「Ruoyi-vue」框架</h1>
        <h3>「<a href="https://ruoyi.vip" target="_blank">官网下载</a> | <a href="https://github.com/yangzongzhuan/RuoYi-Vue"
                target="_blank">Github</a> | <a href="https://gitee.com/y_project/RuoYi-Vue" target="_blank">Gitee</a>」
        </h3>
        <h3>本次项目选用「Vue 前端分离版」，建议将本教程与「<a href="https://doc.ruoyi.vip/ruoyi-vue/" target="_blank">Ruoyi-Vue
                官方使用文档</a>」配合使用。</h3>
        <h3>或者如果你使用「<a href="https://scoop.sh/" target="_blank">scoop</a>」并且会「<a
                href="https://absx.pages.dev/farraginous/recommend_packages.html#scoop"
                target="_blank">配置代理</a>」，你也可以用简单的几行命令安装完所有依赖，并免除配置环境变量的麻烦。</h3>
        <pre><code>    - scoop bucket add extras
    - scoop bucket add java
    - scoop install redis mysql openjdk22 nodejs16</code></pre>
        <h3>在此鸣谢博主室友「absx」。</h3>
        <br>
        <h2>项目启动流程</h2>
        <h3>【后端】</h3>
        <h3>1、启动 Redis：终端运行「 <code>redis-server</code> 」启动服务，这个终端不要关闭。</h3>
        <h3>2、启动 MySQL：管理员终端运行「 <code>net start mysql</code> 」启动服务，这个终端不要关闭。</h3>
        <h3>3、运行「 <code>ruoyi-admin\src\main\java\com\ruoyi\RuoYiApplication.java</code> 」，在终端中出现「若依启动成功」后即可。</h3>
        <h3>【前端】</h3>
        <h3>1、在「 <code>ruoyi-ui</code> 」中运行「 <code>npm i</code> 」部署依赖。</h3>
        <h3>2、运行「 <code>npm run dev</code> 」，在终端中出现「 <code>Local: http://localhost:port/</code> 」后即可访问。</h3>
        <h3 style="color: red;">【注意】（随时补充）</h3>
        <h3>1、启动 Java 时若显示端口被占用，在「 <code>\ruoyi-admin\src\main\resources\application.yml</code> 」中修改「 <code>server.port</code> 」为任一未占用端口即可。</h3>
        <h3>2、「 <code>\ruoyi-ui\vue.config.js</code> 」第 38 行「target url」中的端口应与「 <code>\ruoyi-admin\src\main\resources\application.yml</code> 」中的「 <code>server.port</code> 」保持一致。</h3>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
pre {
    font-size: 2em;
    width: fit-content;
}
</style>