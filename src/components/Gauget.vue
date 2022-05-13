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
                hasNeedle: true,
                needleColor: 'gray',
                needleUpdateSpeed: 1000,
                arcColors: ['rgb(44, 151, 222)', 'lightgray'],
                arcDelimiters: [70],
                rangeLabel: ['0', '100'],
                // centralLabel: '70',
            }
        }
    }
  }
 
</script>
