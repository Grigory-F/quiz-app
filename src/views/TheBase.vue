<template>
  <main class="main-container">
    <Aside></Aside>
    <div class="content-box">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import Aside from '@/components/TheAside.vue'
export default {
  components: {
    Aside
  }
}
</script>

<style>
</style>
