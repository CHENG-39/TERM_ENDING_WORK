# 魅力南昌 - 城市介绍网站

## 项目简介
这是《Web 前端开发》课程的期末大作业，一个介绍南昌城市的静态网站。

## 技术栈
- **纯原生 HTML5 + CSS3 + JavaScript**
- 无外部框架依赖（无 Bootstrap、Vue、React 等）
- 使用 CSS 变量、Flexbox、Grid 布局
- 响应式设计，适配移动端
- localStorage 实现留言板数据持久化

## 项目结构
```
nanchang-project/
├── index.html          # 首页
├── history.html        # 千年文脉
├── food.html           # 市井烟火
├── modern.html         # 摩登洪城
├── contact.html        # 豫章有约（留言板）
├── css/
│   └── style.css       # 全局样式
├── js/
│   └── main.js         # 公共脚本（菜单切换 + 留言板逻辑）
└── images/             # 图片目录（需自行添加）
```

## 页面亮点
1. **首页**: CSS 渐变模拟赣江夜景 Banner
2. **历史页**: Grid 布局展示历史地标，图片 Hover 放大效果
3. **美食页**: CSS 3D 翻转卡片（南昌话词典）
4. **现代页**: 左右图文排版展示产业名片
5. **关于页**: 旅游路线表格 + localStorage 留言板

## 使用说明
1. 在 `images/` 目录下添加以下图片文件：
   - tengwangge.jpg, bayi.jpg, haihunhou.jpg
   - banfen.jpg, waguan.jpg, baitanggao.jpg, lihao.jpg
   - honggutan.jpg, star.jpg, qiushui.jpg

2. 直接在浏览器中打开 `index.html` 即可预览

## 作者信息
请将各页面 footer 中的"你的名字"和"学号"替换为真实信息。
