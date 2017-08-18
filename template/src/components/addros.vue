<template>
    <div>
        <h1>{{msg}}</h1>
        <myrender :level="1"></myrender>
        <h1>{{msg}}</h1>
    </div>
</template>
<script>
    import myrender from "./myrender.vue";
	export default {
		data() {
			return {
				msg: 'add routers'
			}
		},
		components: {
			myrender
        }
	}
</script>
<style lang="scss" scoped>
    h1{
        background-color: #cccccc;
    }
</style>
