<template>
    <div class="header">
        <h1>Toast Provider do zero com Vue 3</h1>
        <p>
            Exemplo prático de como criar um sistema de Toast desacoplado,
            utilizando <strong>Composables</strong>, <strong>Teleport</strong> e
            um <strong>Provider</strong> para gerenciamento de estado e posicionamento.
        </p>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.header {
    text-align: center;
    margin-top: 2rem;
    padding: 0 1rem;
}

h1 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

p {
    max-width: 720px;
    margin: 0 auto;
    opacity: 0.85;
    line-height: 1.6;
}
</style>
