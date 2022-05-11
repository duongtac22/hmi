<template>
  <div class="container mx-auto min-w-[1200px] bg-blue p-8">

      <div class="flex flex-row gap-8">
          <div class="w-2/3">
            <Header></Header>
            
            <div class="main-wrap bg-white rounded-[15px] my-[20px] p-[20px]">
              <div class="flex mx-[-5px] flex-wrap">
                <router-link class="link item px-[5px]" to="/">
                  <div class="w-[80px] h-[80px] mb-[10px] border-blue border-[2px] rounded-[10px] overflow-hidden flex justify-center items-center">
                    <img src="https://via.placeholder.com/40x40?text=icon" alt="">
                  </div>
                </router-link> 

                <router-link class="link item px-[5px]" to="/chart">
                  <div class="w-[80px] h-[80px] mb-[10px] border-blue border-[2px] rounded-[10px] overflow-hidden flex justify-center items-center">
                    <img src="https://via.placeholder.com/40x40?text=icon" alt="">
                  </div>
                </router-link> 
                <router-link class="link item px-[5px]" to="/single-line">
                  <div class="w-[80px] h-[80px] mb-[10px] border-blue border-[2px] rounded-[10px] overflow-hidden flex justify-center items-center">
                    <img src="https://via.placeholder.com/40x40?text=icon" alt="">
                  </div>
                </router-link> 
                <router-link class="link item px-[5px]" to="/power-chart">
                  <div class="w-[80px] h-[80px] mb-[10px] border-blue border-[2px] rounded-[10px] overflow-hidden flex justify-center items-center">
                    <img src="https://via.placeholder.com/40x40?text=icon" alt="">
                  </div>
                </router-link> 
                <router-link class="link item px-[5px]" to="/table-list">
                  <div class="w-[80px] h-[80px] mb-[10px] border-blue border-[2px] rounded-[10px] overflow-hidden flex justify-center items-center">
                    <img src="https://via.placeholder.com/40x40?text=icon" alt="">
                  </div>
                </router-link> 
                <router-link class="link item px-[5px]" to="/parameter">
                  <div class="w-[80px] h-[80px] mb-[10px] border-blue border-[2px] rounded-[10px] overflow-hidden flex justify-center items-center">
                    <img src="https://via.placeholder.com/40x40?text=icon" alt="">
                  </div>
                </router-link> 
                <router-link class="link item px-[5px]" to="/history">
                  <div class="w-[80px] h-[80px] mb-[10px] border-blue border-[2px] rounded-[10px] overflow-hidden flex justify-center items-center">
                    <img src="https://via.placeholder.com/40x40?text=icon" alt="">
                  </div>
                 </router-link> 
                <router-link class="link item px-[5px]" to="/user">
                  <div class="w-[80px] h-[80px] mb-[10px] border-blue border-[2px] rounded-[10px] overflow-hidden flex justify-center items-center">
                    <img src="https://via.placeholder.com/40x40?text=icon" alt="">
                  </div>
                </router-link> 
              </div>
              <router-view />

             
            </div>

            <Footer></Footer>
          </div>
          <div class="w-1/3">

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
