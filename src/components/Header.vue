<template>
  <div class="w-full flex items-center justify-between gap-4 rounded-lg border-2 border-white p-4">
      <div class="item text-white">
          <span class="text-[14px]">
            Status :
          </span>
          <span class="text-[20px] font-bold">
            ONLINE
          </span>
      </div>
      <div class="item text-white">
           <span class="text-[14px]">
            Limiter :
          </span>
          <span class="text-[20px] font-bold">
            OEL
          </span>
      </div>
      <div class="item text-white">
           <span class="text-[14px]">
            PSS :
          </span>
          <span class="text-[20px] font-bold">
            Active
          </span>
      </div>
      <div class="item">
          <span class="icon inline-block">
              <bell-off class='icon-2x svg-white' fillColor="#ffffff" />
          </span>
      </div>
  </div>
</template>

<script>

import BellOff from "vue-material-design-icons/BellOff.vue"

export default {
  components: {
   BellOff
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