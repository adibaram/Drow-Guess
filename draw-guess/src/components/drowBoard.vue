<template>
  <section class="draw-board">
      <!-- <canvas @mousedown="onMouseDown"></canvas> -->
      <canvas ref="canvas" id="canvas" v-on:mousedown="handleMouseDown"
                            v-on:touchstart="handleMouseDown" 
                            v-on:mouseup="handleMouseUp"
                            v-on:touchend="handleMouseUp"  
                            v-on:mousemove="handleMouseMove" 
                            v-on:touchmove="handleMouseMove" 
                            width="240px" height="400px">
      </canvas>

  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      drawing: false,
       mouse: {
        current: {
          x: 0,
          y: 0
        },
        previous: {
          x: 0,
          y: 0
        },
        down: false
      }
    }
  },

   ready: function () {
                    
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.translate(0.5, 0.5);
    ctx.imageSmoothingEnabled= false;
  // this.draw();
},

  computed: {
    currentMouse: function () {
      var c = document.getElementById("canvas");
      var rect = c.getBoundingClientRect();
      
      return {
        x: this.mouse.current.x - rect.left,
        y: this.mouse.current.y - rect.top
      }
    },
  },
  
  components: {

  },
  methods: {
    onMouseDown(e){
    this.drawing = true;
      current.x = e.clientX||e.touches[0].clientX;
      current.y = e.clientY||e.touches[0].clientY;
    
    },
    draw: function (event) {
      
      
      // requestAnimationFrame(this.draw);
     if (this.mouse.down ) {
       var c = document.getElementById("canvas");

    var ctx = c.getContext("2d");
       
       ctx.clearRect(0,0,800,800);
       
  
    ctx.lineTo(this.currentMouse.x, this.currentMouse.y);
       ctx.strokeStyle ="#F63E02";
       ctx.lineWidth = 2;
    ctx.stroke()
     }
     
    },
    handleMouseDown: function (event) {
  
      this.mouse.down = true;
      if (event.type === 'touchstart') {
          this.mouse.current = {
            x:event.changedTouches[0].clientX,
            y:event.changedTouches[0].clientY,
          }
      } else {
        this.mouse.current = {
          x: event.pageX,
          y: event.pageY
        }
      }

      var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");

      ctx.moveTo(this.currentMouse.x, this.currentMouse.y)
    
    },
      handleMouseUp: function () {
      this.mouse.down = false;

      //save current canvas url to store
      let currCanvas = this.$refs.canvas;
      console.log('currCanvas', currCanvas);
      let pngUrl = currCanvas.toDataURL();
      // let pngUrl = 'currCanvas.toDataURL()';
      this.$store.dispatch({ type: 'setCanvasUrl', canvasUrl: pngUrl});

    },
    handleMouseMove: function (event) {

      if (event.type === 'touchmove') {
          this.mouse.current = {
            x:event.changedTouches[0].clientX,
            y:event.changedTouches[0].clientY,
          }
      } else { 
      this.mouse.current = {
        x: event.pageX,
        y: event.pageY
      }
    } 
      
      this.draw(event)
      
    }
  },
  
};


</script>
  
<style lang="scss" scoped>
  // .draw-board {
  //   width: 150px; 
  //   height: 400px; 
  //   background-color: #fbf49c;
  // }

    .draw-board {
      border: 1px solid black;
      width: 240px; 
      height: 400px; 
      background-color: #fbf49c;
  }


</style>




