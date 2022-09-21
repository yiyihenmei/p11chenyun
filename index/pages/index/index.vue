<template>
	<view class="content">
		<view class="background">
			<search/>
			<swiperBanner/>
		</view>
		<indexList/>
		<hot/>
		<new/>
		<freeChoice/>
		<payMoney :payList='payList'/>
	</view>
	<view class="line-bottom">- - - - - - -我是有底线的- - - - - - -</view>
	
</template>

<script>
import {getRecommend} from '../../api/index/index.js'
import { reactive,toRefs } from "vue";
	export default{
		// 监听页面的上拉加载事件
		onReachBottom() {
			console.log('上拉加载了');
			if(this.pagenum*this.pagesize>this.total){
				// return false
				uni.showToast({
					title:'没有更多数据了'
				})
			}else{
				let abc=this.pagenum++;
				getRecommend(abc).then(res=>{
					// console.log(res);
					this.payList=[...this.payList,...res.data.records]
				})
			}
		},
		setup(){
			// 页数 
			const query=reactive({
				payList:[],
				pagenum:1,
				pagesize:10,
				total:0
			})
			
			//接口
			getRecommend().then(res=>{
				// console.log(res);
				query.payList=res.data.records
				query.total=res.data.total
			})
			return {
				...toRefs(query)
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
		
	}
	.background{
		width: 100%;
		height: 420rpx;
		overflow: hidden;
		text-align: center;
	}
	
</style>
