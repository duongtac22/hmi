<template>
  <div class="footer mt-[20px] flex">
    <div class="check-option-gr flex mx-[-5px] mr-[10px]">
      <div class="px-[5px]">
        <button type="button" class="border-white border-[2px] rounded-[15px] text-white text-[26px] flex items-center justify-center p-[15px] active">
          On
        </button>
      </div>
      <div class="px-[5px]">
        <button type="button" class="border-white border-[2px] rounded-[15px] text-white text-[26px] flex items-center justify-center p-[15px]">
          Off
        </button>
      </div>
    </div>
    <div class="check-option-gr flex mx-[-5px] mr-[10px]">
      <div class="px-[5px]">
        <button type="button" class="border-white border-[2px] rounded-[15px] text-white text-[26px] flex items-center justify-center  p-[15px] active">
          CH#1
        </button>
      </div>
      <div class="px-[5px]">
        <button type="button" class="border-white border-[2px] rounded-[15px] text-white text-[26px] flex items-center justify-center p-[15px]">
          CH#2
        </button>
      </div>
    </div>
    <div class="ml-auto">
      <button type="button" class="border-white border-[2px] rounded-[15px] text-white text-[18px] flex items-center justify-center py-10px  h-full py-[8px] px-[30px]">
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