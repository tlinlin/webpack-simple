<template>
    <div>
        <h1 class="bg-blue title">{{msg}}</h1>
        <myrender :level="1"></myrender>
        <h1 class="sub-title">{{msg}}</h1>
    </div>
</template>
<script>
    import myrender from "./myrender.vue";
	export default {
		data() {
			return {
				msg: 'Your computer config'
			}
		},
		components: {
			myrender
        }
	}
</script>
<style lang="sass" scoped>
	@import "../common/sass/home.scss";
	$lt: left;
	$rt: right;
	$t: top;
	$b: bottom;
	$bbb: #000000;
	.sub-title{
		border-#{$t}:2px $red solid;
		border-#{$rt}: 3px $blue solid;
		border-#{$b}: 4px #acacac solid;
		color:$bbb;

	}
</style>
