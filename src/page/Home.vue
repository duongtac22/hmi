<template>
     <div class="p-8 pb-[10px] border-[1px] border-slave-100 rounded-[15px]">
                <ul>
                  <li class="flex mb-[10px]" v-for="(n, index) in 4" :key="index">
                    <span class="mr-8">HH:MM:SS:PPP</span>
                    <span class="mr-8">Event #1</span>
                    <span class="mr-8 ml-auto">Status</span>
                  </li>
                </ul>
      </div>
      <div class="flex flex-wrap mx-[-8px] mt-8">
        <div class="item w-1/4 p-[8px] mb-[16px]">
          <div class="bg-cyan-300 rounded-[15px] border-cyan-300 border-[2px] p-[15px]">
            <h3 class="text-[20px] text-black font-bold mb-[20px]">Terminal Voltage</h3>
            <div class="text-right">
              <h4 class="text-[26px] text-black font-bold">
                13,80
              </h4>
              <span class="text-black font-bold">
                Kv
              </span>
            </div>
          </div>
        </div>
        <div class="item w-1/4 p-[8px] mb-[16px]">
          <div class="bg-cyan-300 rounded-[15px] border-cyan-300 border-[2px] p-[15px]">
            <h3 class="text-[20px] text-black font-bold mb-[20px]">Terminal Current:</h3>
            <div class="text-right">
              <h4 class="text-[26px] text-black font-bold">
                758.2
              </h4>
              <span class="text-black font-bold">
                A
              </span>
            </div>
          </div>
        </div>
        <div class="item w-1/4 p-[8px] mb-[16px]">
          <div class="bg-cyan-300 rounded-[15px] border-cyan-300 border-[2px] p-[15px]">
            <h3 class="text-[20px] text-black font-bold mb-[20px]">Generator Frequency:</h3>
            <div class="text-right">
              <h4 class="text-[26px] text-black font-bold">
                50.02
              </h4>
              <span class="text-black font-bold">
                Hz
              </span>
            </div>
          </div>
        </div>
        <div class="item w-1/4 p-[8px] mb-[16px]">
          <div class="bg-cyan-300 rounded-[15px] border-cyan-300 border-[2px] p-[15px]">
            <h3 class="text-[20px] text-black font-bold mb-[20px]">Active Power:</h3>
            <div class="text-right">
              <h4 class="text-[26px] text-black font-bold">
                15,635
              </h4>
              <span class="text-black font-bold">
                kW
              </span>
            </div>
          </div>
        </div>
        <div class="item w-1/4 p-[8px] mb-[16px]">
          <div class="bg-cyan-300 rounded-[15px] border-cyan-300 border-[2px] p-[15px]">
            <h3 class="text-[20px] text-black font-bold mb-[20px]">Reactive Power:</h3>
            <div class="text-right">
              <h4 class="text-[26px] text-black font-bold">
                3,546
              </h4>
              <span class="text-black font-bold">
                kVA
              </span>
            </div>
          </div>
        </div>
        <div class="item w-1/4 p-[8px] mb-[16px]">
          <div class="bg-cyan-300 rounded-[15px] border-cyan-300 border-[2px] p-[15px]">
            <h3 class="text-[20px] text-black font-bold mb-[20px]">Power Factor:</h3>
            <div class="text-right">
              <h4 class="text-[26px] text-black font-bold">
                0.96
              </h4>
              <span class="text-black font-bold">
                pu
              </span>
            </div>
          </div>
        </div>
        <div class="item w-1/4 p-[8px] mb-[16px]">
          <div class="bg-cyan-300 rounded-[15px] border-cyan-300 border-[2px] p-[15px]">
            <h3 class="text-[20px] text-black font-bold mb-[20px]">Field Voltage:</h3>
            <div class="text-right">
              <h4 class="text-[26px] text-black font-bold">
                245.8
              </h4>
              <span class="text-black font-bold">
                V
              </span>
            </div>
          </div>
        </div>
        <div class="item w-1/4 p-[8px] mb-[16px]">
          <div class="bg-cyan-300 rounded-[15px] border-cyan-300 border-[2px] p-[15px]">
            <h3 class="text-[20px] text-black font-bold mb-[20px]">Field Current:</h3>
            <div class="text-right">
              <h4 class="text-[26px] text-black font-bold">
                547.6
              </h4>
              <span class="text-black font-bold">
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