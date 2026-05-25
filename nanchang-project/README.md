# 魅力南昌 - 城市介绍网站

> 《Web 前端开发》课程期末大作业

## 📁 项目结构

```
nanchang-project/
├── index.html          # 首页
├── history.html        # 千年文脉（历史）
├── food.html           # 市井烟火（美食与方言）
├── modern.html         # 摩登洪城（现代发展）
├── contact.html        # 豫章有约（旅游路线与留言板）
├── css/
│   └── style.css       # 全局公共样式
├── js/
│   └── main.js         # 公共脚本（菜单切换 + 留言板逻辑）
└── images/             # 图片目录（需自行添加图片）
```

## 🚀 快速开始

1. **克隆或下载本项目**到本地
2. **准备图片资源**：在 `images/` 目录下放入以下图片文件：
   - `tengwangge.jpg` - 滕王阁
   - `bayi.jpg` - 八一起义纪念馆
   - `haihunhou.jpg` - 海昏侯国遗址
   - `banfen.jpg` - 南昌拌粉
   - `waguan.jpg` - 瓦罐汤
   - `baitanggao.jpg` - 白糖糕
   - `lihao.jpg` - 藜蒿炒腊肉
   - `honggutan.jpg` - 红谷滩 CBD
   - `star.jpg` - 南昌之星摩天轮
   - `qiushui.jpg` - 秋水广场
   - `vr.jpg` - VR 产业（可选，无图时显示渐变背景）
   - `aircraft.jpg` - 航空城（可选，无图时显示渐变背景）

3. **打开浏览器**，直接双击 `index.html` 即可预览

## ✨ 技术亮点

### HTML5
- 语义化标签 (`<header>`, `<main>`, `<section>`, `<footer>`, `<article>`)
- 表单验证 (`required` 属性)
- 响应式 meta 标签

### CSS3
- **CSS 变量** (`:root`) 统一管理主题色
- **Flexbox** 布局导航栏和卡片
- **Grid** 布局响应式网格
- **@media** 媒体查询适配移动端
- **transform & transition** 实现 Hover 动画
- **3D transform** 实现南昌话卡片翻转效果
- **linear-gradient** 模拟夜景 Banner

### JavaScript (ES6+)
- **事件监听** (`addEventListener`)
- **DOM 操作** (`querySelector`, `createElement`, `insertBefore`)
- **LocalStorage** 实现留言板数据持久化
- **模板字符串** 动态生成 HTML
- **XSS 防护** 转义用户输入

## 📱 响应式设计

- 桌面端：多列网格布局，完整导航菜单
- 移动端 (<768px)：单列布局，汉堡菜单折叠导航

## 🎨 配色方案

| 颜色 | 色值 | 用途 |
|------|------|------|
| 英雄红 | `#C8102E` | 主按钮、强调文字 |
| 滕阁金 | `#C9A961` | 装饰线、副标题 |
| 正文黑 | `#333333` | 主要文字 |
| 辅助灰 | `#666666` | 次要文字 |
| 页面背景 | `#f9f9f9` | 整体背景 |

## 📝 使用说明

1. **修改个人信息**：在每个 HTML 文件的 `<footer>` 中，将"你的名字"和"学号"替换为真实信息
2. **添加图片**：将准备好的图片放入 `images/` 文件夹
3. **自定义内容**：可根据需要修改各页面的文字内容

## 🔧 开发建议

- 使用 VS Code 配合 Live Server 插件进行实时预览
- 使用 Chrome DevTools 调试响应式布局
- 检查控制台确保无 JavaScript 错误

## 📄 许可证

本项目为课程作业，仅供学习交流使用。

---

**作者**: 你的名字  
**学号**: XXXXXX  
**课程**: Web 前端开发  
**日期**: 2024 年
