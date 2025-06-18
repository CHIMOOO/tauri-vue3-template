import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  // state
  const loading = ref(false)
  const error = ref<string | null>(null)

  // actions
  function setLoading(value: boolean) {
    loading.value = value
  }

  function setError(message: string | null) {
    error.value = message
  }

  function clearError() {
    error.value = null
  }

  return {
    // state
    loading,
    error,
    // actions
    setLoading,
    setError,
    clearError
  }
}) 