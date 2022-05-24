<template>
     <div class="mt-30px p-[20px] pb-[10px] border-[2px] border-blue rounded-[15px]">
                <ul>
                  <li class="flex mb-[10px]" v-for="(n, index) in 4" :key="index">
                    <span class="mr-[20px]">HH:MM:SS:PPP</span>
                    <span class="mr-[20px]">Event #1</span>
                    <span class="mr-[20px] ml-auto">Status</span>
                  </li>
                </ul>
              </div>
              <div class="flex flex-wrap mx-[-8px] mt-[20px]">
                <div class="item w-1/4 p-[8px] mb-[16px]" v-for="(n, index) in 8" :key="index">
                  <div class="bg-[#ccc] rounded-[15px] border-blue border-[2px] p-[15px]">
                    <h3 class="text-[20px] text-[#888] mb-[20px]">Terminal Voltage:</h3>
                    <div class="text-right">
                      <h4 class="text-[26px] text-[#333] font-bold">
                        13,80
                      </h4>
                      <span class="text-[#888]">
                        Kv
                      </span>
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

</style>