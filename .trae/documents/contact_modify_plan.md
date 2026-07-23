# 联系方式修改计划

## 需求分析

用户要求修改联系方式区域：
- 删除：手机号、GitHub、Twitter、LinkedIn
- 添加：微信二维码扫码联系（图片已存在于 `public/QRcode.png`）

## 文件分析

### 1. 数据层 - `src/data/placeholder.js`

当前 `personalInfo` 对象包含：
- `phone: '15397581616'` - 需要删除
- `social` 对象包含 `github`、`twitter`、`linkedin` - 需要删除

### 2. 组件层 - `src/components/ContactFooter.jsx`

需要修改的内容：
- 第3行：删除 `Github, Twitter, Linkedin, Phone` 图标导入
- 第27-31行：删除 `socialLinks` 数组定义
- 第100-112行：删除手机号展示区域
- 第114-134行：删除社交链接展示区域
- 在邮箱下方添加微信二维码展示区域

## 修改步骤

### 步骤1：修改 `src/data/placeholder.js`
- 删除 `phone` 字段
- 删除 `social` 对象（或清空内容）

### 步骤2：修改 `src/components/ContactFooter.jsx`
- 删除不必要的图标导入
- 删除 `socialLinks` 数组
- 删除手机号展示代码块
- 删除社交链接展示代码块
- 添加微信二维码展示代码

## 设计方案

微信二维码展示设计：
- 使用现有 glass 卡片风格，保持视觉一致性
- 显示二维码图片，尺寸约 120x120
- 添加提示文字"扫码添加微信"
- 使用 framer-motion 动画保持和其他元素一致的入场效果

## 风险与注意事项

- 确保 `public/QRcode.png` 文件存在（已确认存在）
- 修改后需重新构建测试，确保没有引用错误
- 保持动画效果与其他元素一致

## 验证方式

1. 运行 `npm run build` 确保构建成功
2. 运行 `npm run dev` 预览效果
3. 推送代码后检查 GitHub Pages 在线效果
