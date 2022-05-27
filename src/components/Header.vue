<template>
  <div class="w-full flex items-center justify-between gap-4 rounded-lg border-2 border-white p-4">
      <div class="item text-white">
          <span class="text-[16px]">
            Status :
          </span>
          <span class="text-[24px] font-bold">
            ONLINE
          </span>
      </div>
      <div class="item text-white">
           <span class="text-[16px]">
            Limiter :
          </span>
          <span class="text-[24px] font-bold">
            OEL
          </span>
      </div>
      <div class="item text-white">
           <span class="text-[16px]">
            PSS :
          </span>
          <span class="text-[24px] font-bold">
            Active
          </span>
      </div>
      <div class="item">
          <button class="icon inline-block border-0 outline-0">
             <font-awesome-icon class="text-white text-[24px]" :icon="['fa','bell-slash']" />
          </button>
      </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  computed: {
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