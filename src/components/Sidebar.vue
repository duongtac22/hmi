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
          <h3 class="text-xs uppercase text-gray-500 font-semibold pl-3">
            <span class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">•••</span>
            <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">Pages</span>
          </h3>
          <ul class="mt-3">
            <!-- Dashboard -->
            <router-link to="/home" v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'bg-gray-900'">
                <a class="block text-gray-200 hover:text-white truncate transition duration-150" :class="isExactActive && 'hover:text-gray-200'" :href="href" @click="navigate">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current text-gray-400" :class="isExactActive && '!text-indigo-500'" d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" />
                      <path class="fill-current text-gray-600" :class="isExactActive && 'text-indigo-600'" d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z" />
                      <path class="fill-current text-gray-400" :class="isExactActive && 'text-indigo-200'" d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z" />
                    </svg>
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
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current text-gray-600" :class="isExactActive && 'text-indigo-600'" d="M0 20h24v2H0z" />
                      <path class="fill-current text-gray-400" :class="isExactActive && 'text-indigo-200'" d="M4 18h2a1 1 0 001-1V8a1 1 0 00-1-1H4a1 1 0 00-1 1v9a1 1 0 001 1zM11 18h2a1 1 0 001-1V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v14a1 1 0 001 1zM17 12v5a1 1 0 001 1h2a1 1 0 001-1v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1z" />                    
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Analytics</span>
                  </div>
                </a>
              </li>
            </router-link>
            <!-- E-Commerce  -->
            <!-- Campaigns -->
            <router-link to="/single-line" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'bg-gray-900'">
                <a class="block text-gray-200 hover:text-white truncate transition duration-150" :href="href" @click="navigate">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current text-gray-600" :class="isExactActive && 'text-indigo-600'" d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z" />
                      <path class="fill-current text-gray-400" :class="isExactActive && 'text-indigo-200'" d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z" />                    
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Campaigns</span>
                  </div>
                </a>
              </li>
            </router-link>
            <!-- Messages -->
            <router-link to="/power-chart" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'bg-gray-900'">
                <a class="block text-gray-200 hover:text-white truncate transition duration-150" :href="href" @click="navigate">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current text-gray-600" :class="isExactActive && 'text-indigo-600'" d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z" />
                      <path class="fill-current text-gray-400" :class="isExactActive && 'text-indigo-200'" d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z" />
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Messages</span>
                  </div>
                </a>
              </li>
            </router-link>
            <!-- Tasks -->
            <router-link to="/table-list" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'bg-gray-900'">
                <a class="block text-gray-200 hover:text-white truncate transition duration-150" :href="href" @click="navigate">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current text-gray-600" :class="isExactActive && 'text-indigo-600'" d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z" />
                      <path class="fill-current text-gray-600" :class="isExactActive && 'text-indigo-200'" d="M1 1h22v23H1z" />
                      <path class="fill-current text-gray-400" :class="isExactActive && 'text-indigo-400'" d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z" />
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Tasks</span>
                  </div>
                </a>
              </li>
            </router-link>
            <!-- Inbox -->
            <router-link to="/parameter" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'bg-gray-900'">
                <a class="block text-gray-200 hover:text-white truncate transition duration-150" :href="href" @click="navigate">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current text-gray-600" :class="isExactActive && 'text-indigo-600'" d="M16 13v4H8v-4H0l3-9h18l3 9h-8Z" />
                      <path class="fill-current text-gray-400" :class="isExactActive && 'text-indigo-200'" d="m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z" />
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Inbox</span>
                  </div>
                </a>
              </li>
            </router-link>
            <!-- Calendar -->
            <router-link to="/history" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'bg-gray-900'">
                <a class="block text-gray-200 hover:text-white truncate transition duration-150" :href="href" @click="navigate">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current text-gray-600" :class="isExactActive && 'text-indigo-600'" d="M1 3h22v20H1z" />
                      <path class="fill-current text-gray-400" :class="isExactActive && 'text-indigo-200'" d="M21 3h2v4H1V3h2V1h4v2h10V1h4v2Z" />
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Calendar</span>
                  </div>
                </a>
              </li>
            </router-link>           
          </ul>
        </div>
      </div>

     

    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'


export default {
  name: 'Sidebar',
  components: {

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