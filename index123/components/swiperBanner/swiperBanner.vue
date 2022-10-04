<template>
	<view class="home-wrapper">
	<view class="bigbox">
		<swiper circular :indicator-dots="true" :autoplay="true"  :duration="500" style="height: 400px;">
			<swiper-item @click="xq" v-for="item in swiperList" :key="item.id" :style="`background-image:linear-gradient(${item.background},#fff)`">
				<view class="swiper-item uni-bg-red">
					<image :src="item.imageUrl"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
	</view>
</template>
 
<script>
	import {getSwiper} from '../../api/index/index.js'
	import {reactive,toRefs}from 'vue'
	export default {
		setup(){
			const xq=()=>{
				uni.navigateTo({
					url:'../../pages/index/xq'
				})
			}
			const List=reactive({
				swiperList:[]
			})
			getSwiper().then(res=>{
				// console.log(res)
				List.swiperList=res.data
			})
			return {
				...toRefs(List),
				xq
			}
		}
	}
</script>

<style>
swiper-item{
	padding-top: 100rpx;
}

.bigbox{
	/* height: 400px; */
}
image{
	border-radius: 25rpx;
	height: 305rpx;
}
	
</style>