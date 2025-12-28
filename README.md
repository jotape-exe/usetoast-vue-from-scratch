# 🔔 Vue Toast From Scratch

Um projeto educacional e minimalista que demonstra **como criar um sistema de Toast no Vue 3 do zero**, sem bibliotecas externas.

O objetivo aqui **não é só usar**, mas **entender a arquitetura por trás** de um `useToast()` bem feito.

---

## ✨ O que esse projeto demonstra

- Criação de um **Toast System do zero**
- Uso de **Composition API**
- Um `useToast()` global, simples e desacoplado
- Um `<AppToast />` responsável apenas por renderização
- Uso de `<Teleport />` para desacoplar o Toast da árvore de componentes
- API limpa e intuitiva:
  ```ts
  toast.show({
    title: 'Sucesso!',
    description: 'Operação realizada com sucesso'
  })
  ```

## 🧩 Arquitetura

<pre>
src/
├─ composables/
│  └─ useToast.ts
│
├─ components/
│  └─ AppToast.vue
│
├─ App.vue
└─ main.ts
</pre>

## 🔌 API do Toast
```ts
useToast()
```
Hook responsável por expor a API do sistema.

```ts
const toast = useToast()
toast.show()
```

Exibe um novo toast.

```ts
toast.show({
  title: 'Hello World',
  description: 'Esse toast foi criado do zero 🚀',
  variant: 'success',
  duration: 3000
})
```

A API foi pensada para ser simples, previsível e extensível.

## 🛸 Teleport

O Toast é renderizado usando `<Teleport />`, garantindo que:

- Ele não quebre layouts
- Não dependa do contexto visual de onde foi chamado
- Fique sempre no topo da aplicação

Exemplo conceitual:

```vue
<Teleport to="body">
  <AppToast />
</Teleport>
```

## 🎯 Objetivo do Projeto

Esse projeto não é uma lib pronta, é um guia prático para:

- Entender como bibliotecas de Toast funcionam por baixo dos panos
- Aprender padrões reais de Composition API
- Criar soluções reutilizáveis e bem arquitetadas no Vue 3
- Se você entende esse projeto, você consegue criar sua própria lib.

## 🚀 Stack

- Vue 3
- TypeScript
- Vite
- Composition API