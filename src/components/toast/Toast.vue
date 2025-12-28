<script setup lang="ts">
import CloseIcon from '../icons/CloseIcon.vue';
import type { ToastVariant } from './toast.interface';

const props = defineProps({
    message: {
        type: String,
        required: false
    },
    variant: {
        type: String as () => ToastVariant,
        required: false
    },
    showCloseIcon: {
        type: Boolean,
        default: true
    },
})

const emit = defineEmits<{
    (e: 'close'): void
}>()

const variantClassMap: Record<ToastVariant, string> = {
    primary: 'toast--primary',
    secondary: 'toast--secondary',
    success: 'toast--success',
    warning: 'toast--warning',
    info: 'toast--info',
    error: 'toast--error',
    surface: 'toast--surface'
}

const toastVariantClass =
    variantClassMap[props.variant ?? 'surface']

const iconColorMap: Record<ToastVariant, string> = {
    primary: 'var(--on-primary)',
    secondary: 'var(--on-secondary)',
    success: 'var(--on-success)',
    warning: 'var(--on-warning)',
    info: 'var(--on-info)',
    error: 'var(--on-error)',
    surface: 'var(--on-surface)'
}

const iconColor =
    iconColorMap[props.variant ?? 'surface']
</script>


<template>
    <div class="toast" :class="toastVariantClass">
        <div class="content">
            <div>{{ props.message }}</div>
            <CloseIcon v-if="props.showCloseIcon" @click="emit('close')" class="close-icon" :color="iconColor"
                :size="18" />
        </div>
    </div>
</template>



<style scoped>
.toast {
    padding: 8px 16px;
    border-radius: 8px;
}

.close-icon {
    cursor: pointer;

    &:hover {
        opacity: 0.7;
        transition: all 0.2s ease-in-out;
        scale: 1.12;
    }
}

.content {
    display: flex;
    align-items: center;
    gap: 10px;
}

/* Transições */
.toast-enter-from {
    opacity: 0;
    transform: translateY(-10px) scale(0.96);
}

.toast-leave-to {
    opacity: 0;
    transform: translateY(-10px) scale(0.96);
}

.toast-enter-active,
.toast-leave-active {
    transition: opacity 0.15s ease, transform 0.15s ease;
}

.toast-enter-to,
.toast-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
}

/* Variantes */
.toast--surface {
    background-color: var(--surface);
    color: var(--on-surface);
}

.toast--primary {
    background-color: var(--primary);
    color: var(--on-primary);
}

.toast--secondary {
    background-color: var(--secondary);
    color: var(--on-secondary);
}

.toast--success {
    background-color: var(--success);
    color: var(--on-success);
}

.toast--warning {
    background-color: var(--warning);
    color: var(--on-warning);
}

.toast--info {
    background-color: var(--info);
    color: var(--on-info);
}

.toast--error {
    background-color: var(--error);
    color: var(--on-error);
}
</style>