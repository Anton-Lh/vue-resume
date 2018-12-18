<template>
    <div class="experience-content">
		<h3 class="text-center">公司项目</h3>

		<h4>湖南国税办税服务管理系统</h4>
		<p><strong>涉及技术：</strong>Spring、SpringMVC、Hibernate、Oracle、Redis、JQuery、Ztree、Ajax等。</p>
		<p><strong>项目描述：</strong>项目主要有10大模块，分别是系统管理、全局监控、统计分析、预警报警、绩效考核、在线学习、预约管理、涉税咨询、设备管理、后台管理。</p>
		<p><strong>责任描述：</strong>我在此项目中主要负责全局监控模块以及绩效考核模块的开发，全局监控（包括：网上办税服务厅监控、办税服务厅实时监控、音视频实时查看、音视频回放、虚拟大厅以及电子地图等功能）使用到了第三方海康威视视频监控，使用到WebService调用远程服务，绩效考核（包括：单位考核以及个人考核）在此模块主要难点在于对公式考核的设置上。</p>
		<p><strong>个人收获：</strong>对使用第三方的API有更加深入的理解。</p>

        <h4>中富电路MES管理系统</h4>
		<p><strong>涉及技术：</strong>SpringBoot、Shiro、Mybatis-plus、Beet、MySQL、MyCat等。</p>
		<p><strong>项目描述：</strong>制造执行系统（Manufacturing Execution System，MES）是面向车间的生产过程管理的实时信息系统。它填补了上层生产计划与底层工业控制之间的鸿沟，可以为用户营造一个可视、实时、精细、可追溯的制造环境。MES目的是在收集生产过程中大量的实时数据后，使用实时精确的生产过程数据可以实现。项目主要有5大主要模块，分别为总体设置状况分析、产品追溯、异常管理、预警报警、车间看板等模块，主要功能以生产车间的设备状况分析，如沉铜、DVCP、镀金、夹具、飞针数据分析等，分析主要是通过列表、图表展示等方式。</p>
		<p><strong>责任描述：</strong>在此项目中我和另一个同事负责设置状况分析模块，由于我是后来加入该项目的，在此我发现生产车间每天都会生产出大量数据，导致一个很严重的问题就是数据量太大对数据库的访问压力非常大，且查询速度非常的慢。因此我在项目中加入Mycat数据库分片中间件进行数据库的优化工作，从而减少数据库的访问压力提高查询速度。</p>
		<p><strong>个人收获：</strong>对使用第三方的API有更加深入的理解。</p>

        <h4>鹏飞OA自动化办公系统</h4>
		<p><strong>涉及技术：</strong>SpringBoot、Mybatis、JPA+MySQL、Freemarker、Bootstrap等。</p>
		<p><strong>项目描述：</strong>鹏飞公司的内部办公系统，面向组织的日常动作和管理，员工及管理者使用频率最高的应用系统，极大提高公司的办公效率。</p>
		<p><strong>责任描述：</strong>我在此项目中主要负责邮件管理、任务管理以及文件管理模块的开发，邮件管理（包括：写信，收件箱、发件箱等信息查看，写信可以添加附件等功能）任务管理（包括：任务列表，我的任务两个功能，可以添加任务，修改任务状态等功能）文件管理（包括：文件管理，主要上传各类型的文件，文件删除，文件分类等功能）。</p>
		<p><strong>个人收获：</strong>对使用第三方的API有更加深入的理解。</p>

        <h4>幼儿园管理平台</h4>
		<p><strong>涉及技术：</strong>Spring、SpringMvc、Mybatis、ApiCloud、Vue等。</p>
		<p><strong>项目描述：</strong>育才小管家  App  是 使用  apicloud  开发的，分为园长端和家长端，园长端展示幼儿园数据，家长端展示幼儿数据。</p>
		<p><strong>责任描述：</strong>我在此项目中负责和另一个同事负责移动端App开发和后端接口开发，项目原本是用的JQuery，后来项目中引入了Vue与Axios提升开发效率，用户体验也大大提升，后端部分负责Api接口的编写，并对接登录接口到阿里大于短信平台。</p>
		<p><strong>个人收获：</strong>对使用第三方的API有更加深入的理解。</p>

		<h3 class="text-center">个人项目</h3>

		<h4>基于SpringBoot+Mybatis+Thymeleaf搭建的个人博客系统
			<a href="http://kyrieandrewirving.cn:8080/" target="_black">在线预览</a> &
			<a href="https://github.com/caozongpeng/SpringBootBlog" target="_black">源码</a>
		</h4>
		<p><strong>涉及技术：</strong>SpringBoot、Mybatis、Thymeleaf、PageHelper、Ehcache、Jquery、Bootstrap、Editor.md等。</p>
		<p><strong>项目描述：</strong>该项目需要完成前台博客展示，后台博客管理等功能。</p>
		<p><strong>责任描述：</strong>一个人独立完成从前端到数据库的开发，负责前端页面、服务端交互、数据库处理等工作。</p>
		<p><strong>个人收获：</strong>第一次个人独立开发一个完整的系统，了解SrpingBoot和数据库交互以及项目部署上线，加深了对前后端数据交互的理解。</p>	
	</div>
</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>
.experience-content {
    margin: 15px 0;

    color: #fff;
    p {
        font-size: 16px;
        text-indent: -5em;
        margin-left: 7em;
    }
    a {
        &:link,
        &:visited {
            color: #b4531e;
        }
        &:hover {
            text-decoration: none;

            color: lighten(#b4531e, 20%);
        }
    }
}
</style>

