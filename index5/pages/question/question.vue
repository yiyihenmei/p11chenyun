<template>
	<view class="box">
		<!-- 搜索 -->
		<view class="headerSearch">
			<search />
		</view>
		<!-- 导航栏 -->
		<view class="nav">
			<ul>
				<li>热门问答</li>
				<li>最新问题</li>
				<li>等待回答</li>
			</ul>
		</view>
		<!-- 内容渲染 -->
		<view class="content" v-for="item in questionContentList" :key="item.id">
			<view class="bigbox">
				<p class="title">{{item.title}}</p>
				<view class="smallbox">
					<p class="num">{{item.reply}} 回答</p>
					<p class="look">{{item.viewCount}} 浏览</p>
					<p class="uname">{{item.nickName}}</p>
					<p class="date">{{item.updateDate.slice(0,10)}}</p>
				</view>
			</view>
		</view>
		<view class="line-bottom">-end-</view>
	</view>
</template>

<script>
	import {getQuestion} from '../../api/index/index.js'
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
				getQuestion(aaa).then(res=>{
					this.questionContentList=[...this.questionContentList,...res.data.records]
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
				questionContentList:[]
			})
			// 请求内容数据接口
			getQuestion().then(res=>{
				console.log(res);
				List.questionContentList=res.data.records
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
	.smallbox{
		width: 100%;
		padding-top: 10px;
	}
	.look{
		padding-left: 10px;
		color: #ccc;
		font-size: 14px;
		float: left;
	}
	.num{
		font-size: 14px;
		color: #ccc;
		font-size: 14px;
		float: left;
		padding-left: 10px;
	}
	.date{
		color: #ccc;
		font-size: 14px;
		float: right;
		margin-right: 10px;
	}
	.uname{
		padding-right: 10px;
		font-size: 14px;
		color: #ccc;
		float: left;
	}
	.line-bottom{
		padding-top: 20px;
		padding-bottom: 10px;
		text-align: center;
		font-size:16px;
		padding-bottom: 30px;
	}
	.title{
		font-size: 18px;
		font-weight: 600;
		padding-top: 20px;
		padding-bottom: 10px;
		padding-left: 10px;
	}
	.bigbox{
		width: 100%;
	}
	.content{
		width: 100%;
		height: 100px;
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

	.headerSearch {
		width: 100%;
		height: 50px;
		background-color: #3f5bbc;
	}

	.nav {
		width: 100%;
		border-bottom: 1px solid #ccc;
	}
	ul{
		padding: 0;
		margin: 0;
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-around;
		flex-wrap: nowrap;
	}
	li{
		list-style: none;
		line-height: 50px;
	}

</style>

