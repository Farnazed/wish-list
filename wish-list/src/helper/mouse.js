import { onMounted, onUnmounted, ref } from "vue";

export function useMouse() {
  let x = ref(0);
  let y = ref(0);

  function update(event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  onMounted(() => window.addEventListener("mousemove", update));

  onUnmounted(() => window.removeEventListener("mousemove", update));
  return { x, y };
}
