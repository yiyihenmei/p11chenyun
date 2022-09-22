<template>
	<!-- 热门推荐标题 -->
	<view class="hot">
		<p class="titleHot">热门推荐</p>
		<view class="textHot">HOT</view>
		<p class="all">全部</p>
		<view class="boxx"></view>
	</view>
	<!-- 热门推荐内容 -->
	<view class="contentHot">
		<view class="scroll-view-item" v-for="item in ListHot"
			:key="item.id">
			<image :src="item.mainImage" mode=""></image>
			<view class="right">
				<p class="title">{{item.title}}</p>
				<p class="uname">{{item.nickName}}</p>
				<span class="price">{{item.priceDiscount}}</span>
				<span class="num">{{item.studyTotal}}人在学</span>
			</view>
		</view>
	</view>
</template>

<script>
	import {getRecommend} from '../../api/index/index.js'
	import {reactive,toRefs} from 'vue'
	export default{
		setup(){
			const List=reactive({
				ListHot:[]
			})
			getRecommend().then(res=>{
				// console.log(res)
				List.ListHot=res.data.records.slice(0,5)
			})
			return {
				...toRefs(List)
			}
		}
	}
	
</script>

<style>
	.num{
		padding-left: 20px;
	}
	.price{
		color: red;
		padding-top: 15px;
	}
	.uname{
		padding-top: 12px;
		padding-bottom: 5px;
	}
	.title{
		font-weight: 600;
		padding-top:8px;
	}
	.right{
		width: 50%;
	}
	image{
		width: 45%;
		height: 100px;
		border-radius: 15px;
		margin: 10px 10px 0px 10px;
	}

	.scroll-view-item {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
	}

	.hot {
		width: 100%;
		margin-top: 30px;
		height: 30px;
	}

	.titleHot {
		font-size: 22px;
		float: left;
		margin-left: 15px;
		line-height: 30px;
	}

	.textHot {
		font-size: 12px;
		color: #fff;
		background: red;
		border-radius: 35px 50px 50px 0;
		float: left;
		margin-left: 5px;
		width: 35px;
		height: 20px;
		line-height: 20px;
		text-align: center;
		margin-top: 5px;
	}

	.boxx {
		width: 8px;
		height: 8px;
		border-top: 1px solid #ccc;
		border-right: 1px solid #ccc;
		float: right;
		transform: rotate(45deg);
		margin-top: 10px;
		margin-right: 15px;
	}

	.all {
		float: left;
		color: #ccc;
		font-size: 16px;
		margin-left: 175px;
		line-height: 30px;
	}
</style>
