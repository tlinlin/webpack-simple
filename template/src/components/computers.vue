<template>
	<div class="computer">
		<myslots>
			<div slot="CPU">{{cpu}}</div>
			<div slot="GPU">{{gpu}}</div>
			<div slot="Memory">{{memeray}}</div>
		</myslots>
	</div>
</template>
<script>
import myslots from "./myslots.vue";
import { getRequest } from "../utils/axiosConfig";
import URL from "../utils/url";
export default {
	data() {
		return {
			msg: 'Your computer config',
			cpu: 'Intel Core i10',
			gpu: 'gtx1080',
			memeray: 'Kingston 32G',
			message: "hello"
		}
	},
	components: {
		myslots
	},
	created() {
		const data= {
				id:1,
				name:"zhangsan"
		}
		getRequest(URL.test,"get",data).then(res=>{
		//	console.log(res,"+++++++++++++++++++++++++++=")
		})

		const postData = {
			name: "lisi",
			age: 23
		}

		getRequest(URL.home,"post",postData).then(res=>{
		//	console.log(res,"+++++++++++++++++++++++++++=post")
		})
	}
}
</script>
<style>
	.computer {
		color: red;
		background-color: blue;
	}
</style>
