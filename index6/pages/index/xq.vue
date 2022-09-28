<template>
	<!-- 详情 -->
	<view class="xq">
		<!-- 图 -->
		<view class="tu">
			<image :src="tuList.mainImage" mode=""></image>
		</view>
		<view class="title" v-for="item in textList" :key="item.id">
			<span class="priceDiscount">￥{{item.priceDiscount}}</span>
			<span class="priceOriginal">￥{{item.priceOriginal}}</span>
			
		</view>
	</view>
	
</template>

<script>
	import {indexTu} from '../../api/index/index.js'
	import {toRefs,reactive} from 'vue'
	export default{
		setup(){
			const List=reactive({
				tuList:[],
				textList:[]
			})
			indexTu().then(res=>{
				console.log(res);
				List.tuList=res.data
				List.textList=res.data
			})
			return{
				...toRefs(List)
			}
		}
	}
</script>

<style>
	.title{
		margin-top: 100px;
		width: 100%;
		height: 100px;
		background-color: #fff;
	}
	.priceDiscount{
		color: red;
	}
	body{
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
	}
	.xq{
		width: 100%;
	}
	.tu {
		width: 100%;
		height: 150px;
	}
	image{
		width: 100%;
	}
</style>
