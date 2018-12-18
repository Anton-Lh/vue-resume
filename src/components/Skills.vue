<template>
    <div class="skill">
		<div class="row">
			<div class="col-md-12 describe">
				<h3>技术总结</h3>
				<!-- <h4 class="sub-title">前端：</h4> -->
				<ul>
					<li>熟练掌握JavaEE语言以及基于JSP的Web应用程序开发，具有扎实的编程功底。</li>
					<li>熟悉MVC开发模式，熟练使用Struts2、Hibernate、Spring、SpringMVC、MyBatis以及SpringBoot、SpringData家族等主流框架，掌握框架的原理及其整合应用。</li>
					<li>熟练使用HTML5、CSS3、JavaScript、 JQuery、Ajax、EasyUI、Bootstrap等Web编程技术。</li>
					<li>熟练掌握SQL语句，熟悉MySQL、SqlServer了解Oracle以及Redis、Mongodb非关系型数据库。</li>
					<li>熟悉Linux操作系统，熟练使用Linux相关命令进行项目部署，搭建过Zookeeper、SolrCloud、RedisCluster集群，会使用Docker容器化部署。</li>
                    <li>熟悉ActiveMQ消息队列，Mycat数据库分片，Solr搜索引擎，以及SpringSecurity、Shiro权限控制。</li>
                    <li>掌握单例、工厂、代理等设计模式，熟悉GIt、SVN版本控制工具。</li>
                    <li>了解AngularJs、Vue.js等MVVM前端框架，以及iView、ElementUI。</li>
                    <li>了解Dubbo+Zookeeper面向服务的SOA分布式框架，掌握Nginx反向代理实现Tomcat负载均衡。</li>
                    <li>了解TCP/IP，Http等网络协议，Socket网络通信编程。</li>
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
        padding-bottom: 10px;
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
