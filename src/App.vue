<script setup lang="ts">
import Title from './components/Title.vue';
import { AppToastProvider } from './components/toast';
import ToastExemplo from './components/ToastExemplo.vue';
</script>

<template>
  <Title />
  <ToastExemplo />
  <AppToastProvider />
</template>
