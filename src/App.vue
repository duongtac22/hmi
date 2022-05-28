<template>
  <div class="flex h-screen overflow-hidden bg-slate-100">
    <Sidebar />
    
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden ">

        <Header></Header>
        <div class="flex flex-row gap-8 px-8">
            <div class="w-2/3">
              
              <div class="main-wrap bg-white rounded-[15px] my-[20px] p-[20px] border-[1px] border-slate-200 rounded-[15px] shadow-lg">
                <router-view />
              </div>

            </div>
            <div class="w-1/3">

              <sider-right></sider-right>

            </div>

        </div>

    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';

import SiderRight from './components/SiderRight.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Header,
    SiderRight,
    Sidebar
  },
  data() {
    return {
     
    }
  },
}
</script>

<style>
.router-link-exact-active{
    border-bottom-color: #F19238;
    color:#fff ;
 }
</style>
