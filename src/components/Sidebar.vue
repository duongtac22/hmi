<template>
  <div>
    <!-- Sidebar -->
    <div
      id="sidebar"
      ref="sidebar"
      class="flex flex-col z-40 left-0 top-0 lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-gray-800 p-4 transition-all duration-200 ease-in-out"
      
    >

      <!-- Sidebar header -->
      <div class="flex justify-between mb-10 pr-3 sm:px-2">
       
        <!-- Logo -->
        <router-link class="block" to="/">
            <img src="https://via.placeholder.com/200x90?text=Logo" class="ml-auto max-h-[72px]" alt="">
        </router-link>
      </div>

      <!-- Links -->
      <div class="space-y-8">
         <div>
          <ul class="mt-3">
            <!-- Dashboard -->
            <router-link to="/" v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'bg-gray-900'">
                <a class="block text-gray-200 hover:text-white truncate transition duration-150" :class="isExactActive && 'hover:text-gray-200'" :href="href" @click="navigate">
                  <div class="flex items-center">
                    <font-awesome-icon :class="isExactActive && '!text-indigo-500'" :icon=" ['fa','table-cells-large']" />
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Dashboard</span>
                  </div>
                </a>
              </li>
            </router-link>
            <!-- chart -->
            <router-link to="/chart" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'bg-gray-900'">
                <a class="block text-gray-200 hover:text-white truncate transition duration-150" :href="href" @click="navigate">
                  <div class="flex items-center">
                    <font-awesome-icon :class="isExactActive && '!text-indigo-500'" :icon=" ['fa','chart-line']" />
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Chart</span>
                  </div>
                </a>
              </li>
            </router-link>
            <!-- Chart Line -->
            <router-link to="/single-line" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'bg-gray-900'">
                <a class="block text-gray-200 hover:text-white truncate transition duration-150" :href="href" @click="navigate">
                  <div class="flex items-center">
                    <font-awesome-icon :class="isExactActive && '!text-indigo-500'" :icon=" ['fa','chart-area']" />
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Chart Line</span>
                  </div>
                </a>
              </li>
            </router-link>
            <!-- Power Chart -->
            <router-link to="/power-chart" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'bg-gray-900'">
                <a class="block text-gray-200 hover:text-white truncate transition duration-150" :href="href" @click="navigate">
                  <div class="flex items-center">
                    <font-awesome-icon :class="isExactActive && '!text-indigo-500'" :icon=" ['fa','chart-column']" />
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Power Chart</span>
                  </div>
                </a>
              </li>
            </router-link>
            <!-- Table List -->
            <router-link to="/table-list" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'bg-gray-900'">
                <a class="block text-gray-200 hover:text-white truncate transition duration-150" :href="href" @click="navigate">
                  <div class="flex items-center">
                    <font-awesome-icon :class="isExactActive && '!text-indigo-500'" :icon=" ['fa','table-list']" />
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Table List</span>
                  </div>
                </a>
              </li>
            </router-link>
            <!-- Folder Tree -->
            <router-link to="/parameter" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'bg-gray-900'">
                <a class="block text-gray-200 hover:text-white truncate transition duration-150" :href="href" @click="navigate">
                  <div class="flex items-center">
                    <font-awesome-icon :class="isExactActive && '!text-indigo-500'" :icon=" ['fa','folder-tree']" />
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Folder Tree</span>
                  </div>
                </a>
              </li>
            </router-link>
            <!-- History -->
            <router-link to="/history" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'bg-gray-900'">
                <a class="block text-gray-200 hover:text-white truncate transition duration-150" :href="href" @click="navigate">
                  <div class="flex items-center">
                    <font-awesome-icon :class="isExactActive && '!text-indigo-500'" :icon=" ['fa','diagram-next']" />
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">History</span>
                  </div>
                </a>
              </li>
            </router-link>           
            <!-- User -->
            <router-link to="/user" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'bg-gray-900'">
                <a class="block text-gray-200 hover:text-white truncate transition duration-150" :href="href" @click="navigate">
                  <div class="flex items-center">
                    <font-awesome-icon :class="isExactActive && '!text-indigo-500'" :icon=" ['fa','user-circle']" />
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">User</span>
                  </div>
                </a>
              </li>
            </router-link>           
          </ul>

          <Footer></Footer>
        </div>
      </div>

     

    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

import Footer from './Footer.vue';
export default {
  name: 'Sidebar',
  components: {
    Footer
  },  
  setup() {


    const currentRoute = useRouter().currentRoute.value
    console.log("🚀 ~ file: Sidebar.vue ~ line 158 ~ setup ~ currentRoute", currentRoute)


    return {
      currentRoute,
    }
  },
}
</script>

<style>

</style>