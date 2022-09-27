<template>
	<input class="header_ipt" type="text" placeholder="搜索你想要的内容" @click='go'>
</template>

<script>
	export default{
		setup(){
			const go=()=>{
				uni.navigateTo({
					url: '../../pages/index/mySearch'
				});
			}
			return {
				go
			}
		}
	}
</script>

<style>
	.header_ipt {
		width: 96%;
		height: 60rpx;
		margin: auto;
		border-radius: 25rpx;
		margin-top: 20rpx;
		background-color: #fff;
		text-align: center;
		position: fixed;
		top: 0px;
		left: 7px;
		z-index: 999;
	}
</style>
