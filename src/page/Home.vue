<template>
     <div class="mt-[20px] p-[20px] pb-[10px] border-[2px] border-blue rounded-[15px]">
                <ul>
                  <li class="flex mb-[10px]" v-for="(n, index) in 4" :key="index">
                    <span class="mr-[20px]">HH:MM:SS:PPP</span>
                    <span class="mr-[20px]">Event #1</span>
                    <span class="mr-[20px] ml-auto">Status</span>
                  </li>
                </ul>
      </div>
      <div class="flex flex-wrap mx-[-6px] mt-[20px]">
        <div class="item w-1/4 p-[6px] mb-[6px]">
          <div class="bg-[#ececec] rounded-[15px] border-blue border-[2px] p-[15px]">
            <h3 class="text-[20px] text-[#888] mb-[20px]">Terminal Voltage</h3>
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
        <div class="item w-1/4 p-[6px] mb-[6px]">
          <div class="bg-[#ececec] rounded-[15px] border-blue border-[2px] p-[15px]">
            <h3 class="text-[20px] text-[#888] mb-[20px]">Terminal Current:</h3>
            <div class="text-right">
              <h4 class="text-[26px] text-[#333] font-bold">
                758.2
              </h4>
              <span class="text-[#888]">
                A
              </span>
            </div>
          </div>
        </div>
        <div class="item w-1/4 p-[6px] mb-[6px]">
          <div class="bg-[#ececec] rounded-[15px] border-blue border-[2px] p-[15px]">
            <h3 class="text-[20px] text-[#888] mb-[20px]">Generator Frequency:</h3>
            <div class="text-right">
              <h4 class="text-[26px] text-[#333] font-bold">
                50.02
              </h4>
              <span class="text-[#888]">
                Hz
              </span>
            </div>
          </div>
        </div>
        <div class="item w-1/4 p-[6px] mb-[6px]">
          <div class="bg-[#ececec] rounded-[15px] border-blue border-[2px] p-[15px]">
            <h3 class="text-[20px] text-[#888] mb-[20px]">Active Power:</h3>
            <div class="text-right">
              <h4 class="text-[26px] text-[#333] font-bold">
                15,635
              </h4>
              <span class="text-[#888]">
                kW
              </span>
            </div>
          </div>
        </div>
        <div class="item w-1/4 p-[6px] mb-[6px]">
          <div class="bg-[#ececec] rounded-[15px] border-blue border-[2px] p-[15px]">
            <h3 class="text-[20px] text-[#888] mb-[20px]">Reactive Power:</h3>
            <div class="text-right">
              <h4 class="text-[26px] text-[#333] font-bold">
                3,546
              </h4>
              <span class="text-[#888]">
                kVA
              </span>
            </div>
          </div>
        </div>
        <div class="item w-1/4 p-[6px] mb-[6px]">
          <div class="bg-[#ececec] rounded-[15px] border-blue border-[2px] p-[15px]">
            <h3 class="text-[20px] text-[#888] mb-[20px]">Power Factor:</h3>
            <div class="text-right">
              <h4 class="text-[26px] text-[#333] font-bold">
                0.96
              </h4>
              <span class="text-[#888]">
                pu
              </span>
            </div>
          </div>
        </div>
        <div class="item w-1/4 p-[6px] mb-[6px]">
          <div class="bg-[#ececec] rounded-[15px] border-blue border-[2px] p-[15px]">
            <h3 class="text-[20px] text-[#888] mb-[20px]">Field Voltage:</h3>
            <div class="text-right">
              <h4 class="text-[26px] text-[#333] font-bold">
                245.8
              </h4>
              <span class="text-[#888]">
                V
              </span>
            </div>
          </div>
        </div>
        <div class="item w-1/4 p-[6px] mb-[6px]">
          <div class="bg-[#ececec] rounded-[15px] border-blue border-[2px] p-[15px]">
            <h3 class="text-[20px] text-[#888] mb-[20px]">Field Current:</h3>
            <div class="text-right">
              <h4 class="text-[26px] text-[#333] font-bold">
                547.6
              </h4>
              <span class="text-[#888]">
                A
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