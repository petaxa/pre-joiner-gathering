<script setup lang="ts">
import { computed, toRefs } from "vue";
import { useNav } from "@slidev/client";

const { currentSlideRoute } = useNav();
const frontmatter = computed(
  () => (currentSlideRoute.value.meta?.slide as any)?.frontmatter || {}
);

const x = computed(() => frontmatter.value.bgCenter.x);
const y = computed(() => frontmatter.value.bgCenter.y);
const deg = computed(() => frontmatter.value.bgCenter.deg);
</script>
<template>
  <div class="bg-container transform-gpu overflow-hidden pointer-events-none" aria-hidden="true">
    <div class="bg"></div>
  </div>
</template>
<style scoped>
.bg-container {
  --x-pos: v-bind(x + "%");
  --y-pos: v-bind(y + "%");
  --angle: v-bind(deg + "deg");
  --radius: 25%;
  position: absolute;
  inset: 0;
  z-index: -10;
  overflow: hidden;
}

.bg::before,
.bg::after {
  content: "";
  position: absolute;
  width: 30vw;
  height: 30vw;
  border-radius: 50%;
  filter: blur(110px);
  transition: all 2.5s ease;
}

.bg::before {
  background-image: radial-gradient(circle at center,
      rgba(138, 228, 224, 0.4),
      rgba(101, 138, 255, 0.4) 46%,
      rgba(216, 144, 249, 0.4));

  left: calc(var(--x-pos) - 10% + var(--radius) * cos(var(--angle)));
  top: calc(var(--y-pos) + var(--radius) * sin(var(--angle)));
  transform: translate(-50%, -50%);
}

.bg::after {
  background-image: radial-gradient(circle at center,
      rgba(228, 138, 216, 0.4),
      rgba(152, 255, 101, 0.4) 46%,
      rgba(244, 223, 68, 0.4));

  left: calc(var(--x-pos) + 10% - var(--radius) * cos(var(--angle)));
  top: calc(var(--y-pos) - var(--radius) * sin(var(--angle)));
  transform: translate(-50%, -50%);
}
</style>
