<template>
  <div class="sidebar">
    <div class="logo text-right ">
      <img src="https://via.placeholder.com/200x90?text=Logo" class="ml-auto max-h-[72px]" alt="">
    </div>
    <div class="list-btn-option mx-[-5px] mt-[15px] inline-block w-full">
      <div class="float-left w-1/3 h-[200px] p-[5px]">
        <button type="button" class="w-full border-white border-[2px] rounded-[15px] text-white text-[26px] flex items-center justify-center p-10px h-full active">
          AVR
        </button>
      </div>
      <div class="float-left w-1/3 h-[100px] p-[5px]">
        <button type="button" class="w-full border-white border-[2px] rounded-[15px] text-white text-[26px] flex items-center justify-center p-10px h-full">
          FRC
        </button>
      </div>
      <div class="float-left w-1/3 h-[100px] p-[5px]">
        <button type="button" class="w-full border-white border-[2px] rounded-[15px] text-white text-[26px] flex items-center justify-center p-10px h-full">
          FVR
        </button>
      </div>
      <div class="float-left w-1/3 h-[100px] p-[5px]">
        <button type="button" class="w-full border-white border-[2px] rounded-[15px] text-white text-[26px] flex items-center justify-center p-10px h-full">
          AVR
        </button>
      </div>
      <div class="float-left w-1/3 h-[100px] p-[5px]">
        <button type="button" class="w-full border-white border-[2px] rounded-[15px] text-white text-[26px] flex items-center justify-center p-10px h-full">
          PF
        </button>
      </div>
    </div>
    <div class="terminal-voltage">
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
        <div class="flex justify-center mx-auto max-w-[292px] overflow-hidden border-blue border-[2px] rounded-[5px] border-solid">
          <button type="button"  class="min-w-[60px] w-[60px] h-[60px] block bg-[#ececec] border-blue border-[2px]  rounded-[5px] m-[-2px] mr-0">
            <span class="icon inline-block text-[20px]">
                <font-awesome-icon class="" :icon="['fa','chevron-left']"/>
            </span>
          </button>
          <input type="text" value="40" class="!outline-none text-center text-[30px] w-[180px]">
          <button type="button" class="min-w-[60px] w-[60px] h-[60px] block bg-[#ececec] border-blue border-[2px]  rounded-[5px] m-[-2px] ml-0">
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

<style>
  .list-btn-option .active{
    background-color: #fff;
    color: #333;
  }
</style>