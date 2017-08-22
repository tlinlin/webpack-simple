<template>
    <div>
        <h1 class="bg-blue title">{{msg}}</h1>
        <slot name="CPU">这儿插你的CPU</slot>
        <slot name="GPU">这儿插你的显卡</slot>
        <slot name="Memory">这儿插你的内存</slot>
        <slot name="Hard-drive">这儿插你的硬盘</slot>
    </div>
</template>
<script>
	export default {
		data() {
			return {
				msg: 'Your computer config'
			}
		},
		components: {
		
        }
	}
</script>