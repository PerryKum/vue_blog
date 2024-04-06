<template>
    <div class="rtcl">
        <h1>MySQL</h1>
        <h3>版本选择：「>=5.7」。</h3>
        <h3>「<a href="https://dev.mysql.com/downloads/mysql/" target="_blank">下载 MySQL</a>」并「<a href="https://www.perrykum.fun/rtcls/exp/evconf/evconf.html" target="_blank">配置环境变量</a>」。</h3>
        <h3>可视化工具推荐：「 <a href="https://www.beekeeperstudio.io/" target="_blank">Beekeeper</a> 」。</h3>
        <h3>「Win + R」输入「cmd」并启动：运行「 <code>mysqld --install</code> 」安装 mysql 服务；运行「 <code>mysql --help</code> 」，显示版本号和帮助即安装成功。</h3>
        <h3>1、打开管理员终端，运行「 <code>chcp 65001</code> 」将终端编码改为「utf-8」，否则后续在导入数据库时会大量报错。</h3>
        <h3>2、运行「 <code>mysql -u root -p</code> 」进入 mysql 环境，此时需要输入密码：可以先尝试直接回车，若初始密码不为空则「<a href="https://blog.csdn.net/qq_42784277/article/details/106909880" target="_blank">点击此处</a>」查看获取初始密码的方式；然后可以运行「 <code>ALTER USER 'root'@'localhost' IDENTIFIED BY '<新密码>';</code> 」修改密码。</h3>
        <h3>3、运行「 <code>create database myDatabase;</code> 」创建一个名为「myDatabase」的数据库（项目统一）；运行「 <code>use myDatabase;</code> 」选中该数据库。</h3>
        <h3>4、运行「 <code>source <.sql文件绝对路径></code> 」分别导入「quartz.sql」、「ry_20231130.sql」两个数据库文件；如果出现了任何 ERROR 字样，请检查终端环境编码。</h3>
        <h3>5、修改配置：打开项目下「 <code>ruoyi-admin\src\main\resources\application-druid.yml</code> 」，修改「 _主库数据源_ 」的 url ：将数据库名「 <code>ruoyi-vue</code> 」改为「myDatabase」，「password」 改为数据库用户的密码。</h3>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
</style>