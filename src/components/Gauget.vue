<template>
<div>
  <radial-gauge :value="gaugeData" :options="options"></radial-gauge>
</div>
</template>
 
<script>
  import RadialGauge from 'vue-canvas-gauges/src/RadialGauge'
 
  export default {
    data() {
      return {
        gauge : null , 
        gaugeData : 0 ,
       
      };
    },
    components: {
      RadialGauge
    },
    props: {
      value: {
        type: Number,
        default: 50
      },
      title: {
        type: String,
        default: ''
      },
       options: { 
        type: Object,
        default: () => ({
          units: '°C',
          title: '',
          minValue: 0,
          maxValue: 100,
          width: 350,
          height: 350,
          strokeTicks: true,
          barWidth : 0 , 
          minorTicks: 10,
          majorTicks: [
            '0',
            '10',
            '20',
            '30',
            '40',
            '50',
            '60',
            '70',
            '80',
            '90',
            '100',
          ],
          colorPlate: '#fff',
          borderShadowWidth: 0,
          borders: true,
          needleType: 'arrow',
          needleShadow: true,
          needleWidth: 0,
          needleCircleSize: 5,
          needleCircleOuter: true,
          needleCircleInner: false,
          numberSide: 'left',
          needleSide: 'left',
          animationDuration: 2000,
          valueBox: true,
          valueBoxStroke: 5,
          valueTextShadow: false,
          valueDec: 0,
          barBeginCircle: 0,
          fontNumbersSize: 25,
          fontUnitsSize: 30,
          fontValueSize: 30
        })
        }
    },
    methods: {
      setGaugeData() {
        var gauge = this;
          setInterval(function () {
          gauge.gaugeData = Math.random()*100;
        }, 1000);
      },
    },
    created: function () {
      this.setGaugeData()
    },
  }
</script>