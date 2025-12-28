<script setup lang="ts">
import { computed } from 'vue'
import { AppToast } from '.'
import { useToast } from '../../composables/useToast'
import type { ToastPlacement } from './toast.interface'

const { toasts, remove } = useToast()

const filteredByPlacement = (placement: ToastPlacement) => {
  return toasts.value.filter((t) => t.placement === placement)
}

const activePlacements = computed(() => {
  const set = new Set<ToastPlacement>()
  for (const t of toasts.value) {
    set.add(t.placement!!)
  }
  return [...set]
})

</script>

<template>
  <Teleport to="body">
    <div v-for="placement in activePlacements" :key="placement" class="toast-stack" :class="placement">
      <TransitionGroup name="toast" tag="div" class="toast-list">
        <AppToast v-for="toast in filteredByPlacement(placement)" :key="toast.id" :message="toast.message"
          :variant="toast.variant" @close="remove(toast.id)" />
      </TransitionGroup>
    </div>
  </Teleport>
</template>


<style scoped>
.toast-stack {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
}

.toast-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.toast-list>* {
  pointer-events: auto;
}

.toast-top {
  top: 20px;
}

.toast-middle {
  top: 50%;
  transform: translateY(-50%);
}

.toast-bottom {
  bottom: 20px;
}

.toast-start {
  left: 20px;
}

.toast-center {
  left: 50%;
  transform: translateX(-50%);
}

.toast-end {
  right: 20px;
}

.toast-middle.toast-center {
  transform: translate(-50%, -50%);
}

.toast-middle.toast-start,
.toast-middle.toast-end {
  transform: translateY(-50%);
}
</style>
