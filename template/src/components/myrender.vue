<script>
	export default {
		data() {
			return {
				msg: 'Your computer config',
			}
		},
        render: function (createElement) {
	        return createElement(
		        'h' + this.level,  // tag name 标签名称
                {
	                'class': {
		                foo: true,
		                bar: false
	                },
	                style: {
		                color: 'red',
		                fontSize: '14px'
	                },
                }
	        )
        },
		props: {
			level: {
				type: Number,
				required: true
			}
		}
	}
</script>