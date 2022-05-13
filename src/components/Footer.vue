<template>
  <div class="footer mt-[20px] flex">
    <div class="check-option-gr flex mx-[-5px] mr-[10px]">
      <div class="px-[5px]">
        <button type="button" class="border-white border-[2px] rounded-[15px] text-white text-[26px] flex items-center justify-center p-10px h-full p-[30px] active">
          On
        </button>
      </div>
      <div class="px-[5px]">
        <button type="button" class="border-white border-[2px] rounded-[15px] text-white text-[26px] flex items-center justify-center p-10px h-full p-[30px]">
          Off
        </button>
      </div>
    </div>
    <div class="check-option-gr flex mx-[-5px] mr-[10px]">
      <div class="px-[5px]">
        <button type="button" class="border-white border-[2px] rounded-[15px] text-white text-[26px] flex items-center justify-center p-10px h-full p-[30px] active">
          CH#1
        </button>
      </div>
      <div class="px-[5px]">
        <button type="button" class="border-white border-[2px] rounded-[15px] text-white text-[26px] flex items-center justify-center p-10px h-full p-[30px]">
          CH#2
        </button>
      </div>
    </div>
    <div class="ml-auto">
      <button type="button" class="border-white border-[2px] rounded-[15px] text-white text-[18px] flex items-center justify-center p-10px h-full py-[14px] px-[30px] active">
        25-Mar-2022<br>
        06:19:45 PM
      </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .check-option-gr .active{
    background-color: #fff;
    color: #333;
  }
</style>