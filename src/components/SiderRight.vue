<template>
  <div class="sidebar ">
    <div class="list-btn-option mx-[-5px] mt-[15px] inline-block w-full ">
      <div class="float-left w-1/3 h-[150px] p-[5px]">
        <button type="button" class="w-full border-slave-100 border-[1px] rounded-[15px] text-black text-[20px] flex items-center justify-center p-10px h-full bg-white active">
          AVR
        </button>
      </div>
      <div class="float-left w-1/3 h-[75px] p-[5px]">
        <button type="button" class="w-full border-slave-100 border-[1px] rounded-[15px] text-black text-[20px] flex items-center justify-center p-10px h-full bg-white">
          FRC
        </button>
      </div>
      <div class="float-left w-1/3 h-[75px] p-[5px]">
        <button type="button" class="w-full border-slave-100 border-[1px] rounded-[15px] text-black text-[20px] flex items-center justify-center p-10px h-full bg-white">
          FVR
        </button>
      </div>
      <div class="float-left w-1/3 h-[75px] p-[5px]">
        <button type="button" class="w-full border-slave-100 border-[1px] rounded-[15px] text-black text-[20px] flex items-center justify-center p-10px h-full bg-white">
          AVR
        </button>
      </div>
      <div class="float-left w-1/3 h-[75px] p-[5px]">
        <button type="button" class="w-full border-slave-100 border-[1px] rounded-[15px] text-black text-[20px] flex items-center justify-center p-10px h-full bg-white">
          PF
        </button>
      </div>
    </div>
    <div class="terminal-voltage border-[1px] border-slate-100 rounded-[15px] shadow-lg">
      <div class="bg-white rounded-[10px] p-[20px]">
        <h3 class="text-center text-[20px] text-[#888] mb-[20px]">
          Terminal Voltage
        </h3>
        <div class="chart">
          <!-- <img src="https://via.placeholder.com/300x300" class="rounded-full mx-auto" alt=""> -->
          <div class="flex item-centers">
            <Gauget></Gauget>
          </div>
        </div>
        <h3 class="text-center text-[20px] text-[#888] mt-[20px] mb-[20px]">
          AVR setpoint
        </h3>
        <div class="flex justify-center mx-auto max-w-[291px] overflow-hidden border-slave-100 border-[1px] rounded-[5px] border-solid">
          <button type="button"  class="min-w-[60px] w-[60px] h-[60px] block bg-[#ececec] borderslave-100 border-[1px]  rounslave-1005px] m-[-1px] mr-0">
            <span class="icon inline-block text-[20px]">
                <font-awesome-icon class="" :icon="['fa','chevron-left']"/>
            </span>
          </button>
          <input type="text" value="40" class="!outline-none text-center text-[30px] w-[180px]">
          <button type="button" class="min-w-[60px] w-[60px] h-[60px] block bg-[#ececec] borderslave-100 border-[1px]  rounslave-1005px] m-[-1px] ml-0">
            <span class="icon inline-block text-[20px]">
                <font-awesome-icon class="" :icon="['fa','chevron-right']" />
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Gauget from './Gauget.vue'
export default {
 components: {
    Gauget,
  }
}
</script>

<style lang="scss">
.list-btn-option {
  .active{
    @apply bg-cyan-300 ; 
  }
}
</style>