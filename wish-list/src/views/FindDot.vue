<template>
  <button
    @click="checkIfWinner"
    ref="randomCircle"
    class="bg-gray-700 w-32 h-32 rounded-full"
    :style="{ opacity: opacity }"
  ></button>
</template>

<script setup>
import { onMounted, ref } from "vue";

const randomCircle = ref({});
const randomPointX = ref(0);
const randomPointY = ref(0);
const opacity = ref(0);

randomPointX.value = Math.floor(Math.random() * window.innerWidth) - 128;
randomPointY.value = Math.floor(Math.random() * window.innerHeight) - 128;

function checkIfWinner(event) {
  if (
    randomPointX.value >= event.clientX - 128 &&
    randomPointX.value <= event.clientX + 128 &&
    randomPointY.value >= event.clientY - 128 &&
    randomPointY.value <= event.clientY + 128
  ) {
    opacity.value = 1;
  }
}

onMounted(async () => {
  randomCircle.value.style.transform = `translate(${randomPointX.value}px, ${randomPointY.value}px)`;
});
setInterval(() => {
  opacity.value = opacity.value + 0.02;
}, 5000);
</script>
