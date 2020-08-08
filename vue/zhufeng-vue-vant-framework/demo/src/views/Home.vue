<template>
  <div class="home">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <h1>当前数据是：{{$store.state.number}}</h1>
    <van-button type="primary" :loading="loading" @click="addOne">按钮</van-button>
    <!-- {{$store.state.myLoading.effect.oneAsync}} -->
  </div>
</template>

<script>
import { Swipe, SwipeItem,Button} from "vant";
import { mapActions,mapState } from "vuex";
export default {
  name: "Home",
  data(){
    return {
       images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ]
    }
  },
  computed:{
    ...mapState({loading:state=>state.myLoading.effect["oneAsync"]})
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Button.name]:Button
  },
  methods:{
    ...mapActions(["oneAsync"]),
    addOne(){
      this.oneAsync(1);
    }
  }
};
</script>
<style scoped>
  img{
    width: 100%;
  }
</style>
