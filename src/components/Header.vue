<template>
  <div class="w-full flex items-center gap-4 rounded-lg border-2 border-white p-4">
      <div class="item">
          
      </div>
      <div class="item">
          
      </div>
      <div class="item">
          <span class="icon w-[48px] h-[48px] inline-block">
              <bell-off class='icon-2x color-white' fillColor="#ffffff" />
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

</style>