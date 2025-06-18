# Vue 3 + TypeScript + Vite + Tailwind CSS 项目模板

这是一个集成了 Vue 全家桶的现代化项目模板。

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **TypeScript** - JavaScript 的超集
- **Vite** - 下一代前端构建工具
- **Vue Router 4** - 官方路由管理器
- **Pinia** - 状态管理库
- **Tailwind CSS 3** - 原子化 CSS 框架
- **@vueuse/core** - Vue 组合式函数集合
- **axios** - HTTP 客户端

## 项目结构

```
src/
├── router/          # 路由配置
├── stores/          # Pinia 状态管理
├── views/           # 页面组件
├── components/      # 通用组件
├── composables/     # 组合式函数
├── services/        # API 服务
├── assets/          # 静态资源
└── style.css        # 全局样式
```

## 开始使用

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build
```

## Tauri 命令

```bash
# 启动 Tauri 开发环境
pnpm tauri dev

# 构建 Tauri 应用
pnpm tauri build
```
