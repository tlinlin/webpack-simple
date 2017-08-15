<template>
	<div class="computer">
		<myslots>
			<div slot="CPU">{{cpu}}</div>
			<div slot="GPU">{{gpu}}</div>
		</myslots>
	</div>
</template>
<script>
import myslots from "./myslots.vue";
export default {
	data() {
		return {
			msg: 'Your computer config',
			cpu: 'Intel Core i10',
			gpu: 'gtx1080',
			message: "hello"
		}
	},
	components: {
		myslots
	}
}
</script>
<style>
	.computer {
		color: red;
		background-color: blue;
	}
</style>
