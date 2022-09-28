<template>
	<!-- header -->
	<view class="box">
		<uni-icons class="back1" type="back" size="30" @click="$router.go(-1)"></uni-icons>
		<p class="textAbout">个人资料</p>

	</view>
	<!-- 头像用户名 -->
	<view class="box2">
		<view class="box3">
			<p class="p1">头像</p>
			<view class="jt rightbox"></view>
		</view>
		<view class="box4">
			<p class="p1">用户名</p>
			<view class="box33">
				<p class="p2">Scott</p>
				<view class="jt rightbox"></view>
			</view>
		</view>
		<view class="box4">
			<p class="p1">手机号</p>
			<view class="box33">
				<p class="p2">1552</p>
				<view class="jt rightbox"></view>
			</view>
		</view>
	</view>
	<!-- 昵称、性别-->
	<view class="box5">
		<view class="box6">
			<p class="p1">昵称</p>
			<view class="box7">
				<p class="p2">何秀英</p>
				<view class="jt rightbox"></view>
			</view>

		</view>
	</view>
	<view class="box55">
		<view class="box6">
			<p class="p1">性别</p>
			<view class="box7">
				<p class="p2">男</p>
				<view class="jt rightbox"></view>
			</view>

		</view>
	</view>
	<!-- 弹出层 -->
			<uni-section title="对话框示例" type="line" class="hideOnPc">
				<view class="example-body box">
					<button class="button popup-info" @click="dialogToggle('info')"><text class="button-text info-text">信息</text></button>
				</view>
			</uni-section>
</template>

<script>
	import {
		reactive,
		toRefs
	} from "vue"
	export default {
		setup() {
			const List = reactive({
				test1: '',
				test2: '',
				test3: '',
			})
			const tj = () => {
				if (List.test1.length < 9) {
					uni.showToast({
						title: '反馈内容至少输入10个字',
						icon: "none"
					})
				} else if (List.test2.length < 6) {
					uni.showToast({
						title: 'QQ输入错误',
						icon: "none"
					})
				} else if (List.test3.length < 5) {
					uni.showToast({
						title: '微信输入错误',
						icon: "none"
					})
				} else {
					uni.showToast({
						title: '您的意见反馈成功',
					})
					List == ''
				}
			}
			
		const dialogToggle=()=>{
			console.log(123);
		}
		
			return {
				...toRefs(List),
				tj,
				dialogToggle
			
			}
		}
	}
</script>

<style>
	.example-body {
		margin-top: 20px;
	}

	.box55 {
		width: 100%;
		background-color: #fff;
		border-top: 1px solid #ccc;
	}

	.p4 {
		flex: 1;
	}

	.box7 {
		width: 300px;
		display: flex;
	}

	.box6 {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.box5 {
		width: 100%;
		background-color: #fff;
		margin-top: 10px;
	}

	.box4 {
		width: 100%;
		height: 60px;
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		border-top: 1px solid #ccc;
	}

	.p2 {
		flex: 1;
	}

	.rightbox {}

	.box33 {
		width: 300px;
		display: flex;
	}

	.box2 {
		width: 100%;
		background-color: #fff;
	}

	.p1 {
		padding-left: 20px;
		font-size: 18px;
		line-height: 60px;
	}

	.p2 {
		padding-left: 200px;
		font-size: 18px;
		line-height: 60px;
	}

	.box3 {
		width: 100%;
		height: 60px;
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
	}

	.jt {
		width: 10px;
		height: 10px;
		border-top: 2px solid #ccc;
		border-right: 2px solid #ccc;
		transform: rotate(45deg);
		margin-top: 25px;
		margin-right: 20px;
	}

	.back1 {
		padding-top: 12px;
		padding-left: 15px;
	}

	.btn {
		width: 100%;
		height: 50px;
		background-color: #fff;
		line-height: 50px;
	}

	body {
		background-color: #f5f5f5;
	}

	.box {
		display: flex;
		width: 100%;
		height: 50px;
		background-color: #fff;
	}

	.textAbout {
		font-size: 18px;
		text-align: center;
		padding-left: 100px;
		padding-top: 15px;
		font-weight: 600;
	}
</style>
