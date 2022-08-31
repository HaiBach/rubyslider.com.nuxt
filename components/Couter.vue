<script setup>
  const counterA = useState('counter', () => Math.round( Math.random() * 1000) )
  console.log(counterA)
</script>

<template>
  <div>
    Counter: {{ counterA }}
    <button @click="counterA++">+</button>
    <button @click="counterA--">-</button>
  </div>
</template>