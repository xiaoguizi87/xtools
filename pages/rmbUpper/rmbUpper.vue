<template>
	<view class='margin-xl text-center'>
		<text class='text-xxl'>人民币大小写转换</text>
		<form>
			<view class="cu-form-group margin-top  text-lg">
				<view class="title">小写:</view>
				<input placeholder="160" name="input" v-model="lowNum" type="number"></input>
			</view>
			<view class="cu-form-group margin-top  text-lg">
				<view class="title">大写:</view>
				<input placeholder="160" name="input" v-model="highNum"></input>
			</view>
			<button class="bg-green margin-top" @click="run()">计算</button>
		</form>
		<view v-if='clicked' class="text-xl margin-top">
			您的bmi是：{{bmi}}
		</view>
		<button class='cu-tag radius shareBtn bg-gradual-green' open-type="share">分享</button>
	</view>
</template>

<script>
	/** 数字金额大写转换(可以处理整数,小数,负数) */
	function smalltoBIG(n) {
		var fraction = ['角', '分'];
		var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
		var unit = [
			['元', '万', '亿'],
			['', '拾', '佰', '仟']
		];
		var head = n < 0 ? '欠' : '';
		n = Math.abs(n);

		var s = '';

		for (var i = 0; i < fraction.length; i++) {
			s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
		}
		s = s || '整';
		n = Math.floor(n);

		for (var i = 0; i < unit[0].length && n > 0; i++) {
			var p = '';
			for (var j = 0; j < unit[1].length && n > 0; j++) {
				p = digit[n % 10] + unit[1][j] + p;
				n = Math.floor(n / 10);
			}
			s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
		}
		return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
	}

	export default {
		data() {
			return {
				lowNum: 0,
				highNum: 0,
				clicked: false
			}
		},
		methods: {
			run: function() {
				this.highNum = smalltoBIG(this.lowNum)
			}
		},
		onShareAppMessage: function(options) {
			console.log('分享的代码！！')
		}
	}
</script>

<style lang="scss">
	.shareBtn {
		position: fixed;
		bottom: 300rpx;
		right: 10rpx;
	}
</style>
