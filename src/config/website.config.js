// 网站配置文件
export const websiteConfig = {
  // 网站基本信息
  site: {
    title: "Qingserver",
    description: "欢迎来到Qingserver,探索无限可能的方块世界!",
    keywords: "Minecraft,服务器,我的世界,Java版,生存,插件,生电",
    author: "Qingserver",
    language: "zh-CN"
  },

  // 导航栏配置
  navigation: {
    items: [
      {
        name: "主页",
        path: "/",
        icon: "mdi-home",
        enabled: true,
        // 外链配置：如果external为true，则点击跳转到externalUrl
        external: false, // 是否启用外链模式
        externalUrl: "", // 外链地址（仅在external为true时生效） //请填写完整的URL，例如：https://mc.wanfory.top,必须带协议头
        // 页面标题配置
        pageTitle: {
          // 主标题配置（支持打字机效果）
          mainTitle: {
            texts: ["欢迎来到 Qingserver", "Welcome to Qingserver"], // 多语言标题数组
            typewriter: {
              enabled: true, // 是否启用打字机效果
              speed: 100,    // 打字速度（毫秒）
              delay: 1000,   // 切换延迟（毫秒）
              loop: true     // 是否循环播放
            }
          },
          // 副标题配置
          subtitle: "探索无限可能的方块世界，与朋友一起创造属于你们的冒险故事"
        }
      },
      {
        name: "公告",
        path: "/announcement",
        icon: "mdi-bullhorn",
        enabled: true,
        // 外链配置：如果external为true，则点击跳转到externalUrl
        external: false, // 是否启用外链模式
        externalUrl: "", // 外链地址（仅在external为true时生效）
        pageTitle: {
          mainTitle: {
            texts: ["项目公告", "Announcement"],
            typewriter: {
              enabled: true,
              speed: 100,
              delay: 1000,
              loop: true
            }
          },
          subtitle: "同步QQ群公告，查看项目重要通知与更新"
        }
      },
      {
        name: "相册",
        path: "/gallery",
        icon: "mdi-image",
        enabled: true,
        // 外链配置：如果external为true，则点击跳转到externalUrl
        external: false, // 是否启用外链模式
        externalUrl: "", // 外链地址（仅在external为true时生效）
        pageTitle: {
          mainTitle: {
            texts: ["游戏相册", "Qingserver Game Gallery"],
            typewriter: {
              enabled: true,
              speed: 100,
              delay: 1000,
              loop: true
            }
          },
          subtitle: "浏览服务器的精彩游戏截图和玩家作品"
        }
      },
      {
        name: "历程",
        path: "/history",
        icon: "mdi-history",
        enabled: true,
        // 外链配置：如果external为true，则点击跳转到externalUrl
        external: false, // 是否启用外链模式
        externalUrl: "", // 外链地址（仅在external为true时生效）
        pageTitle: {
          mainTitle: {
            texts: ["qingserver历程", "Qingserver History"],
            typewriter: {
              enabled: true,
              speed: 100,
              delay: 1000,
              loop: true
            }
          },
          subtitle: "回顾服务器的发展历程，见证每一个重要的里程碑"
        }
      },
      {
        name: "排行榜",
        path: "/leaderboard",
        icon: "mdi-trophy",
        enabled: true,
        // 外链配置：如果external为true，则点击跳转到externalUrl
        external: false, // 是否启用外链模式
        externalUrl: "", // 外链地址（仅在external为true时生效）
        pageTitle: {
          mainTitle: {
            texts: ["玩家排行榜", "Qing Leaderboard"],
            typewriter: {
              enabled: true,
              speed: 100,
              delay: 1000,
              loop: true
            }
          },
          subtitle: "看看谁是最活跃的玩家，展示你的成就"
        }
      },
      {
        name: "公告",
        path: "/announcement",
        icon: "mdi-star",
        enabled: true,
        // 外链配置：如果external为true，则点击跳转到externalUrl
        external: false, // 是否启用外链模式
        externalUrl: "", // 外链地址（仅在external为true时生效）
        pageTitle: {
          mainTitle: {
            texts: ["服务器公告", "Qing Announcement"],
            typewriter: {
              enabled: true,
              speed: 100,
              delay: 1000,
              loop: true
            }
          },
          subtitle: "看看服务器公告吧，有很多重要的消息哦！"
        }
      },
      {
        name: "关于",
        path: "/about",
        icon: "mdi-information",
        enabled: true,
        // 外链配置：如果external为true，则点击跳转到externalUrl
        external: false, // 是否启用外链模式
        externalUrl: "", // 外链地址（仅在external为true时生效）
        pageTitle: {
          mainTitle: {
            texts: ["关于Qingserver", "About Qingserver"],
            typewriter: {
              enabled: true,
              speed: 100,
              delay: 1000,
              loop: true
            }
          },
          subtitle: "了解我们的服务器信息、管理团队和游戏规则"
        }
      }
    ],
    // 添加新页面时，只需在这里添加新的导航项即可
    autoHide: true,
    hideThreshold: 100, // 向下滚动100px后隐藏导航栏
    showThreshold: 50   // 向上滚动到距离顶部50px时显示导航栏
  },

  // 背景图片配置
  background: {
    images: [
      "/backgrounds/desktopWallpaper_1.webp",
      "/backgrounds/desktopWallpaper_2.webp",
      "/backgrounds/desktopWallpaper_3.webp",
      "/backgrounds/desktopWallpaper_4.webp",
      "/backgrounds/desktopWallpaper_5.webp",
    ],
    defaultImage: "/backgrounds/default.webp"
  },

  // 音乐播放器配置
  musicPlayer: {
    enabled: true,
    metingApi: "https://api.injahow.cn/meting/",
    server: "netease", // netease, kugou
    type: "playlist",   // playlist, song
    id: "5186526688",      // 歌单ID
    autoPlay: false,
    volume: 0.8
  },

  // 字体配置
  fonts: {
    // 主字体配置
    main: {
      family: "像素体", // 字体名称
      file: "/fonts/像素体.ttf", // 字体文件路径
      fallback: "'Quicksand', 'Noto Sans SC', sans-serif", // 备用字体
      weight: "normal" // 字体粗细
    },
    // 标题字体配置
    title: {
      family: "像素体", // 字体名称
      file: "/fonts/像素体.ttf", // 字体文件路径
      fallback: "'Quicksand', 'Noto Sans SC', sans-serif", // 备用字体
      weight: "normal" // 字体粗细
    }
  },

  // 主题配置
  theme: {
    // 日间模式颜色
    light: {
      primary: "#5D9C41",     // MC草方块绿
      secondary: "#a6e3e9",   // 薄荷蓝
      accent: "#ffd166",      // 奶油黄
      background: "#f0f8f0",  // 浅绿调背景
      card: "rgba(255, 255, 255, 0.85)",
      text: "#2c442e",       // 适配绿色的深文字
      glass: "rgba(255, 255, 255, 0.35)"
    },
    // 夜间模式颜色
    dark: {
      primary: "#5D9C41",     // MC草方块绿
      secondary: "#a6e3e9",   // 薄荷蓝
      accent: "#ffd166",      // 奶油黄
      background: "#1a291e",  // 暗绿深色背景
      card: "rgba(26, 41, 30, 0.85)",
      text: "#c7e8cc",       // 浅色文字
      glass: "rgba(26, 41, 30, 0.35)"
    }
  },

  // 服务器配置
  server: {
    // 页面显示的服务器地址
    displayAddress: "qingserver.dpdns.org",
    // API请求使用的服务器地址（可以不同）
    apiAddress: "play.simpfun.cn",
    port: "40353",
    version: "1.21.8",
    apiEndpoint: "https://api.mcstatus.io/v2/status/java",
  },

  // 页脚配置
  footer: {
    copyright: "Qingserver_MC",
  },

  // 公告页面配置
  announcementPage: {
    list: [
      {
        date: "2026‑08‑11",
        title: "服务器登录信息",
        content: "欢迎您来到Qingserver无规则公益服务器官方群聊，下面是各个服务器登录信息\n🎮Java\nJava生存服：\n模式:困难\n服务器ip: qingserver.dpdns.org（版本:1.21.8+，可能不支持26.x）\n🎮基岩\n基岩端地址:play.simpfun.cn\n端口40353\n版本:1.21.8\n🎮\n支持离线账号，人数20\n死亡不掉落\n群里发:绑定[空格]ID即可注册（最多绑定两个）\n群里发:解绑[空格]ID即可解绑\n我在本群的名称设为：QQ名[空格]游戏id\n游戏内聊天加#[内容]可以把消息发送到群里",
        author: "Qingserver",
        top: true
      },
      {
        date: "2026‑08‑11",
        title: "官网上线通知",
        content: "我们的服务器官网已经搞好了\nhttps://qingserver.dpdns.org/\n每一个月更新一次信息",
        author: "xiaoqueqiao,qingserver",
        top: false
      },
      {
        date: "2026‑07‑28",
        title: "赞助说明",
        content: "如果你喜欢我们的服务器可以赞助一下呦！\n你的赞助就是我们开服的动力\n赞助方式在群里获取",
        author: "Qingserver",
         image: "/assets/announcement/donate.webp",
        top: false
      },
      {
        date: "2026‑07‑28",
        title: "插件与常用指令",
        content: "插件：\neasybot、napcat机器人\n进服注册: 进服输入/register 密码（最低8个数） 确认密码\n离线皮肤:/skins （皮肤虽然不多）\n传送:/tpa 玩家名称 被玩家传送的玩家聊天框选择绿色的英文，即可传送\n苦力怕爆炸修复\n领地:箭矢选择两个点（不管高度，自己控制高度），指令/dom create [领地名字]\n拥有签到插件",
        author: "Qingserver",
        top: false
      },
      {
        date: "2026‑07‑22",
        title: "生存服规则提醒",
        content: "禁止索要创造，要创造玩创造服去，这是生存服",
        author: "Qingserver",
        top: false
      },
      {
        date: "2026‑07‑09",
        title: "历史存档下载",
        content: "以前服务器存档下载链接:\nhttps://1837128162.share.123pan.cn/123pan/gygJTd‑fi0fH?pwd=0570#\n密码:0570",
        author: "Qingserver",
        top: false
      },
      {
        date: "2026‑07‑03",
        title: "领地圈地提醒",
        content: "有领地啊，自觉加领地，被偷我们不负责，但是如果乱闹，加黑两天。如果有乱闹的截图找管理举报（有奖）\n圈地:箭矢选择两个点（不管高度，自己控制高度），在用指令/dom create [领地名字]即可完成!",
        author: "OrneryHalo92514",
        top: false
      },
      {
        date: "2026‑04‑23",
        title: "查看在线玩家指令",
        content: "cf（在线玩家）\nlist（在线玩家）",
        author: "Qingserver",
        top: false
      }
    ]
  },

  // 排行榜配置
  leaderboard: {
    // 本地JSON文件配置
    localFile: {
      path: "/assets/leaderboard/count_export.json",
      cacheTimeout: 300000 // 5分钟缓存
    },
    
    // 计分板显示配置
    objectives: {
      // 活跃时间
      "fzsd.module.scoreboard.display.activation": {
        enabled: true,             //是否显示
        displayName: "活跃时间",
        icon: "clock",
        unit: "小时",
        showTotal: true
      },
      // 飞行距离
      "fzsd.module.scoreboard.display.aviating_distance": {
        enabled: true,
        displayName: "飞行距离",
        icon: "airplane",
        unit: "米",
        showTotal: true
      },
      // 受伤害数
      "fzsd.module.scoreboard.display.damage_taken": {
        enabled: true,
        displayName: "受伤害数",
        icon: "heartbroken",
        unit: "点",
        showTotal: true
      },
      // 死亡次数
      "fzsd.module.scoreboard.display.death_count": {
        enabled: true,
        displayName: "死亡次数",
        icon: "skull",
        unit: "次",
        showTotal: true
      },
      // 挖掘数
      "fzsd.module.scoreboard.display.dig_count": {
        enabled: true,
        displayName: "方块挖掘",
        icon: "pickaxe",
        unit: "个",
        showTotal: true
      },
      // 钓鱼次数
      "fzsd.module.scoreboard.display.fishing_count": {
        enabled: true,
        displayName: "钓鱼次数",
        icon: "fish",
        unit: "次",
        showTotal: true
      },
      // 击杀数
      "fzsd.module.scoreboard.display.kill_count": {
        enabled: true,
        displayName: "玩家击杀",
        icon: "sword",
        unit: "个",
        showTotal: true
      },
      // 放置数
      "fzsd.module.scoreboard.display.placement_count": {
        enabled: true,
        displayName: "放置数量",
        icon: "placement",
        unit: "个",
        showTotal: true
      },
      // 交易次数
      "fzsd.module.scoreboard.display.trade_count": {
        enabled: true,
        displayName: "交易次数",
        icon: "trade",
        unit: "次",
        showTotal: true
      }
    },
    
    // 显示设置
    display: {
      itemsPerPage: 10,
      showPlayerCount: true,
      showUpdateTime: true,
      showTotalScore: true
    }
  },

  // 历程配置
  history: {
    // 图片文件夹路径
    imagesFolder: "/assets/history-images"
  },

  // 相册配置
  gallery: {
    // 图片文件夹路径
    imagesFolder: "/assets/gallery-images"
  },

  // 关于页面配置
  about: {
    // 关于页面板块配置
    sections: {
      // 服务器信息板块
      serverInfo: {
        enabled: true,
        title: "服务器信息",
        icon: "information",
        items: [
          { label: "服务器类别", value: "第三方:简幻欢" },
          { label: "CPU", value: "C+ E5-2682v4 4核" },
          { label: "内存", value: "16G" },
          { label: "类型", value: "生存，生电，建筑" },
          { label: "最大玩家", value: "20人" },
          { label: "在线时间", value: "7X24小时" }
        ]
      },
      
      // 特色功能板块
      features: {
        enabled: true,
        title: "服务器特色",
        icon: "cog",
        items: [
          { label: "无规则", value: "✓" },
          { label: "耐玩", value: "✓" },
          { label: "双重备份", value: "✓" },
          { label: "群服互通", value: "✓" },
          { label: "QQ群交流", value: "✓" }
        ]
      },
      
      // 管理团队板块
      team: {
        enabled: true,
        title: "管理团队",
        icon: "shield-account",
        items: [
          { label: "Qingserver", value: "腐竹" },
          { label: "OrneryHalo92514", value: "机器人管理" },
          { label: "julupengze", value: "技术" },
          { label: "Asleep_Yuyu", value: "技术" },
          { label: "xiaoqueqiao", value: "技术" }
        ]
      }
    },
    
    // 游戏规则配置
    rules: {
      enabled: true,
      title: "游戏规则",
      description: "服务器无规则",
      items: [
        {
          title: "友好相处",
          icon: "heart",
          description: "尊重其他玩家，禁止任何形式的骚扰和歧视行为"
        },
        {
          title: "可随意游玩",
          icon: "shield",
          description: "小心偷家！"
        },
        {
          title: "文明聊天",
          icon: "chat",
          description: "保持聊天频道文明，禁止发布广告和不当内容"
        }
      ]
    },
    
    // 联系我们配置
    contact: {
      enabled: true,
      title: "联系我们",
      description: "加入我们的社区，与我们一起畅游方块世界",
      items: [
        {
          title: "QQ群",
          subtitle: "加入官方 QQ 群交流",
          icon: "qqchat",
          buttonText: "加入 QQ 群",
          buttonType: "secondary",
          url: "https://qm.qq.com/q/fbFhOU2tZm"
        },
        {
          title: "邮箱",
          subtitle: "发送邮件联系我们",
          icon: "email",
          buttonText: "发送邮件",
          buttonType: "secondary",
          url: "mailto:qingserver@yeah.net"
        }
      ]
    },
    
    // 成员列表配置
    members: {
      enabled: true,
      title: "服务器成员",
      description: "我们的服务器大家庭",
      
      // 数据获取方式："manual" 或 "localFile"
      dataSource: "localFile",
      
      // 本地文件配置（当dataSource为"localFile"时生效）
      localFile: {
        path: "/assets/memberlist/whitelist.json",
        cacheTimeout: 300000 // 5分钟缓存
      },
      
      // 手动成员列表（当dataSource为"manual"时,或未获取到数据时生效）
      manualList: [
        "?",
        "?",
        "?",
        "?",
        "?"
      ]
    }
  },

  // 图标配置
  icons: {
    source: "https://icones.js.org",
    // 常用图标映射
    mappings: {
      home: "mdi-home",
      history: "mdi-history",
      trophy: "mdi-trophy",
      information: "mdi-information",
      music: "mdi-music",
      sun: "mdi-white-balance-sunny",
      moon: "mdi-weather-night",
      menu: "mdi-menu",
      close: "mdi-close",

      clock: "mdi-clock",
      airplane: "mdi-airplane",
      heartbroken: "mdi-heart-broken",
      skull: "mdi-skull",
      pickaxe: "mdi-pickaxe",
      fish: "mdi-fish",
      sword: "mdi-sword",
      placement: "mdi-arrow-down-bold-circle",
      trade: "mdi-currency-usd",
      information: "mdi-information",
      cog: "mdi-cog",
      "shield-account": "mdi-shield-account",
      heart: "mdi-heart",
      shield: "mdi-shield",
      home: "mdi-home",
      chat: "mdi-chat",
      qqchat: "mdi-qqchat",
      email: "mdi-email"
    }
  },

  // 网页图标配置
  favicon: {
    // 是否启用图标配置
    enabled: true,
    // 基础favicon路径
    default: "/favicon/favicon.ico",
    // 不同尺寸图标路径
    sizes: {
      "16x16": "/favicon/favicon-16x16.png",
      "32x32": "/favicon/favicon-32x32.png",
      "192x192": "/favicon/android-chrome-192x192.png",
      "512x512": "/favicon/android-chrome-512x512.png"
    },
    // Apple Touch图标路径
    appleTouch: "/favicon/apple-touch-icon.png"
  }
};
//此行以下的内容无需修改，如果你不知道你在干什么请停下你要继续的想法
// 页面配置模板
export const pageTemplates = {
  home: {
    title: "主页",
    description: "服务器主页",
    layout: "default"
  },
  announcement: {
    title: "公告",
    description: "服务器公告",
    layout: "default"
  },
  gallery: {
    title: "相册",
    description: "服务器相册",
    layout: "default"
  },
  history: {
    title: "服务器历程",
    description: "服务器发展历史",
    layout: "default"
  },
  leaderboard: {
    title: "玩家排行榜",
    description: "玩家排行榜",
    layout: "default"
  },
  about: {
    title: "关于我们",
    description: "服务器信息",
    layout: "default"
  }
};

// 添加新页面的方法
export function addNewPage(pageConfig) {
  // 添加到导航栏
  websiteConfig.navigation.items.push({
    name: pageConfig.name,
    path: pageConfig.path,
    icon: pageConfig.icon,
    enabled: true
  });
  
  // 添加到页面模板
  pageTemplates[pageConfig.key] = {
    title: pageConfig.title,
    description: pageConfig.description,
    layout: pageConfig.layout || "default"
  };
}