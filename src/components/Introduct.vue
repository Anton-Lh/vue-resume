<template>
    <div class="col-md-12 text-center">
		<div class="info">
			<div class="row">
				<div class="col-md-12 text-center">
					姓名：曹宗鹏（KyrieCao）
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 text-center">
					专业：应用技术 大专
				</div>
				<div class="col-md-6 text-center">
					毕业时间：2019年7月
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 text-center">
					手机：18588765619
				</div>
				<div class="col-md-6 text-center email">
					邮箱：
					<a href="mailto:kyriecao@163.com">kyriecao@163.com</a>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 text-center">
					说明：因本人学籍为16届，所以毕业证需要19年7月份拿现在随时可入职。
				</div>
			</div>
		</div>
		<div class="divi"></div>
		<div class="introduct">
			<h2 class="text-center">关于我</h2>
			<p>在16年（也就是在我大二上学期的时候）一次偶然的机会加入了任课老师的组织的软件开发小组，在老师的“蛊惑”下跳入了Web开发的坑。并因此对Web开发产生了浓厚的兴趣（因为当时学了C#，看着丑陋的控件拖来拖去太枯燥，入了Web开发坑仿佛发现了新大陆），在不断地学习，不断地卧槽，原来 HTML、CSS、JS 还可以这么玩，渐渐加深了自己对Web开发的热爱。
			</p>
			<p>对新技术抱有激情，渴望在技术上有所建树，希望自己做的东西能被大家喜欢,励志两年成为一名合格的全栈开发工程师。</p>
            <p>平时没什么别的爱好，看看体育比赛，NBA比赛居多。还会经常打篮球。</p>
			<p>另外，还有
				<a href="https://github.com/caozongpeng" target="_black">github</a>和
				<a href="http://kyrieandrewirving.cn:8080/" target="_black">个人博客</a>
                可供参观。</p>
		</div>
	</div>    
</template>

<style scoped lang="scss">
$white: #fff;
$coffee: #b4531e;

.photo {
    overflow: hidden;

    margin: 20px 0;

    img {
        border-radius: 50%;
    }
}
.info {
    font-size: 20px;
    color: $white;

    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
}
.row {
    margin: 10px 0;
}

.email {
    a {
        &:link,
        &:visited {
            color: $coffee;
        }
        &:hover {
            text-decoration: none;
            color: lighten($coffee, 20%);
        }
    }
}

.introduct {
    margin: 20px 0;

    font-size: 18px;
    text-align: left;

    color: $white;
    p {
        text-indent: 40px;
        a {
            &:link,
            &:visited {
                color: $coffee;
            }
            &:hover {
                text-decoration: none;
                color: lighten($coffee, 20%);
            }
        }
        span {
            color: $coffee;
        }
    }
}

.divi {
    border: 1px solid $white;
    width: 100%;
}

</style>

