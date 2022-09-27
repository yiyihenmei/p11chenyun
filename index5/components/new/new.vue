<template>
	<!-- 近期上新 -->
	<view class="newFuture">
		<p class="titleNew">近期上新</p>
		<view class="textNew">NEW</view>
		<p class="all">全部</p>
		<view class="boxx"></view>
	</view>
	
	<!-- scroll-view -->
	<scroll-view  scroll-x="true">
		<view class="box2">
			<view  class="scroll-view-item" v-for="item in newFutureList" :key="item.id">
				<view class="leftbox">
					<image :src="item.mainImage" mode=""></image>
					<p class="title">{{item.title}}</p>
					<p class="uname">{{item.nickName}}</p>
					<span class="money">{{item.priceDiscount}}</span>
					<span class="number">{{item.studyTotal}}人在学</span>
				</view>
			</view>
		</view> 
	</scroll-view>
</template>

<script>
	import {getRecommend} from '../../api/index/index.js'
	import {reactive,toRefs} from 'vue'
	export default {
		setup(){
			const List=reactive({
				newFutureList:[]
			})
			getRecommend().then(res=>{
				// console.log(res)
				List.newFutureList=res.data.records
			})
			return {
				...toRefs(List)
			}
		}
	}
</script>

<style>
	.number{
		padding-left: 15px;
	}
	.money{
		color: red;
		padding-left: 10px;
	}
	.uname{
		padding-left: 10px;
		padding-top: 5px;
	}
	.title{
		font-weight: 600;
		padding-left: 10px;
	}
	.scroll-view-item{
		width:200%;
		height: 200px;
	}
	.box2{
		display: flex;
		flex-wrap: nowrap;
	}
	
	.leftbox{
		width: 160px;
		height:200px;
		border-radius: 25rpx;
		box-shadow: 2px 5px 5px #ccc;
		margin-left: 10px;
		margin-top: 10px;
	}
	image{
		width: 90%;
		height: 40%;
		margin-top: 8px;
		margin-left: 7px;
		border: 1px solid #ccc;
		border-radius: 25rpx;
	}
	.newFuture {
		width: 100%;
		margin-top: 30px;
		height: 30px;
		
	}
	
	.titleNew {
		font-size: 22px;
		float: left;
		margin-left: 15px;
		line-height: 30px;
	}
	
	.textNew {
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