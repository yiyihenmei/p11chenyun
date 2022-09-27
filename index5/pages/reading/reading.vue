<template>
	<view class="box">
		<!-- 搜索 -->
		<view class="headerSearch">
			<search />
		</view>
		<!-- 导航栏 -->
		<view class="nav">
			<view>
				<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="20">
					<view class="viewLi">
						推荐
					</view>
					<view id="demo1" class="scroll-view-item_H uni-bg-red" v-for="item in readingList" :key="item.id">
						{{item.name}}
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- 内容渲染 -->
		<view class="content" v-for="item in readingContentList" :key="item.id">
			<view class="leftbox">
				<p class="title">{{item.title}}</p>
				<p class="titleContent">{{item.summary}}</p>
				<span class="uname">{{item.nickName}}</span>
				<span class="date">{{item.updateDate.slice(0,10)}}</span>
				<span class="num">{{item.viewCount}}赞</span>
			</view>
			<image :src="item.imageUrl" mode=""></image>
		</view>
		<view class="line-bottom">-end-</view>
	</view>
</template>

<script>
	import {getReading} from '../../api/index/index.js'
	import {getTitle} from '../../api/index/index.js'
	import {reactive,toRefs} from 'vue'
	export default {
		// 监听上拉加载事件
		onReachBottom(){
			console.log('上拉加载');
			if(this.pagenum*this.pagesize>this.total){
				uni.showToast({
					title:'没有更多内容了'
				})
			}else{
				let aaa=this.pagenum++;
				getReading(aaa).then(res=>{
					this.readingContentList=[...this.readingContentList,...res.data.records]
				})
			}
		},
		setup() {
			const query=reactive({
				pagenum:1,
				pagesize:10,
				total:0
			})
			const List = reactive({
				// 导航栏定义一个空数组
				readingList: [],
				// 内容定义一个空数组
				readingContentList:[]
			})
			// 请求导航栏数据接口
			getTitle().then(res => {
				// console.log(res);
				List.readingList = res.data
			})
			// 请求内容数据接口
			getReading().then(res=>{
				console.log(res);
				List.readingContentList=res.data.records
				List.total=res.data.records.total
			})
			// 返回
			return {
				...toRefs(List)
			}
		}
	}
</script>

<style>
	.line-bottom{
		padding-top: 20px;
		padding-bottom: 10px;
		text-align: center;
		font-size:16px;
		padding-bottom: 30px;
	}
	image{
		width: 35%;
		height: 80px;
		margin-top: 10px;
		margin-right: 10rpx;
		border-radius: 13px;
	}
	.num{
		padding-left: 10px;
		font-size: 14px;
	}
	.updateDate{
		font-size: 14px;
	}
	.uname{
		padding-right: 10px;
		font-size: 14px;
	}
	.titleContent{
		color: #ccc;
		font-size: 14px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		padding: 10px 0;
	}
	.title{
		font-size: 18px;
		font-weight: 600;
		padding-top: 10px;
	}
	.leftbox{
		width: 60%;
		margin-left: 10px;
	}
	.content{
		width: 100%;
		height: 120px;
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		padding-bottom: 5px;
		border-bottom: 1px solid #ccc;
	}
	.viewLi{
		display: inline;
		padding-left: 22px;
	}
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
		height: 110rpx;
		line-height: 0rpx;
		display: flex;
		flex-wrap: nowrap;
	}

	.scroll-view-item {
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		font-size: 36rpx;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 60px;
		height: 300rpx;
		line-height: 120rpx;
		font-size: 36rpx;
		padding-left: 20px;
	}

	.headerSearch {
		width: 100%;
		height: 50px;
		background-color: #3f5bbc;
	}

	.nav {
		width: 100%;
		border-bottom: 1px solid #ccc;
	}

</style>

