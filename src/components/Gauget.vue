<template>
<div>
  <radial-gauge :value="gaugeData" :options="options"></radial-gauge>
  <span class="text">
      {{ gaugeData }}
  </span>
</div>
</template>
 
<script>
  import RadialGauge from 'vue-canvas-gauges/src/RadialGauge'
 
   
  export default {
    
    data() {
      return {
        gauge : null , 
        gaugeData : 50 ,
        value: 50 ,
        options: {
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
          valueText : this.gaugeData , 
          valueDec: 0,
          barBeginCircle: 0,
          fontNumbersSize: 25,
          fontUnitsSize: 30,
          fontValueSize: 30,
          highlights: [ 
            {
              from : 80, 
              to : 100, 
              color: "rgba(253, 3, 3, .85)"
            },
             {
              from : 40, 
              to : 80, 
              color: "rgba(253, 3, 3, .35)"
            }
          ]
        }
      };
    },

    components: {
      RadialGauge
    },
    props: {
     
      // title: {
      //   type: String,
      //   default: ''
      // },
      
    },
    methods: {
      setGaugeData() {
        // var gauge = this;
          setInterval(function () {
          let gauge =  document.gauges[0];
          this.gaugeData = gauge.options.valueText = Math.floor(Math.random()*100);
          gauge.update();
        }.bind(this), 1000);
      },
    },
    created: function () {
      this.setGaugeData()
    },
  }
</script>