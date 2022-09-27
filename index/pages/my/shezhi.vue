<template>
	<view class="box">
		<uni-icons type="back" size="30" @click="$router.go(-1)"></uni-icons>
		<p class="textsz">设置</p>
	</view>
	<view class="box2">
		<view class="b1">
			<p class="p1">允许非WIFI网络播放</p>
		</view>
		<view class="b1">
			<p class="p1">允许非WIFI网络缓存</p>
		</view>
		<view class="b2">
			<p class="p1">视频自动连续播放</p>
		</view>
	</view>
	<view class="box3">
		<p class="p1">清除应用缓存</p>
	</view>
</template>

<script>

</script>

<style>
	.box3{
		width: 100%;
		margin-top: 10px;
		background-color: #fff;
	}
	.p1{
		line-height: 50px;
		padding-left: 20px;
	}
	.b1{
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #ccc;
	}
	.box2{
		width: 100%;
		margin-top: 10px;
		background-color: #fff;
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
	.textsz{
		font-size: 18px;
		text-align: center;
		padding-left: 130px;
		padding-top: 15px;
		font-weight: 600;
	}

</style>