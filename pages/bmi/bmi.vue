<template>
	<view class='margin-xl'>
		<form>
			<view class="cu-form-group margin-top  text-lg">
				<view class="title">身高(cm):</view>
				<input placeholder="160" name="input" v-model="height"></input>
			</view>
			<view class="cu-form-group text-lg">
				<view class="title">体重(kg):</view>
				<input placeholder="60" name="input" v-model="weight"></input>
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
	export default {
		data() {
			return {
				height: 160,
				weight: 60,
				bmi: '0',
				clicked: false
			}
		},
		methods: {
			run: function() {
				let b = parseFloat(this.weight) / (parseFloat(this.height) * parseFloat(this.height)) * 10000;
				console.log(b)
				this.bmi = b.toFixed(2);
				this.clicked = true
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
