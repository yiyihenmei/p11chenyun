<template>
	<view class="box">
		<view class="close">
			<uni-icons class="textClose" @click="textClose" type="closeempty" size="30"></uni-icons>
		</view>
		<view class="box2">
			<p class="p1">欢迎回来！</p>
		</view>
		<view class="box3">
			<view class="box33">
				<p class="telNumber">手机号码</p>
				<input class="telphone" placeholder="请输入手机号码" v-model="test"/>
			</view>
		</view>
		<view class="box3">
			<view class="box33">
				<p class="telNumber">验证码</p>
				<input v-model="test2" class="telphone" placeholder="请输入手机验证码"/>
				<button class="yzm" @click="yzm" v-if='time==0'>获取验证码</button>
				<button class="yzm" v-else>{{time}}</button>
			</view>
		</view>
		<button class="loginBtn" @click="loginBtn">登录</button>
	</view>
</template>

<script>
	import{loginList} from '@/api/index/index.js'
	import{useRouter}from 'vue-router'
	import {ref,reactive,toRefs} from 'vue'
	export default{
		setup(){
			const router=useRouter()
			const test=ref('')
			const data=reactive({
				test2:'',
				time:0
			})
			const yzm=()=>{
				uni.showToast({
					title:'发送成功！',
					icon:'none'
				})
				data.time=60
				let times=setInterval(()=>{
					data.time--
					if(data.time==0){
						clearInterval(times)
					}
				},1000)
			}
			const textClose=()=>{
				uni.navigateBack({
					delta:2
				})
			}
			// 登录按钮
			const loginBtn=()=>{
				let a=test.value.length
				if(test.value=='' && a!=11){
					uni.showToast({
						title:'请输入有效手机号',
						icon:'none'
					})
				}else if(data.test2.length!=6){
					uni.showToast({
						title:'验证码输入错误',
						icon:'none'
					})
				}else{
					uni.showToast({
						title:'登录成功',
						icon:'none'
					})
					loginList(data.test2,test.value).then(res=>{
						console.log(res);
						// 获取名字信息
						localStorage.setItem('token',JSON.stringify(res.data))
					    router.go(-1)
					})
				}
			}
			return {
				textClose,
				test,
				loginBtn,
				...toRefs(data),
				yzm
			}
		}
	}
</script>

<style>
	.yzm{
		position: absolute;
		top: 35px;
		right: 0px;
		width: 100px;
		height: 38px;
		line-height: 38px;
		font-size: 14px;
		color: #fff;
		background-color:rgb(62, 92, 187);
	}
	.loginBtn{
		width: 90%;
		margin-top: 20px;
		border-radius: 8px;
		height: 50px;
		border: none;
		background-color: rgb(62, 92, 187);
		color: #fff;
	}
	.telphone{
		padding-top: 10px;
		font-size: 18px;
	}
	.box3{
		width: 90%;
		margin: auto;
	}
	.box33{
		position: relative;
		margin-top: 20px;
		width: 100%;
		background-color: #f5f5f5;
		padding:10px 10px;
		box-sizing: border-box;
		border-radius: 5px;
	}
	.p1{
		font-size: 25px;
		padding-left: 20px;
	}
	.textClose{
		font-size: 25px;
		padding-left: 25px;
		padding-top: 20px;
	}
	.close{
		width: 100%;
		height: 110px;
		margin-top: 20px;
	}
	.box{
		width: 100%;
	}
	
</style>