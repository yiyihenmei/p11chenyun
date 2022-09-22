<template>
	<view class="viewCate">
		<view class="header">
			<span class="textCate">分类</span>
			<uni-icons class="fontCate" type="search" size="25" color="#fff"></uni-icons>
		</view>
		<view class="" style="height: 45px;">
			
		</view>
		<view class="bigbox">
			<ul class="leftbox">
				<li @click="navCate(item.id)" :class="active==item.id? 'active':''" v-for="item in navList" :key="item.id">{{item.name}}</li>
			</ul>
			<view class="rightbox">
				<view class="rightboxsmall" >
					<view class="textList" v-for="item in textList" :key="item.id">{{item.name}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {getTitle} from '../../api/index/index.js'
	import {reactive,toRefs} from 'vue'
	export default{
		setup(){
			const navCate=(id)=>{
				console.log(id);
				List.active=id
				List.navList.forEach(item=>{
					if(item.id==id){
						List.textList=item.labelList
					}
				})
			}
			const List=reactive({
				navList:[],
				textList:[],
				active:0
			})
			getTitle().then(res=>{
				console.log(res);
				List.navList=res.data
			})
			return {
				...toRefs(List),
				navCate
			}
			
		},
	}
</script>

<style>
	.active{
		color:#3f5bbc;
		border-left: 1px solid #3f5bbc;
	}
	.rightboxsmall{
		width: 100%;
		height: 120px;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.textList{
		margin-top: 20px;
		width: 80px;
		height: 35px;
		border: 1px solid #ccc;
		border-radius: 35rpx;
		text-align: center;
		line-height: 35px;
		font-size: 12px;
	}
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
	}
	.rightbox{
		width: 260px;
		position: fixed;
		right: 0;
		top: 45px;
	}
	.leftbox{
		width: 110px;
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
		position: fixed;
		top: 0;
		left: 0;
	}
	.textCate{
		color: #fff;
		font-size: 20px;
		font-weight: 500;
		line-height: 45px;
	}
</style>
