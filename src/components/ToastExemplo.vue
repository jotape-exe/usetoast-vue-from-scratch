<script setup lang="ts">
import { reactive } from 'vue';
import { useToast } from '../composables/useToast';
import type { ToastPlacement, ToastVariant } from './toast/toast.interface';
import ToastHelper from './ToastHelper.vue';

const toast = useToast()

const toastPlacements: ToastPlacement[] = [
  "toast-top toast-start",
  "toast-top toast-center",
  "toast-top toast-end",
  "toast-middle toast-start",
  "toast-middle toast-center",
  "toast-middle toast-end",
  "toast-bottom toast-start",
  "toast-bottom toast-center",
  "toast-bottom toast-end"
]

const toastVariants: ToastVariant[] = [
  'primary',
  'secondary',
  'success',
  'warning',
  'info',
  'error',
  'surface'
]

const toastRef = reactive({
  placement: toastPlacements[0],
  variant: toastVariants[0],
})

const showToast = () => {
  toast.show({
    message: `Toast do tipo ${toastRef.variant}`,
    placement: toastRef.placement,
    variant: toastRef.variant
  })
}

</script>

<template>
  <div>
    <div class="container">

      <select v-model="toastRef.variant" class="btn btn-select">
        <option value="" disabled>
          Alterar Variante
        </option>

        <option v-for="variant in toastVariants" :key="variant" :value="variant">
          {{ variant }}
        </option>
      </select>

      <select v-model="toastRef.placement" class="btn btn-select">
        <option value="" disabled>
          Alterar Posição
        </option>

        <option v-for="placement in toastPlacements" :key="placement" :value="placement">
          {{ placement }}
        </option>
      </select>

      <button class="btn" @click="showToast()">Mostrar Toast</button>
    </div>

    <ToastHelper :color="toastRef.variant" :placement="toastRef.placement" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  height: 100%;
  width: 100%;
}
</style>
