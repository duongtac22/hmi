<template>
  <vue-gauge :options="gaugetOption" class="mx-auto"></vue-gauge>
</template>
 
<script>
  import VueGauge from 'vue-gauge';
  export default {
    components: { VueGauge },
    data() {
        return{
            gaugetOption : {
                chartWidth : 400,
                hasNeedle: true,
                outerNeedle: false,
                needleColor: "#ccc",
                needleStartValue: 50,
                arcColors: ["rgb(255,0,0)","rgb(255,128,0)","rgb(31 182 255)"],
                arcDelimiters: [40,60],
                rangeLabel: ["0","100"],
                rangeLabelFontSize: 32,
            }
        }
    }
  }
 
</script>
