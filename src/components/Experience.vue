<template>
    <div class="experience-content">
		<h3 class="text-center">公司项目</h3>

		<h4>店智家居门店管理系统</h4>
		<p><strong>涉及技术：</strong>PHP、ThinkPHP、Vue、weui、JQuery 等。</p>
		<p><strong>项目描述：</strong>由于项目基于微信公众号里的HTML5页面，初始架构用的Jquery，后面重构用Vue，单页应用提高用户体验。</p>
		<p><strong>责任描述：</strong>对项目进行维护，页面代码优化。</p>
		<p><strong>个人收获：</strong>了解了Vue、Weui等多种框架的使用，了解了整个项目的流程和前后端数据的交互方法（ajax、jsonp等），自我学习能力得到提升、解决问题的方法得到丰富。</p>

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
        text-indent: 2em;
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

