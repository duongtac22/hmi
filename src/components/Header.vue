<template>
 <header class="top-0 bg-white border-b border-gray-200 z-30">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 -mb-px">

        <!-- Header: Left side -->
        <div class="flex">

         <div class="w-full flex items-center justify-between gap-4 rounded-lg p-4">
          <div class="item text-gray">
              <span class="text-[16px]">
                Status :
              </span>
              <span class="text-[24px] font-bold">
                ONLINE
              </span>
          </div>
          <div class="item text-gray">
              <span class="text-[16px]">
                Limiter :
              </span>
              <span class="text-[24px] font-bold">
                OEL
              </span>
          </div>
          <div class="item text-gray">
              <span class="text-[16px]">
                PSS :
              </span>
              <span class="text-[24px] font-bold">
                Active
              </span>
          </div>
      </div> 

        </div>

        <!-- Header: Right side -->
        <div class="flex items-center space-x-3">
          
          <button class="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full" @click.prevent="toggleNoti" >
            <font-awesome-icon class="text-gray-400 text-[16px]" :icon="sortIcon" />
            <!-- <font-awesome-icon class="text-gray-400 text-[16px]" :icon="['fa','bell']" v-if="notiStatus"/>
            <font-awesome-icon class="text-gray-400 text-[16px]" :icon="['fa','bell-slash']" v-else /> -->
          </button>
            <UserProfile align="right" />
        </div>

      </div>
    </div>
  </header>
</template>

<script>
import UserProfile from "./UserProfile.vue";

export default {
  components: {
      UserProfile
  },
  data () {
		return {
			bell: 'on',
		};
	},
  computed: {
		sortIcon () {
			return this.bell === 'on' ? ['fa', 'bell-slash'] : ['fa', 'bell'];
		}
	},
	methods: {
		toggleNoti () {
			this.bell = this.bell === 'on' ? 'off' : 'on';
		}
	}
}
</script>

<style>
.svg-white svg path{
  fill : #ffffff ; 
}
.material-design-icon.icon-2x {
    height: 30px;
    width: 30px;
}

.material-design-icon.icon-2x > .material-design-icon__svg {
    height: 30px;
    width: 30px;
}
</style>