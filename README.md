# Doki-UI
 一个简易的个人组件库。
 
<div align="center">

[Github](https://github.com/CainHappyfish/Doki-UI) | 
[Docs](https://cainhappyfish.github.io/dokiDocs/) |
[Preview](https://doki-ui-preview-rnxg-flxic9tkd-cainhappyfishs-projects.vercel.app/)
    
</div>


安装：

```bash
# 本体
npm install -D doki-ui
# 依赖
npm install -D @vitejs/plugin-vue axios @vueuse/core sass typescript vite vite-plugin-dts vue-tsc
```

在Vue项目文件中：

- `main.ts`
    ```typescript
  import { createApp } from 'vue'
  // import './style.css'
  import App from './App.vue'
  import DokiUI from "doki-ui/dist/doki-ui.js"
  import "doki-ui/dist/style.css"
  import "doki-ui/packages/styles/index.scss"
  
  createApp(App).use(DokiUI).mount('#app')
  ```

文档施工中...

使用可先参考src文件夹中的preview

version 2 计划中:

组件

- 复选按钮
- 图片预览
- 分页可修改
- 触底加载 
- 圆形菜单
- 环形进度条
- 仪表盘进度条
- 加载
- 弹窗可拖动
- 拖曳布局
- 照片墙
- 表单
- 时间选择器
- 颜色选择器
- 表格功能

优化
- 包使用
