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

export {
	getSwiper,
	getTitle,
	getRecommend
}
