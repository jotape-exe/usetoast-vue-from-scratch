<template>
    <div class="helper-content">
        <div class="variant-indicator" :class="`variant--${color}`" />

        <div class="placement-indicator">
            <div class="viewport">
                <div class="toast-dot" :class="placementClass" />
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { computed } from 'vue';
import type { ToastPlacement, ToastVariant } from './toast/toast.interface';

const props = defineProps({
    color: {
        type: String as () => ToastVariant,
        default: 'surface'
    },
    placement: {
        type: String as () => ToastPlacement,
        default: 'toast-bottom toast-end'
    }
})

const placementClass = computed(() =>
    props.placement.split(' ').join(' ')
)
</script>


<style scoped>
.helper-content {
    margin-top: 2rem;
    display: flex;
    gap: 24px;
    justify-content: center;
    align-items: center;
}

/* =========================
   VARIANT INDICATOR
========================= */

.variant-indicator {
    width: 22px;
    height: 22px;
    border-radius: 999px;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
}

.variant--primary {
    background: var(--primary);
}

.variant--secondary {
    background: var(--secondary);
}

.variant--success {
    background: var(--success);
}

.variant--warning {
    background: var(--warning);
}

.variant--info {
    background: var(--info);
}

.variant--error {
    background: var(--error);
}

.variant--surface {
    background: var(--surface);
}

/* =========================
   PLACEMENT INDICATOR
========================= */

.placement-indicator {
    width: 78px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.viewport {
    position: relative;
    width: 62px;
    height: 62px;
    border-radius: 6px;
    background: color-mix(in srgb, var(--text) 20%, transparent);
    border: 1px dashed rgba(0, 0, 0, 0.2);
}

.toast-dot {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 4px;
    background: var(--primary);
}

.toast-top {
    top: 4px;
}

.toast-middle {
    top: 50%;
    transform: translateY(-50%);
}

.toast-bottom {
    bottom: 4px;
}

.toast-start {
    left: 4px;
}

.toast-center {
    left: 50%;
    transform: translateX(-50%);
}

.toast-end {
    right: 4px;
}

.toast-middle.toast-center {
    transform: translate(-50%, -50%);
}
</style>
