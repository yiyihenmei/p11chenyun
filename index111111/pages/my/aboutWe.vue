<template>
	<view class="box">
		<uni-icons type="back" size="30" @click="$router.go(-1)"></uni-icons>
		<p class="textAbout">关于梦学谷</p>
	</view>
	<view class="box2">
		<image src="../../static/images/logo-black.png" mode=""></image>
		<p class="pbb">Version 1.0.0</p>
		<p class="textP">梦学谷是专注于在线教育平台，聚合了优秀教师的海量精品课程。在这里，您可以在线观看视频教程；
		您可以随时随地向名师请教；您可以与大量志同道合的同学进行交流。</p>
		<p class="textpp">打破地域的限制，让每个立志学习，有梦想的人，都能接受优秀教师的指导和教学；同时希望给优秀的教师一个展示的平台。</p>
		<p class="textppp">梦学谷——陪你学习，伴你梦想！</p>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style>
	.textppp{
		text-indent: 30px;
		padding: 10px 10px;
	}
	.textpp{
		text-indent: 30px;
		padding: 0px 10px;
	}
	.textP{
		text-indent: 30px;
		padding: 20px 10px;
	}
	.pbb{
		color: rgb(62, 126, 206);
		font-size: 18px;
		text-align: center;
		padding-top: 10px;
	}
	image{
		width: 170px;
		height: 60px;
		margin-top: 30px;
		margin-left: 100px;
	}
	.box2{
		width: 100%;
	}
	.uni-icons{
		padding-top: 10px;
		padding-left: 10px;
	}
	body{
		background-color: #f5f5f5;
	}
	.box{
		display: flex;
		width: 100%;
		height: 50px;
		background-color: #fff;
	}
	.textAbout{
		font-size: 18px;
		text-align: center;
		padding-left: 102px;
		padding-top: 15px;
		font-weight: 600;
	}

</style>