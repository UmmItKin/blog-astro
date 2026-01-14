<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'

let ticking = false
function handleScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      const btn = document.getElementById('scroll-to-top')
      if (btn) {
        if (window.scrollY > 300) {
          btn.classList.remove('op0', 'pointer-events-none')
          btn.classList.add('op75')
        }
        else {
          btn.classList.add('op0', 'pointer-events-none')
          btn.classList.remove('op75')
        }
      }
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <button
    id="scroll-to-top"
    aria-label="Scroll to top"
    fixed right-5 sm:right-30 bottom-30 w-12 h-12 text-lg hover:op100 rounded-full flex="~ items-center justify-center"
    bg-hex-8883 transition duration-300 z-100 print:hidden
    class="op0 pointer-events-none"
    @click="toTop()"
  >
    <i i-ri-arrow-up-line />
  </button>
</template>
