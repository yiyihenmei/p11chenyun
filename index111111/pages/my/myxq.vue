<!--  我的个人资料 -->
<template>
	<view class="box">
		<view class="header">
			<uni-icons type="back" size="30" @click="$router.go(-1)"></uni-icons>
			<text class="txt">设置</text>
		</view>
		<ul class="u1">
			<li class="li1">
				<p>头像</p>
				<p>
					<img :src="user.userInfo.imageUrl" alt="">
					<span>></span>
				</p>
			</li>
			<li>
				<p>用户名</p>
				<p>
					<span>{{user.userInfo.nickName}}</span>
					<span>></span>
				</p>
			</li>
			<li>
				<p>手机号</p>
				<p>
					<span>{{user.userInfo.mobile}}</span>
					<span>></span>
				</p>
			</li>
		</ul>
		<ul class="u2">
			<li>
				<p>昵称</p>
				<p>
					<span>{{user.userInfo.username}}</span>
					<span>></span>
				</p>
			</li>
			<li>
				<p>性别</p>
				<p>
					<span v-if="user.sex==0">男</span>
					<span v-else>女</span>
					<span>></span>
				</p>
			</li>
		</ul>
		<button @click="signout">退出登录</button>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog  title="你确定要退出吗？" :duration="2000" :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
		</uni-popup>

	</view>
</template>

<script>
	import {useRoute,useRouter} from 'vue-router'
	import {reactive,toRefs,ref} from 'vue'
	export default {
		setup() {
			const router =useRouter()
			const popup=ref(null)
			const List=reactive({
				user:{},
			})
		 List.user=JSON.parse(localStorage.getItem('token'))
		 console.log(List.user);
		 const signout=()=>{
			 
			 popup.value.open()
			
		 }
		 // 关闭
		 const close=()=>{
			 console.log(12);
			 popup.value.close()
		 }
		 // 确定关闭
		 const confirm=()=>{
			 console.log(1);
			 router.push('/pages/my/my')
			 sessionStorage.clear()
		 }
		 return {
			 ...toRefs(List),
			 signout,
			 popup,
			 close,
			 confirm
		 }
		}
	}
</script>

<style lang="scss">
	.header{
		height: 50px;
		background-color: #fff;
	}
	.txt{
		line-height: 50px;
		padding-left: 140px;
		font-size: 18px;
		font-weight: 600;
	}
	.box{
		width: 100%;
		height: 100vh;
		background-color: #f8f9fb;
	}
	*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.u1{
		margin-top: 10px;
		li{
			display: flex;
			justify-content: space-between;
			height: 100rpx;
			line-height: 100rpx;
			border: 1px solid #f6f6f9;
			box-sizing: border-box;
			padding: 0 20rpx;
			background-color: #fff;
			img{
				width: 60rpx;
				height: 60rpx;
				position: relative;
				top: 20rpx;
			}
			p {
				span:nth-child(2){
					margin-left: 20rpx;
					font-size: 40rpx;
					color: #ccc;
				}
			}
		}
		.li1{
			height: 120rpx;
			line-height: 120rpx;
		}
	}
	.u2{
		margin-top: 20rpx;
		li{
			display: flex;
			justify-content: space-between;
			height: 100rpx;
			line-height: 100rpx;
			border: 1px solid #f6f6f9;
			box-sizing: border-box;
			padding: 0 20rpx;
			background-color: #fff;
			img{
				width: 60rpx;
				height: 60rpx;
			}
			p {
				span:nth-child(2){
					margin-left: 20rpx;
					font-size: 40rpx;
					color: #ccc;
				}
			}
		}
	}
	button{
		background-color: #fff;
		margin-top: 50rpx;
		height: 100rpx;
		line-height: 100rpx;
		border: 0;
	}
	img{
		border-radius: 50%;
	}
</style>
