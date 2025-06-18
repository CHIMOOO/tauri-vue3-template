<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 导航栏 -->
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex space-x-8">
            <RouterLink 
              to="/" 
              class="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600 transition-colors"
              active-class="border-b-2 border-blue-500 font-semibold"
            >
              首页
            </RouterLink>
          
          </div>
        </div>
      </div>
    </nav>

    <!-- 路由视图 -->
    <RouterView />
  </div>
</template>

<style>
/* 添加路由切换动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>