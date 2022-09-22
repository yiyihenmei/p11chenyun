<template>
	<view class="box">
		<!-- 搜索 -->
		<view class="headerSearch">
			<search />
		</view>
		<view class="nav">
			<view>
				<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="20">
					<view id="demo1" class="scroll-view-item_H uni-bg-red" v-for="item in readingList" :key="item.id">{{item.name}}</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getTitle
	} from '../../api/index/index.js'
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup() {
			const List = reactive({
				readingList: []
			})
			getTitle().then(res => {
				console.log(res);
				List.readingList = res.data
			})
			return {
				...toRefs(List)
			}
		}
	}
</script>

<style>
		.scroll-view_H {
			white-space: nowrap;
			width: 100%;
		}
		.scroll-view-item {
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			font-size: 36rpx;
		}
		.scroll-view-item_H {
			display: inline-block;
			width: 100%;
			height: 300rpx;
			line-height: 300rpx;
			text-align: center;
			font-size: 36rpx;
		}
		
	.headerSearch {
		width: 100%;
		height: 50px;
		background-color: #3f5bbc;
	}

	.nav {
		width: 100%;
	}

	ul {
		width: 200%;
		height: 50px;
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: nowrap;
	}

	li {
		list-style: none;
		line-height: 50px;
		text-align: center;
	}
</style>
