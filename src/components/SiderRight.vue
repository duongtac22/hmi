<template>
  <div class="sidebar">
    <div class="logo text-right">
      <img src="https://via.placeholder.com/200x90?text=Logo" class="mx-auto" alt="">
    </div>
    <div class="list-btn-option mx-[-5px] mt-[20px] inline-block w-full">
      <div class="float-left w-1/3 h-[200px] p-[5px]">
        <a href="javascript:;" class="border-white border-[2px] rounded-[15px] text-white text-[26px] flex items-center justify-center p-10px h-full active">
          AVR
        </a>
      </div>
      <div class="float-left w-1/3 h-[100px] p-[5px]">
        <a href="javascript:;" class="border-white border-[2px] rounded-[15px] text-white text-[26px] flex items-center justify-center p-10px h-full">
          FRC
        </a>
      </div>
      <div class="float-left w-1/3 h-[100px] p-[5px]">
        <a href="javascript:;" class="border-white border-[2px] rounded-[15px] text-white text-[26px] flex items-center justify-center p-10px h-full">
          FVR
        </a>
      </div>
      <div class="float-left w-1/3 h-[100px] p-[5px]">
        <a href="javascript:;" class="border-white border-[2px] rounded-[15px] text-white text-[26px] flex items-center justify-center p-10px h-full">
          AVR
        </a>
      </div>
      <div class="float-left w-1/3 h-[100px] p-[5px]">
        <a href="javascript:;" class="border-white border-[2px] rounded-[15px] text-white text-[26px] flex items-center justify-center p-10px h-full">
          PF
        </a>
      </div>
    </div>
    <div class="terminal-voltage">
      <div class="bg-white rounded-[10px] p-[20px]">
        <h3 class="text-center text-[20px] text-[#888] mb-[20px]">
          Terminal Voltage
        </h3>
        <div class="chart">
          <img src="https://via.placeholder.com/300x300" class="rounded-full mx-auto" alt="">
        </div>
        <h3 class="text-center text-[20px] text-[#888] mt-[20px]">
          AVR setpoint
        </h3>
        <div class="flex justify-center mx-auto max-w-[292px] overflow-hidden border-blue border-[2px] rounded-[5px] border-solid">
          <a href="#" class="min-w-[60px] w-[60px] h-[60px] block bg-[#ccc] border-blue border-[2px]  rounded-[5px] m-[-2px] mr-0">
            
          </a>
          <input type="text" value="40" class="!outline-none text-center text-[30px] w-[180px]">
          <a href="#" class="min-w-[60px] w-[60px] h-[60px] block bg-[#ccc] border-blue border-[2px]  rounded-[5px] m-[-2px] ml-0">

          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .list-btn-option .active{
    background-color: #fff;
    color: #333;
  }
</style>