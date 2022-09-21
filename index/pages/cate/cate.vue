<template>
	<view class="viewCate">
		<view class="header">
			<span class="textCate">分类</span>
			<uni-icons class="fontCate" type="search" size="25" color="#fff"></uni-icons>
		</view>
		<view class="bigbox">
			<ul class="leftbox">
				<li>Java</li>
				<li>Java</li>
				<li>Java</li>
				<li>Java</li>
				<li>Java</li>
				<li>Java</li>
				<li>Java</li>
				<li>Java</li>
				<li>Java</li>
			</ul>
			<view class="rightbox"></view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	ul{
		padding: 0;
		margin: 0;
	}
	li{
		list-style: none;
		width: 100%;
		height: 30px;
		font-size: 18px;
		font-weight: 600;
		color: #ccc;
		line-height: 30px;
		text-align: center;
		margin:40px 0;
		border-left: 1px solid #3f5bbc;
	}
	.rightbox{
		width: 100%;
	}
	.leftbox{
		width: 150px;
		height:100%;
		background: #f5f5f5;
	}
	.bigbox{
		display: flex;
		width: 100%;
	}
	.fontCate{
		padding-left:120px;
		line-height: 45px;
	}
	.header{
		width: 100%;
		height: 45px;
		background-color: #3f5bbc;
		padding-left: 170px;
	}
	.textCate{
		color: #fff;
		font-size: 20px;
		font-weight: 500;
		line-height: 45px;
	}
</style>
