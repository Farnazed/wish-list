<template>
  <div class="w-full h-full point-box" @click="plotPoints">
    <div
      v-for="point in points"
      :key="point.x + point.y"
      :id="point.x + point.y"
      ref="elementRefs"
      :class="`point `"
      :style="{ top: `${point.y}px`, left: `${point.x}px` }"
    ></div>
    <find-dot />
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import FindDot from "./FindDot.vue";

const points = ref([]);
const elementRefs = ref([]);

watch(
  points,
  () => {
    elementRefs.value[elementRefs.value.length - 1].classList.toggle("fade");
  },
  { deep: true, flush: "post" }
);

function plotPoints(event) {
  console.log(event);
  points.value.push({
    x: event.clientX,
    y: event.clientY,
    id: event.clientX + event.clientY,
  });
}
</script>
<style scoped>
.rounded {
  width: 30px;
  height: 30px;
  border: 2px solid #d76e6e75;
  border-radius: 50%;
}

.point {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 2px solid #d76e6e75;
}

.fade {
  animation: fadeAnim 2s linear 2s forwards;
}
@keyframes fadeAnim {
  0% {
    opacity: 100%;
  }
  100% {
    opacity: 0%;
  }
}
</style>
