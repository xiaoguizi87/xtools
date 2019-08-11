async function getRandJoke() {
  let [_, res] = await uni.request({
    url: 'https://v.juhe.cn/joke/randJoke.php?key=707770c240efa4c7cf5d06f4a1e2c121'
  })
  console.log('xxx', res)
  return res.data.result
}

export default {
  getRandJoke
}