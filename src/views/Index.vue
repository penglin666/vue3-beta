<template>
  <div class="index">
    <Nav />
    <div class="main">
      <Content />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "@/components/nav.vue";
import Content from "@/components/content.vue";
import Footer from "@/components/footer.vue";
export default defineComponent({
  name: "Index",
  components: {
    Nav,
    Content,
    Footer
  }
});
</script>

<style lang="scss">
.index {
  display: flex;
  height: 100vh;
  flex-direction: column;
  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px 0;
  }
}
</style>
