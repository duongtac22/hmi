<template>
  <div class="container mx-auto min-w-[1200px] h-screen w-screen bg-blue p-8">

      <div class="flex flex-row gap-8">
          <div class="basis-2/3">
            <Header></Header>

            <Footer></Footer>

          </div>
          <div class="basis-1/3">

            <sider-right></sider-right>

          </div>

      </div>

  </div>
  
</template>

<script>
import Header from './components/Header.vue';

import Footer from './components/Footer.vue';

import SiderRight from './components/SiderRight.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    SiderRight
  }
}
</script>

<style>

</style>
