<template>
  <div class="nav">
    <div class="wrapper">
      <img src="../assets/images/logo.png" />
      <div class="menu">
        <div v-for="(item,index) in menuList" :key="index" @click="changePage(index)">{{item}}</div>
      </div>
      <div class="search">
        <input type="text" placeholder="搜索" />
        <div class="clear">×</div>
        <div class="search-icon">
          <img src="../assets/images/search.png" />
        </div>
      </div>
      <div class="flex user">
        <div class="login">登录</div>/
        <div class="reg">注册</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
const RouterJump = () => {
  const router = useRouter();
  const changePage = (index: number) => {
    //单页面路由跳转
    switch (index) {
      case 0:
        router.push("/home");
        break;
      case 1:
        router.push("/pics");
        break;
      case 2:
        router.push("/note");
        break;
      case 3:
        router.push("/download");
        break;
      case 4:
        router.push("talk");
        break;
      default:
        router.push("/home");
        break;
    }
  };
  return {
    changePage
  };
};
export default {
  setup(props: any, context: any) {
    const menuList = ref(["首页", "图库", "笔记", "下载", "论坛"]);
    console.log(menuList.value);

    // const data = reactive({
    //   menuList: ["首页", "图库", "笔记", "下载", "论坛"]
    // });
    const active = ref(0);
    const { changePage } = RouterJump();
    return {
      menuList,
      changePage
    };
  }
};
</script>

<style lang="scss">
.nav {
  height: 60px;
  background-color: rgba(245, 245, 235, 0.4);
  div {
    display: flex;
  }
  .wrapper {
    height: 100%;
    align-items: center;
    justify-content: space-between;
    > .menu {
      flex: 1;
      height: 100%;
      align-items: center;
      justify-content: space-around;
      > div {
        flex: 1;
        height: 100%;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-sizing: border-box;
      }:hover{
        background-color: rgba(13, 13, 14, 0.7);
        color:#fff;
      }.active{
        border-bottom: 4px solid rgb(13, 13, 14);
      }
    }
    > .search {
      width: 250px;
      background-color: #fff;
      border-radius: 26px;
      height: 30px;
      padding: 0 2px;
      box-sizing: border-box;
      align-items: center;
      justify-content: space-between;
      input {
        border-bottom-left-radius: 26px;
        border-top-left-radius: 26px;
        width: 70%;
        height: 100%;
        box-sizing: border-box;
        border: none;
        outline: none;
        padding-left: 13px;
      }
      .clear {
        width: 20px;
        height: 20px;
        background-color: #ccc;
        justify-content: center;
        align-items: center;
        color: #fff;
        border-radius: 50%;
        margin-right: 2px;
      }
      .search-icon {
        width: 20%;
        height: 80%;
        background-color: #eee;
        border-radius: 15px;
        justify-content: center;
        align-items: center;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
    .user {
      justify-content: flex-end;
      margin-left: 20px;
    }
  }
}
</style>