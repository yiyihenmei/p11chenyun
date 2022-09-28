<template>
	<!-- 免费精选 -->
	<view class="newFuture">
		<p class="titleNew">免费精选</p>
		<view class="textNew">FREE</view>
		<p class="all">全部</p>
		<view class="boxx"></view>
	</view>
	
	<!-- scroll-view -->
	<scroll-view  scroll-x="true">
		<view class="box2">
			<view  class="scroll-view-item" v-for="item in choiceList" :key="item.id">
				<image :src="item.mainImage" mode=""></image>
				<view class="rightbox">
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
				choiceList:[]
			})
			getRecommend().then(res=>{
				// console.log(res)
				List.choiceList=res.data.records
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
		padding-top: 8px;
	}
	.title{
		font-weight: 600;
		padding-left: 10px;
	}
	.scroll-view-item{
		display: flex;
		width:325px;
		height: 110px;
	}
	.box2{
		width:660px;
		display: flex;
	    flex-wrap: wrap;
	}
	
	.rightbox{
		width: 160px;
		height:100px;
		border-radius: 25rpx;
		margin-left: 5px;
		margin-top: 10px;
	}
	image{
		width: 150px;
		height: 90px;
		margin-top: 5px;
		margin-left: 10px;
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