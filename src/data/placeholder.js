import {
  Cpu, Eye, Glasses, Layers, Headphones,
  Smartphone, Warehouse, Wrench, Plane, Package,
  BarChart3, Brain, Globe, Palette, Smartphone as AppIcon, Zap,
  Code, Camera, Gamepad2, Map, ShoppingBag, Users,
  GraduationCap, Music, MessageSquare, Bot, Monitor, Radio,
} from 'lucide-react'

// ============ 个人信息 ============
export const personalInfo = {
  name: '杨镕键',
  title: '智能硬件 x AI 产品经理',
  subtitle: '8年+跨端产品经验，深耕智能穿戴、AR 眼镜、AI Agent 及操作系统，擅长将前沿技术转化为可规模化的产品方案',
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
  { id: 'about', label: '关于' },
  { id: 'experience', label: '经历' },
  { id: 'projects', label: '项目' },
  { id: 'skills', label: '技能' },
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
    description: '作为产品一号位，主导智能穿戴全品类（智能戒指、骨传导耳机、智能眼镜、智能手环）的产品定义与商业闭环，连续多月全渠道营收超千万。',
    icon: Cpu,
    tags: ['智能穿戴', '商业闭环', '多品类统筹', '全渠道营销', 'AI 能力落地'],
    achievements: [
      { metric: '月营收', value: '超千万', label: '连续多月全渠道' },
      { metric: '锁单金额', value: '超千万', label: '骨传导耳机首发' },
      { metric: '产品线', value: '4 条', label: '戒指/耳机/眼镜/手环' },
    ],
    detailContent: [
      {
        type: 'overview',
        title: '工作概述',
        content: '作为产品一号位，统筹智能戒指（震动款、ECG 款）、AI 骨传导耳机、智能眼镜、智能手环的产品定义与商业闭环，推动多品类营收连续多月破千万。',
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
    description: '主导对标 Meta Orion 的 AI+AR 眼镜及 4 款交互配件（EMG 手环、智能戒指、智能表、Station），并设计全设备协同的 AR 操作系统。',
    icon: Glasses,
    tags: ['AR 眼镜', '操作系统', 'AI Agent', '芯片选型', 'SLAM/手势'],
    achievements: [
      { metric: '项目投入', value: '5kw 级', label: '对标 Meta Orion' },
      { metric: '产品矩阵', value: '5 款', label: '眼镜+4配件生态' },
      { metric: '交互方式', value: '3 种', label: '语音/手势/EMG' },
    ],
    detailContent: [
      {
        type: 'overview',
        title: '工作概述',
        content: '主导 5kw 级 AI+AR 眼镜项目，对标 Meta Orion，打造眼镜本体及 4 款交互配件（EMG 手环、智能戒指、智能表、Station），并设计全设备协同的 AR 操作系统。',
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
    description: '主导 XR 全链路创作生态，打通高精地图采集 - 3D 场景编辑 - 内容分发 - AR 眼镜体验的完整闭环，服务超过 5 万创作者。',
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
        content: '主导 XR 全链路创作生态，整合自研 AR 眼镜与平台工具链，打通高精地图采集 - 3D 场景编辑 - 内容分发 - AR 眼镜体验闭环，累计服务 5 万+创作者，产出 17 万+有效内容，创作者单项目最高营收超百万。',
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
    description: '聚焦家装设计工具操作复杂的行业痛点，为全屋定制领域打造高效、低门槛的 3D 板式定制解决方案。',
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
        content: '聚焦家装设计工具复杂度高、上手门槛大的行业痛点，为全屋定制领域打造高效低门槛的 3D 板式定制工具，涵盖橱柜、衣柜、造型柜等多品类，并提供 3D 全景预览与室内漫游等沉浸式体验。',
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
    description: '从 0 到 1 搭建无人机土方工程全链路方案，以厘米级精度与自动化作业替代低效的人工测量模式。',
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
        content: '从 0 到 1 搭建无人机土方工程全链路解决方案，以 DJI 精灵 4 + RTK 模块实现厘米级精度（误差 <=2cm），通过自动化飞控与视觉三维重建全面替代低效人工测量，交付周期缩短 40%。',
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
    description: '搭建智能硬件 App OEM 数字化产线，以 SDK 开放平台 + OEM 流水线双方案赋能 5 万+智能家居客户。',
    icon: Package,
    tags: ['IoT 平台', '数字化产线', '跨端适配', '多语言国际化', '智能家居'],
    achievements: [
      { metric: '服务客户', value: '5w+', label: '品牌商及工厂' },
      { metric: '启动速度', value: '快 20%', label: 'vs 同期米家 App' },
      { metric: '语言覆盖', value: '12 国', label: '小语种转化 +35%' },
    ],
    detailContent: [
      {
        type: 'overview',
        title: '核心目标',
        content: '搭建智能硬件 App OEM 数字化产线，针对不同客户能力输出 SDK 开放平台（高定制）+ OEM 流水线（零代码）双方案，通过模块化控制面板实现 App/Web/小程序三端覆盖，累计赋能 5 万+品牌商及工厂。',
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
    description: '主导全球首款量产震动 AI 智能戒指的产品设计，以精细化震动交互革新可穿戴设备的用户体验。',
    period: '2025.12 - 2026.01',
    role: '产品经理',
    gradient: 'from-teal-900 via-zinc-800 to-neutral-800',
    icon: Eye,
    techStack: ['智能硬件', '震动交互', '健康 APP', '供应商管理', '全渠道营销'],
    achievements: [
      { metric: '产品定位', value: '全球首款', label: '量产震动 AI 戒指' },
      { metric: '交互创新', value: '优先级分级', label: '精细化震动反馈体系' },
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
    description: '主导国内首款碳化硅全彩光波导 AR 眼镜的产品定义与硬件选型，实现全场景 6DoF 精准定位。',
    period: '2024.10 - 2025.10',
    role: '硬件产品经理',
    gradient: 'from-slate-800 via-zinc-800 to-neutral-700',
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
  {
    id: 3,
    slug: 'zhuimi-ai-wearable',
    title: '智能穿戴 AI 能力矩阵',
    category: 'AI 产品',
    description: '统筹多品类智能穿戴的 AI 能力矩阵，制定规则引擎-ML-大模型三层演进路线，将 AI 转化为可感知的差异化优势。',
    period: '2025.12 - 至今',
    role: '负责人',
    gradient: 'from-blue-900 via-zinc-800 to-neutral-800',
    icon: Brain,
    techStack: ['大模型接入', '语音交互', '运动识别', '健康监测', '商业化闭环'],
    achievements: [
      { metric: '产品线', value: '4 条', label: 'AI 能力覆盖品类' },
      { metric: '商业模式', value: '商业化闭环', label: '全渠道锁单超千万' },
    ],
    detailContent: [
      { type: 'overview', title: '项目背景', content: '作为产品一号位，在多品类智能穿戴产品上系统性地规划AI能力布局，将大模型/AI算法转化为用户可感知的差异化产品价值。' },
      { type: 'list', title: '核心职责', items: [
        'AI能力产品化矩阵规划：抽象共性AI能力需求（语音交互、健康数据分析、运动姿态识别、智能场景推荐），制定"规则引擎→传统ML→大模型API"三层演进路线',
        'AI骨传导耳机标杆产品：定义"水陆全能+AI"差异化策略，整合语音交互/运动识别/健康监测三大AI能力，推动研发接入语音大模型API',
        '定义AI功能核心体验指标（语音唤醒率、运动识别准确率、健康数据偏差率），建立自动化数据回流与效果评估机制',
        '商业化闭环：主导定价策略与渠道规划，全渠道锁单超千万，建立AI功能使用率看板指导下一代产品规划',
      ]},
    ],
  },
  {
    id: 4,
    slug: 'guobao-ai-agent',
    title: '果宝 AI 智能助手',
    category: 'AI Agent',
    description: '从 0 到 1 定义并落地眼镜端 AI 助手果宝，构建意图识别-任务规划-工具调用的完整 Agent 交互闭环。',
    period: '2024.10 - 2025.10',
    role: '产品经理',
    gradient: 'from-violet-900 via-zinc-800 to-neutral-800',
    icon: MessageSquare,
    techStack: ['AI Agent', '意图识别', '多模态输入', '大模型对接', '用户反馈闭环'],
    achievements: [
      { metric: '演进路线', value: 'V1→V3', label: 'Agent 版本规划' },
      { metric: '种子用户', value: '20 名', label: '内测社群反馈驱动' },
    ],
    detailContent: [
      { type: 'overview', title: '项目背景', content: '在AI+AR眼镜项目中，大模型技术的突破使Agent从概念走向可用。主导设计并落地了眼镜端AI智能助手"果宝"，将大模型能力封装为终端Agent产品。' },
      { type: 'list', title: '核心职责', items: [
        '定义Agent产品形态与路线图：从用户真实场景出发，设计"意图识别→任务规划→工具调用→结果反馈"交互闭环，制定V1语音助手→V2多模态Agent→V3自主执行Agent路线图',
        '建立核心指标体系：任务完成率、意图识别准确率、单次交互时长、用户主动使用频次',
        '推动模型与产品协同进化：将眼镜端多模态输入设计为模型可消费的标准格式，基于用户反馈提出针对性优化需求',
        '用户反馈驱动迭代：搭建20名种子用户内测社群，每周从日志中提取高频场景与失败Case，优先优化"实时翻译"等高频场景',
      ]},
    ],
  },
  {
    id: 5,
    slug: 'oasis-os',
    title: 'Oasis OS',
    category: '操作系统',
    description: '设计以 AI 为底层驱动的 AR 眼镜操作系统，打通手机/眼镜双端数据，实现跨设备主动式智能服务。',
    period: '2024.10 - 2025.10',
    role: '产品经理',
    gradient: 'from-emerald-900 via-zinc-800 to-neutral-700',
    icon: Monitor,
    techStack: ['场景化AI', '双端协同', '系统级AI接口', '主动式服务'],
    achievements: [
      { metric: '双端覆盖', value: '手机+眼镜', label: 'AI 助手果宝植入' },
      { metric: '场景', value: '观影/会议/旅游', label: '主动式 AI 服务' },
    ],
    detailContent: [
      { type: 'overview', title: '项目简介', content: '搭建以AI为底层驱动力的AR眼镜操作系统，利用手机和眼镜给AI装上眼耳口鼻，化身独属个人的全能管家。' },
      { type: 'list', title: '核心职责', items: [
        '在系统层面构建场景化AI能力基础，将系统行为、状态、用户行为按场景归类，加速意图识别、纠正行为指令',
        '手机端APP、眼镜端OS均植入AI助手"果宝"，双端数据互通、传感器共享，一端脱网时保障另一端AI体验',
        '设计系统级AI能力接口，适时提供视觉焦点、相机画面、当前显示内容等额外数据辅助AI决策',
        '设计观影、会议、旅游场景下的主动式AI服务，辅助用户判断或推荐后续可行动作',
      ]},
    ],
  },
  {
    id: 6,
    slug: 'ezxr-glasses',
    title: 'EZXR AR Glasses',
    category: 'AR 眼镜',
    description: '主导自研 AR 眼镜的产品策略与硬件设计，以离轴反射方案实现 72 度大 FOV 全彩显示与高精度定位。',
    period: '2022.10 - 2024.09',
    role: '负责人',
    gradient: 'from-orange-900 via-zinc-800 to-neutral-800',
    icon: Glasses,
    techStack: ['大FOV全彩', '芯片选型', 'SLAM算法', '量产交付'],
    achievements: [
      { metric: '关键特点', value: '大FOV全彩', label: '不影响佩戴眼镜用户' },
      { metric: '交付状态', value: '量产出货', label: '通过完整设计/生产验证' },
    ],
    detailContent: [
      { type: 'overview', title: '项目简介', content: '突破手机、平板的屏幕大小和空间交互限制，打造大FOV、适合商业化运营、低使用门槛的AR眼镜设备。' },
      { type: 'list', title: '核心职责', items: [
        '对MR头显、AR眼镜方案进行完整评估，抽象出大Fov全彩、不影响佩戴眼镜用户、保障续航等关键特点，交付设计师完成概念设计',
        '根据业务需要和供应商范围，选定芯片、传感器等元件及手柄等配件，完成详细设计',
        '推动OS团队和算法团队将Server、BSP驱动、SLAM和手势算法结合设计架构，确保充分发挥硬件性能',
        '和供应商配合完成设计验证、生产验证，最终量产出货',
      ]},
    ],
  },
  {
    id: 7,
    slug: 'xr-developer-ecosystem',
    title: 'XR 开发者生态',
    category: '平台产品',
    description: '搭建 XR 开发者创作平台与社区体系，以零代码工具降低创作门槛，吸引 1500+ 开发者，驱动内容生态繁荣。',
    period: '2022.10 - 2024.10',
    role: '负责人',
    gradient: 'from-amber-900 via-zinc-800 to-neutral-700',
    icon: Users,
    techStack: ['创作工具链', 'Unity SDK', '社群运营', 'Kickstarter', '商业生态'],
    achievements: [
      { metric: '开发者', value: '1500+', label: '三届大赛累计入驻' },
      { metric: '创作效率', value: '90 → 10 min', label: '创建时间降至 1/9' },
    ],
    detailContent: [
      { type: 'overview', title: '项目简介', content: 'AR眼镜的价值在于内容生态。主导搭建面向XR开发者的创作平台与社区体系，通过降低创作门槛来丰富内容供给。' },
      { type: 'list', title: '核心职责', items: [
        '创作工具链产品化：设计Web端零代码拖拽式场景编辑与Unity专业SDK双线方案，覆盖从轻量到专业开发者的完整梯度，将AR场景创建时间从90分钟缩短至10分钟',
        '社群运营与反馈驱动：连续举办三届XR内容创作大赛，累计吸引1500+开发者入驻，建立"社群反馈→需求评审→版本迭代→效果回访"运营闭环',
        '商业生态拓展：AR眼镜在3个百万级商业项目中完成交付，启动Kickstarter众筹并完成发布前所有材料准备',
      ]},
    ],
  },
  {
    id: 8,
    slug: 'digital-human',
    title: '2D & 3D 问答数字人',
    category: 'AI 产品',
    description: '主导 2D/3D 数字人产品设计与模块化拆解，建立 100+ 参数资产规范，以 SAAS + 私有云模式完成政务标杆落地。',
    period: '2023.01 - 2023.06',
    role: '产品经理',
    gradient: 'from-rose-900 via-zinc-800 to-neutral-800',
    icon: Bot,
    techStack: ['数字人', 'SAAS', '私有云', '资产规范', '政务'],
    achievements: [
      { metric: '交付效率', value: '缩短 40%', label: '数字人部件资产库' },
      { metric: '商业模式', value: 'SAAS+私有云', label: '政务标杆客户落地' },
    ],
    detailContent: [
      { type: 'overview', title: '项目简介', content: '通过更加自然、形象的交互模式，提升用户体验，拓展问答系统在客服、娱乐领域的应用场景。' },
      { type: 'list', title: '核心职责', items: [
        '分拆模型、音色、驱动、语料模块进行产品设计，引入外部服务商提升产品效果',
        '主导制定内部数字人资产规范，建立包含100+参数的数字人部件资产库，项目需求交付周期缩短40%',
        '推出基础版SAAS+定制私有云的商业模式，完成政务领域标杆客户落地',
      ]},
    ],
  },
  {
    id: 9,
    slug: 'ar-rhythm-game',
    title: '潮音律动（AR 音游）',
    category: '游戏',
    description: '利用自研 AR 眼镜的 6DoF 手势识别特性，设计并交付强节奏手势交互音游，已在线下门店上线运营。',
    period: '2023.06 - 2023.09',
    role: '游戏制作人',
    gradient: 'from-indigo-900 via-zinc-800 to-neutral-700',
    icon: Music,
    techStack: ['AR游戏', '手势交互', '线下运营', '服务器', '结算系统'],
    achievements: [
      { metric: '手势支持', value: '10+ 种', label: '动态手势识别' },
      { metric: '落地场景', value: '实体店', label: '线下运营上线' },
    ],
    detailContent: [
      { type: 'overview', title: '项目简介', content: '利用���研眼镜的优势特性，开发一款强烈节奏感的手势交互音游，突破平面限制给玩家带来沉浸式的音游体验。' },
      { type: 'list', title: '核心职责', items: [
        '进行AR/VR及平面多平台音游玩法分析，提取玩法特色和共性，支持10+种动态手势',
        '策划游戏内容，利用传统玩法降低入门门槛的同时，增加手势等AR交互特性带来全新体验',
        '最终在实体店上线运营，额外设计和开发运营端、服务器产品，完成线下游戏对局和费用结算',
      ]},
    ],
  },
  {
    id: 10,
    slug: 'qizhi-survey',
    title: '奇志测绘（自动化飞控 APP）',
    category: '行业应用',
    description: '基于大疆无人机 SDK 设计自动化测绘方案，将土方测量精度提升 5 倍、效率提升 20 倍，达到厘米级精度。',
    period: '2019.05 - 2020.01',
    role: '产品经理',
    gradient: 'from-cyan-900 via-zinc-800 to-neutral-800',
    icon: Plane,
    techStack: ['DJI SDK', 'RTK定位', '三维重建', '自动化飞控', 'Web报告系统'],
    achievements: [
      { metric: '精度提升', value: '5 倍', label: '相对传统人工测绘' },
      { metric: '效率提升', value: '20 倍', label: '厘米级测量精度' },
    ],
    detailContent: [
      { type: 'overview', title: '项目简介', content: '专为客户方实施人员及外业人员操控无人机完成空间数据采集而设计，大幅降低航拍测量操作成本。' },
      { type: 'list', title: '核心职责', items: [
        '设计无人机土方测量方案，将项目地貌高效重建并具备厘米级精度，较传统人工测绘精度提升5倍、效率提升20倍',
        '从0搭建无人机自动化作业全链路工具：无人机选型、自动化指令控制端（App）、数据勘察审阅端（PC程序）、报告生产&提交&查阅系统（Web）',
        '完成对地产企业从集团审计/项目/成本部门到子公司项目经理/监理在土方测量、巡检需求上的全面覆盖',
      ]},
    ],
  },
  {
    id: 11,
    slug: 'app-oem-pipeline',
    title: 'App OEM 数字化产线',
    category: '平台产品',
    description: '构建智能家电 App 数字化产线，以模块化面板 + 多语言体系实现多端覆盖与 12 国语言热更新，赋能 5 万+品牌商。',
    period: '2018.02 - 2020.01',
    role: '产品经理',
    gradient: 'from-sky-900 via-zinc-800 to-neutral-700',
    icon: Smartphone,
    techStack: ['SDK开放平台', 'OEM流水线', '模块化面板', '多语言系统', '跨端覆盖'],
    achievements: [
      { metric: '交付方案', value: 'SDK+OEM', label: '双线覆盖不同客户能力' },
      { metric: '语言覆盖', value: '12 国', label: '多语言热更新系统' },
    ],
    detailContent: [
      { type: 'overview', title: '项目简介', content: '客户需要自有品牌的家电控制App但缺乏开发能力，打造一条高效复用且能根据不同家电产品适配的App数字化产线。' },
      { type: 'list', title: '核心职责', items: [
        '调研客户需求，设计SDK、OEM两套流程：高定制走SDK开放平台，无开发能力走OEM流水线，通过配置和拖拽快速生成App',
        '采用模块化能力，使SDK和OEM交付的App通过同一套"控制面板"适配App、网页、小程序三端',
        '开发多语言管理系统，通过字段包实现同一App在不同国家语言上的快速热更新，无需重复打包',
      ]},
    ],
  },
]

// ============ 技能 ============
export const skills = [
  {
    id: 1,
    title: '智能硬件产品设计',
    description: '覆盖智能穿戴、AR 眼镜、IoT 设备的完整产品生命周期：从硬件选型、产品定义到量产落地与持续迭代',
    icon: Cpu,
    level: 95,
  },
  {
    id: 2,
    title: '操作系统 & 交互设计',
    description: '具备 XR 操作系统架构设计、AI 语音交互、手势识别与多模态交互规范的系统性方法论',
    icon: Brain,
    level: 90,
  },
  {
    id: 3,
    title: '跨端产品管理',
    description: '主导 App / Web / 小程序 / Station 等多端产品设计与研发协同，具备跨终端统一用户体验设计经验',
    icon: AppIcon,
    level: 92,
  },
  {
    id: 4,
    title: 'AI & 视觉算法应用',
    description: '深度理解 SLAM、3D 重建、手势追踪等空间计算算法，具备需求定义、数据采集规范与验收标准的完整经验',
    icon: Camera,
    level: 85,
  },
  {
    id: 5,
    title: 'AIGC & Vibcoding',
    description: '熟练运用 AIGC 工具链进行产品原型快速搭建，具备 Web / Android / Unity 多平台 Vibcoding 实战能力',
    icon: Zap,
    level: 88,
  },
  {
    id: 6,
    title: '数据驱动决策',
    description: '以 SQL、数据埋点、A/B 实验为核心的量化分析方法，通过用户行为洞察驱动产品决策与增长策略',
    icon: BarChart3,
    level: 87,
  },
]
