import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0)

  // actions
  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  return {
    // state
    count,
    // actions
    increment,
    decrement
  }
}) 