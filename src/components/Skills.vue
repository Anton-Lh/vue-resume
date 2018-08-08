<template>
    <div class="skill">
		<div class="row">
			<div class="col-md-12 describe">
				<h3>个人技能</h3>
				<h4 class="sub-title">前端：</h4>
				<ul>
					<li>熟练使用 HTML 、DIV + CSS 布局（包括 flex 布局），能写出符合 W3C 标准且富有语义化的结构。</li>
					<li>熟练使用Javascript实现页面的交互效果，熟悉其原型、闭包、继承。日常使用 SCSS，了解ES6新特性。</li>
					<li>熟练使用 jQuery、Bootstrap，并阅读过其部分源码，了解其无 new 操作、对象扩展等原理。</li>
					<li>熟悉 Vue 框架了解其双向数据绑定原理，能够熟练使用vue、vue-router、vuex、axios进行页面开发。</li>
					<li>基础知识扎实，熟悉 HTTP 协议、常见状态码、浏览器缓存机制，了解 JavaScript 一些设计模式。</li>
				</ul>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12 describe">
				<h4>其它</h4>
				<ul>
					<li>学习过Python、PHP后台开发，现在主打Java后台。</li>
					<li>熟悉掌握Java语言，有J2EE开发经验，熟悉MVC开发流程，现解面向对象思想。</li>
					<li>熟悉Spring、SpringMVC、MyBatis等Web开发框架，自己整合过SSM框架
						<a href="https://github.com/caozongpeng/SSMDemo" target="_black">SSM框架整合。</a>
					</li>
					<li>熟悉SpringBoot快速开发框架、Mavan构建项目，自己用SpringBoot+MyBatis+Thymeleaf搭建的
						<a href="https://github.com/caozongpeng/SpringBootBlog" target="_black">个人博客。</a>
					</li>
					<li>熟悉掌握原生Sql语句，熟悉Mysql、Sqlserver数据库。</li>
					<li>熟悉Linux下开发，会搭建Java开发环境，熟悉Linux常用命令。</li>
					<li>了解redis缓存数据库，熟悉版本控制git、svn。</li>
					<li>注重代码的规范性(代码乱后期无法维护)，追求简洁高性能的代码(页面打开慢给谁看)</li>
				</ul>
			</div>
		</div>
	</div>
</template>


<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.sub-title {
    margin-left: 10px;
}

.describe {
    margin-bottom: 25px;
    color: #fff;
    li {
        list-style-type: circle;
        font-size: 16px;
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
}
</style>
