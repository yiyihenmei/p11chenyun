<template>
	<view class="box">
		<uni-icons type="back" size="30" @click="$router.go(-1)"></uni-icons>
		<p class="textAbout">意见反馈</p>
	</view>
	<view class="box2">
		<!-- radio组件 -->
		<view class="box22">
			<view class="uni-padding-wrap">
				<radio-group class="radiobox">
					<label class="radio"><radio value="r1" checked="true" />内容意见</label>
					<label class="radio"><radio value="r2" />产品建议</label>
					<label class="radio"><radio value="r3" />其他</label>
				</radio-group>
			</view>
		</view>
		<!-- 意见框 -->
		<view class="box3">
			<textarea v-model="test1" name="" id="" cols="30" rows="10" placeholder="请填写具体内容帮助我们了解您的意见和建议"></textarea>
		</view>
		<input class="qq" type="text" placeholder="填写您的QQ" v-model="test2">
		<input class="wx" type="text" placeholder="填写您的微信" v-model="test3">
		<button class="tj" @click="tj">提交</button>
	</view>
	
</template>

<script>
import { reactive,toRefs } from "vue"
	export default {
		setup(){
			const List=reactive({
				test1:'',
				test2:'',
				test3:''
			})
			const tj=()=>{
				if(List.test1.length<9){
					uni.showToast({
						title:'反馈内容至少输入10个字',
						icon:"none"
					})
				}else if(List.test2.length<6){
					uni.showToast({
						title:'QQ输入错误',
						icon:"none"
					})
				}else if(List.test3.length<5){
					uni.showToast({
						title:'微信输入错误',
						icon:"none"
					})
				}else{
					uni.showToast({
						title:'您的意见反馈成功',
					})
					List==''
				}
			}
			return {
				...toRefs(List),
				tj
			}
		}
	}
</script>

<style>
	input{
		margin: 10px 20px;
		width: 90%;
		height: 40px;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding-left: 10px;
	}
	.tj{
		width: 90%;
		color: #fff;
		background-color: rgb(52, 120, 246);
	}
	textarea{
		font-size: 14px;
	}
	.box3{
		width: 90%;
		height: 200px;
		border: 1px solid #ccc;
		border-radius: 5px;
		margin: auto;
		margin-top: 20px;
	}
	.radio{
		padding: 0 5px;
	}
	.radiobox{
		width: 100%;
		padding-top: 15px;
		padding-left: 40px;
	}
	.box2{
		width: 100%;
		
	}
	.uni-icons{
		padding-top: 10px;
		padding-left: 10px;
	}
	body{
		background-color: #f5f5f5;
	}
	.box{
		display: flex;
		width: 100%;
		height: 50px;
		background-color: #fff;
	}
	.textAbout{
		font-size: 18px;
		text-align: center;
		padding-left: 102px;
		padding-top: 15px;
		font-weight: 600;
	}

</style>