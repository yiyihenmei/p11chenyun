import api from '@/api/api.js'

// 轮播图
const getSwiper = async () => {
	let data = await api({
		url: '/article/api/advert/show/1',
	})
	return data
}
// 首页导航列表
const getTitle = async()=>{
 let data=await api({
  url:'/article/api/category/label/list'
 })
 return data
}
// 首页热门推荐数据 / 首页近期上新数据
const getRecommend =async()=>{
	let data=await api({
		url:'/course/api/course/search',
		method:'post'
	})
	return data
}
// 阅读数据渲染
const getReading =async()=>{
	let data=await api({
		  url:'article/api/article/search',
		  method:'post'
	})
	return data
}
// 问答数据渲染
const getQuestion =async()=>{
	let data=await api({
		  url:'question/api/question/hot',
		  method:'post'
	})
	return data
}
// 首页详情图
const indexTu = async ()=>{
	let data=await api({
		url:'course/api/course/null',
	})
	return data
}
// 登录
const loginList = async (code,mobile)=>{
	let data=await api({
		url:'auth/login',
		method:'post',
		data:{
			code,
			mobile
		}
	})
	return data
}


export {
	getSwiper,
	getTitle,
	getRecommend,
	getReading,
	getQuestion,
	indexTu,
	loginList
}
