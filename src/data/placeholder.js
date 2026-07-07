import {
  Cpu, Eye, Glasses, Layers, Headphones,
  Smartphone, Warehouse, Wrench, Plane, Package,
  BarChart3, Brain, Globe, Palette, Smartphone as AppIcon, Zap,
  Code, Camera, Gamepad2, Map, ShoppingBag,
  GraduationCap,
} from 'lucide-react'

// ============ 个人信息 ============
export const personalInfo = {
  name: '杨镕键',
  title: '智能硬件产品经理',
  subtitle: '8年+智能硬件经验，主攻硬件、OS、APP、视觉算法，丰富多端产品设计、开发与落地经验',
  email: 'master_yrj@163.com',
  phone: '15397581616',
  location: '中国 · 杭州',
  social: {
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
}

// ============ 导航链接 ============
export const navLinks = [
  { id: 'hero', label: '首页' },
  { id: 'experience', label: '经历' },
  { id: 'projects', label: '项目' },
  { id: 'skills', label: '技能' },
  { id: 'education', label: '教育' },
  { id: 'contact', label: '联系' },
]

// ============ 教育背景 ============
export const education = {
  school: '海南大学三亚学院',
  degree: '全日制本科',
  major: '软件工程',
  period: '2014.09 - 2018.06',
  icon: GraduationCap,
}

// ============ 工作经历 ============
export const experiences = [
  {
    id: 1,
    slug: 'zhuimi-wearable',
    period: '2025.12 - 至今',
    company: '瞳宇科技（杭州）有限公司',
    companyShort: '追觅智能穿戴 BU',
    role: '产品一号位',
    description: '负责打造具备市场领先性的智能穿戴产品（智能戒指、骨传导耳机、智能眼镜、智能手环），并完成商业闭环。',
    icon: Cpu,
    tags: ['智能穿戴', '商业闭环', '硬件选型', 'APP 迭代', '全渠道营销'],
    achievements: [
      { metric: '月营收', value: '超千万', label: '连续多月全渠道' },
      { metric: '锁单金额', value: '超千万', label: '骨传导耳机首发' },
      { metric: '产品线', value: '4 条', label: '戒指/耳机/眼镜/手环' },
    ],
    detailContent: [
      {
        type: 'overview',
        title: '工作概述',
        content: '负责打造具备市场领先性的智能穿戴产品（智能戒指、骨传导耳机、智能眼镜、智能手环），并完成商业闭环。',
      },
      {
        type: 'list',
        title: '核心职责',
        items: [
          '负责智能戒指（震动款、ECG款）产品设计，参与硬件选型并主导APP迭代，连续多月全渠道营收超千万',
          '负责智能骨传导运动耳机产品定义及商业闭环，推出行业首款水陆全能AI骨传导耳机，全渠道锁单超千万',
          '负责智能眼镜、智能手环项目的产品规划及定义，项目尚处保密阶段',
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'qiuguo-ar',
    period: '2024.10 - 2025.10',
    company: '杭州秋果计划科技有限公司',
    companyShort: '秋果计划',
    role: '产品经理',
    description: '打造对标 Meta Orion 的 AI+AR 眼镜、配件（EMG手环、智能戒指、智能表、Station）及其操作系统。',
    icon: Glasses,
    tags: ['AR 眼镜', '操作系统设计', 'AI 交互', '硬件选型', 'SLAM & 手势'],
    achievements: [
      { metric: '项目投入', value: '5kw 级', label: '对标 Meta Orion' },
      { metric: '产品矩阵', value: '5 款', label: '眼镜+4配件生态' },
      { metric: '交互方式', value: '3 种', label: '语音/手势/EMG' },
    ],
    detailContent: [
      {
        type: 'overview',
        title: '工作概述',
        content: '打造对标 Meta Orion 的 AI+AR 眼镜、配件（EMG手环、智能戒指、智能表、Station）及其操作系统。',
      },
      {
        type: 'list',
        title: '核心职责',
        items: [
          '负责设计眼镜产品的硬件形态（一体机和分体机创新形态），实现兼顾性能和轻便，并和硬件开发团队进行芯片、传感器等零部件选型',
          '负责牵头和 Mudra 进行 EMG 手环对接项目，利用手环实现眼镜系统内的交互',
          '参与智能戒指、智能表、Station 的方案选型、ID&结构设计，并将其作为交互设备打通与眼镜系统的交互',
          '负责设计适用于大 FOV 波导眼镜的 AI 操作系统，实现支持意图识别的系统级语音交互，并构建基于本产品的内容交互设计规范',
          '负责定义 AR 眼镜必须的 SLAM、3D双手手势等算法需求，制定数据采集、训练规范、验收标准',
        ],
      },
    ],
  },
  {
    id: 3,
    slug: 'yixian-xr',
    period: '2022.06 - 2024.10',
    company: '杭州易现先进科技有限公司',
    companyShort: '易现先进',
    role: '产品总监',
    description: '通过采集建图、3D编辑器、分发管理平台、眼镜的产品组合，打造 XR 从地图采集构建到内容制作再到分发的全链路创作生态。',
    icon: Layers,
    tags: ['XR 生态', '3D 编辑器', 'AR 眼镜', '高精地图', '数字娱乐'],
    achievements: [
      { metric: '创作者/企业', value: '5w+', label: '平台服务总量' },
      { metric: '有效内容', value: '17w+', label: '平台产生内容数' },
      { metric: '单项目营收', value: '超百万', label: '创作者最高营收' },
    ],
    detailContent: [
      {
        type: 'overview',
        title: '工作概述',
        content: '通过采集建图、3D编辑器、分发管理平台、眼镜的产品组合，打造 XR 从地图采集构建到内容制作再到分发的全链路创作生态。',
      },
      {
        type: 'list',
        title: '核心职责',
        items: [
          '打造 XR 内容从设计、生产到分发、运营的全链路工具，包含 3D 场景编辑器、内容管理平台、XR 分发 APP、POI 标注系统等',
          '负责自研 AR 眼镜产品设计和商业化落地，眼镜采用离轴反射方案，具备全彩大 FOV（72°）、支持 6DoF SLAM、高精度定位（±5cm），成功拓展至 3A 景点、大型多人数字艺术展、商超等多场景',
          '负责大场景地图的采集和构建解决方案，首次实现普通用户使用手机端 App 低成本采图（误差<5cm），推动开发场景自适应优化算法',
          '打造 OMGVerse 线下数字娱乐空间的一方内容，策划并开发包含射击、多人动作竞技、音游等 10 多种 AR 游戏',
        ],
      },
    ],
  },
  {
    id: 4,
    slug: 'alibaba-design',
    period: '2021.12 - 2022.06',
    company: '阿里巴巴',
    companyShort: '每平每屋设计家',
    role: '高级产品经理',
    description: '负责围绕 3D 家装设计工具难用的痛点，在全屋定制领域设计易用的板式定制工具。',
    icon: Warehouse,
    tags: ['3D 设计工具', '板式定制', '全屋定制', '3D 可视化'],
    achievements: [
      { metric: '产品类型', value: '橱柜/衣柜', label: '板式定制覆盖' },
      { metric: '体验升级', value: '3D 全景', label: '沉浸式预览' },
    ],
    detailContent: [
      {
        type: 'overview',
        title: '工作概述',
        content: '负责围绕 3D 家装设计工具难用的痛点，在全屋定制领域设计易用的板式定制工具。',
      },
      {
        type: 'list',
        title: '核心职责',
        items: [
          '设计板式定制功能，包含橱柜、衣柜、造型柜等多种板件组合的柜体，根据行业和工厂规范设计同时具备高效率和易用性的工具和功能',
          '根据工具设计出的装修方案提供 3D 全景预览、室内漫游等功能，增强用户视觉沉浸感，充分体现设计效果',
        ],
      },
    ],
  },
  {
    id: 5,
    slug: 'qizhi-drone',
    period: '2019.03 - 2021.06',
    company: '杭州奇志信息科技有限公司',
    companyShort: '奇志信息',
    role: '产品经理',
    description: '从 0 搭建无人机土方工程作业解决方案，解决业内人工土方测量效率低、成本高、精度差的固有问题。',
    icon: Plane,
    tags: ['无人机', '土方工程', '三维重建', '飞控程序', '0→1'],
    achievements: [
      { metric: '测量精度', value: '≤2cm', label: '厘米级精度' },
      { metric: '效率提升', value: '+60%', label: '数据采集效率' },
      { metric: '交付周期', value: '-40%', label: '项目交付提速' },
    ],
    detailContent: [
      {
        type: 'overview',
        title: '核心目标',
        content: '从 0 搭建无人机土方工程作业解决方案，解决业内人工土方测量效率低、成本高、精度差的固有问题。',
      },
      {
        type: 'list',
        title: '核心职责',
        items: [
          '硬件选型与调试：选定 DJI 精灵 4 行业版 + RTK 模块，实现厘米级测量精度（最终测量误差 ≤2cm）',
          '软件方案设计：开发 APP 端自动化飞控程序，支持"拖拉拽"操作，数据采集效率提升 60%',
          '设计视觉三维重建系统，实现土方数据自动化处理与报告生成，项目交付周期缩短 40%',
        ],
      },
    ],
  },
  {
    id: 6,
    slug: 'tuya-oem',
    period: '2018.02 - 2019.03',
    company: '杭州涂鸦科技有限公司',
    companyShort: '涂鸦科技',
    role: '产品经理',
    description: '打造智能硬件 App OEM 业务体系，服务 5w+ 智能家居品牌商及工厂。',
    icon: Package,
    tags: ['IoT 平台', 'App OEM', '跨端覆盖', '多语言', '智能家居'],
    achievements: [
      { metric: '服务客户', value: '5w+', label: '品牌商及工厂' },
      { metric: '启动速度', value: '快 20%', label: 'vs 同期米家 App' },
      { metric: '语言覆盖', value: '12 国', label: '小语种转化 +35%' },
    ],
    detailContent: [
      {
        type: 'overview',
        title: '核心目标',
        content: '打造智能硬件 App OEM 业务体系，服务 5w+ 智能家居品牌商及工厂。',
      },
      {
        type: 'list',
        title: '核心职责',
        items: [
          '业务模式设计：针对不同客户能力，输出"SDK 开放平台（高定制需求）+ App OEM 流水线（无开发能力）"双方案',
          '产品迭代与优化：负责涂鸦智能 App 迭代，设计智能场景、设备面板模块，启动速度较同期米家 App 快 20%',
          '搭建多语言系统（覆盖 12 国语言），通过外部翻译合作，小语种区域业务转化率提升 35%',
          '基于 RN 设计"智能设备控制面板"，实现 App / 网页 / 小程序三端覆盖，极大拓展用户触达面',
        ],
      },
    ],
  },
]

// ============ 项目经历 ============
export const projects = [
  {
    id: 1,
    slug: 'dreame-ring',
    title: '追觅 AI 智能戒指（震动款）',
    category: '智能穿戴',
    description: '打造全球首款量产震动 AI 智能戒指，落地"无感佩戴，有感关怀"。',
    period: '2025.12 - 2026.01',
    role: '产品经理',
    gradient: 'from-indigo-600 via-purple-600 to-pink-500',
    icon: Eye,
    techStack: ['智能硬件', '震动交互', '健康 APP', '供应商管理', '全渠道营销'],
    achievements: [
      { metric: '产品定位', value: '全球首款', label: '量产震动 AI 戒指' },
      { metric: '交互设计', value: '优先级分级', label: '主被动震动反馈' },
    ],
    detailContent: [
      {
        type: 'overview',
        title: '项目简介',
        content: '打造全球首款量产震动 AI 智能戒指，落地"无感佩戴，有感关怀"。',
      },
      {
        type: 'list',
        title: '个人职责',
        items: [
          '设计核心震动交互体验，按主被动和优先级细分震动反馈，打造最佳戒指交互',
          '负责 Dreame Health APP 产品定义，以健康为核心以用户体验为目的设计适用所有人群的 APP 端',
          '深度参与供应商合作开发项目，确保产品按时按量交付，并参与全渠道营销事件，辅助输出产品侧物料',
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'wigain-omnision',
    title: 'Wigain Omnision',
    category: 'AR 眼镜',
    description: '打造国内首款量产碳化硅全彩光波导、全场景 6DoF 的 AI+AR 眼镜，项目投入 5kw 级。',
    period: '2024.10 - 2025.10',
    role: '硬件产品经理',
    gradient: 'from-slate-700 via-zinc-600 to-stone-500',
    icon: Glasses,
    techStack: ['碳化硅光波导', '6DoF SLAM', 'XR 操作系统', '3D 手势', '双目 SLAM', '分体双芯'],
    achievements: [
      { metric: '项目级别', value: '5kw 级', label: '总投入规模' },
      { metric: '产品定位', value: '国内首款', label: '碳化硅全彩波导' },
      { metric: '技术栈', value: '全场景 6DoF', label: '对标 Meta Orion' },
    ],
    detailContent: [
      {
        type: 'overview',
        title: '项目简介',
        content: '打造国内首款量产碳化硅全彩光波导、全场景 6DoF 的 AI+AR 眼镜，项目投入 5kw 级。',
      },
      {
        type: 'list',
        title: '个人职责',
        items: [
          '打造对标 Orion 的大 FOV、6DoF、全彩光波导 AR 眼镜硬件，深度参与零部件（波导、Camera、芯片、ID设计）供应商的需求对接、产品选型',
          '设计基于 XR 的完整操作系统（包含 SLAM & 手势等底层服务、软硬件控制、系统 APP、SDK），并构建基于本眼镜产品的内容交互范式',
          '负责定义 6DoF 定位、双目 SLAM、3D 双手手势等算法的数据采集 & 训练规范、验收标准，并根据眼镜形态优化交互方式',
          '负责定义和设计眼镜的分体双芯产品形态，本机低功耗使用，分体模式利用 Station 的边缘算力和无线传输能力提供更佳显示效果',
        ],
      },
    ],
  },
]

// ============ 技能 ============
export const skills = [
  {
    id: 1,
    title: '智能硬件产品设计',
    description: '智能穿戴、AR眼镜、IoT设备的硬件选型、产品定义与全生命周期管理',
    icon: Cpu,
    level: 95,
  },
  {
    id: 2,
    title: '操作系统 & 交互设计',
    description: 'XR 操作系统架构、AI 语音交互、手势识别、多模态交互规范设计',
    icon: Brain,
    level: 90,
  },
  {
    id: 3,
    title: '跨端产品管理',
    description: 'APP / Web / 小程序 / Station 多端产品设计与协同开发',
    icon: AppIcon,
    level: 92,
  },
  {
    id: 4,
    title: 'AI & 视觉算法应用',
    description: 'SLAM 定位、3D 重建、手势追踪等算法的需求定义与验收标准制定',
    icon: Camera,
    level: 85,
  },
  {
    id: 5,
    title: 'AIGC & Vibcoding',
    description: '精通 AI 辅助开发，通过自然语言驱动复杂产品原型的快速搭建',
    icon: Zap,
    level: 88,
  },
  {
    id: 6,
    title: '数据驱动决策',
    description: 'SQL、数据埋点、A/B 实验、用户行为分析与产品增长策略',
    icon: BarChart3,
    level: 87,
  },
]
