<template>
	<view class="margin-xl text-lg">
		<view class="cu-form-group margin-top">
			<view class="text-xl title">最小值:</view>
			<input placeholder="1" name="input" v-model="zuixiao"></input>
		</view>
		<view class="cu-form-group">
			<view class="text-xl title">最大值:</view>
			<input placeholder="10" name="input" v-model="zuida"></input>
		</view>
		<view class="cu-form-group">
			<view class="text-xl title">生成数:</view>
			<input placeholder="1" name="input" v-model="zongshu"></input>
		</view>
		<button class="bg-green margin-top" @click="chufa">生成随机数</button>
		<view v-if='hasClicked' class="text-xl margin-top">生成的随机数是: {{ sui }}</view>
		<button class='cu-tag radius shareBtn bg-gradual-green' open-type="share">分享</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				zuixiao: '1',
				zuida: '10',
				zongshu: '2',
				sui: '',
				hasClicked: false
			}
		},
		methods: {
			chufa: function() {
				var [min, max, js] = [this.zuixiao, this.zuida, this.zongshu]
				var num = new Set()
				if (max - min + 1 < js) {
					alert('生成数过多')
					js = -1
				}

				while (Array.from(num).length < js) {
					num.add(Number(Math.floor(Math.random() * (max - min + 1) + min)) + Number(min))
				}
				this.sui = Array.from(num).sort((x, y) => x - y).join(", ")
				this.hasClicked = true
			}
		},
		onShareAppMessage: function(options) {
			console.log('分享的代码！！')
		}
	}
</script>

<style>
	.shareBtn {
		position: fixed;
		bottom: 300rpx;
		right: 10rpx;
	}
</style>
