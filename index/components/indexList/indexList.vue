<template>
	<ul>
		<li v-for="item in 	getadd" :key="item.id">
			{{item.name}}
		</li>
	</ul>
	
</template>

<script>
	import {getTitle} from '../../api/index/index.js'
	import{reactive,toRefs} from 'vue'
	export default{
		setup(){
			
			const data = reactive({
				getadd:[]
			})
			getTitle().then(res=>{
				// console.log(res);
				data.getadd=res.data.slice(0,8)
			})
			return {
				...toRefs(data)
			}
		}
	}
</script>

<style>
	
	ul{
		padding: 0;
		margin: 0;
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-top: 30rpx;
	}
	li{
		list-style: none;
		cursor: pointer;
		height: 60rpx;
		width: 150rpx;
		background-color: red;
		line-height: 55rpx;
		margin: 10px 5px;
		text-align: center;
		border-radius: 15rpx;
		align-content: center;
		background-color: #f5f5f5;
	}
</style>