module.exports = {
  title: '东方根号三的博客',
  description: '愿时光能缓，愿故人不散！',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/01.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    logo: '/images/02.png',
    type: 'blog',
    mode: 'auto', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    modePicker: true,// 默认 true，false 不显示模式调节按钮，true 则显示
    // 配置首页右侧信息栏的头像
    authorAvatar: '/images/avatar.jpg',
    // 全局作者姓名
    author: '东方根号三',
    // 添加导航栏
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      {
        text: 'project',
        icon: 'reco-coding',
        items: [
          {
            text: '个人博客网站',
            link: 'http://114.55.93.74:8009/#/home',
            icon: 'reco-blog'
          },
          {
            text: '前端面试复习',
            link: 'http://114.55.93.74:8013/',
            icon: 'reco-api'
          },
          {
            text: 'react通用后台管理系统',
            link: 'http://114.55.93.74:8005/#/home'
          },
          {
            text: '校车平台管理系统',
            link: 'http://114.55.93.74:8008/#/school-bus'
          },
          {
            text: '小demo',
            link: '/blogs/view/demo.html'
          }

        ]
      },
      { text: 'github', link: 'https://github.com/cuehuabuleng', icon: 'reco-github' }
      // {
      //     text: 'Languages',
      //     ariaLabel: 'Language Menu',
      //     items: [
      //         { text: 'Chinese', link: '/language/chinese/' },
      //         { text: 'Japanese', link: '/language/japanese/' }
      //     ]
      // }
    ],
    // 添加友情链接
    // friendLink: [
    //   {
    //     title: '午后南杂',
    //     desc: 'Enjoy when you can, and endure when you must.',
    //     email: 'recoluan@qq.com',
    //     link: 'https://www.recoluan.com'
    //   },
    //   // ...
    // ],
    // 博客配置
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '文章分类' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      }
    },

    // //站点语言配置
    // locales: {
    //   '/': {
    //     recoLocales: {
    //       homeBlog: {
    //         // ...
    //       },
    //       pagation: {
    //         // ...
    //       }
    //     }
    //   },
    //   '/en/': {
    //     recoLocales: {
    //       homeBlog: {
    //         // ...
    //       },
    //       pagation: {
    //         // ...
    //       }
    //     }
    //   }
    // },

    // 子侧边栏是否打开
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
  },
  sidebar: {
    '/docs/theme-reco/': [
      "",
      "theme",
      "plugin",
      "api"
    ]
  },
  // 修改站点语言配置
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  // 移动端优化
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],

  // 备案
  record: 'ICP 备案文案',
  recordLink: 'ICP 1688xx',
  cyberSecurityRecord: '广东海洋大学',
  cyberSecurityLink: 'https://www.gdou.edu.cn/',
  // 项目开始时间，只填写年份
  startYear: '2019',

  // 添加一些插件
  // 看板娘
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        clean: false,
        height: 300,
        modelStyle: {
          position: "fixed",
          left: "15px",
          bottom: "5px",
          opacity: "0.9",
          zIndex: 99999
        },
        btnStyle: {
          left: "0px",
          bottom: "10px",
          opacity: "0.9",
          zIndex: 99999
        },
        messageStyle: {
          left: "0px",
          bottom: "250px",
          opacity: "0.9",
          zIndex: 99999
        }
      }
    ],
    [
      '@vuepress-reco/vuepress-plugin-pagation'
    ],

    // 背景音乐插件
    [
      '@vuepress-reco/vuepress-plugin-bgm-player',
      {
        audios: [
          // 网络文件示例
          {
            name: '耗尽',
            artist: '薛之谦、郭聪明',
            url: '/bgm/bgm.mp3',
            cover: '/bgm/bgm.jpg'
          }
        ],
        position: {
          right: '10px',
          bottom: '10px',
          'z-index': '999999'
        },
        autoShrink: true,
        shrinkMode: 'mini',
        floatPosition: 'right',
        floatStyle: {
          bottom: '200px',
          'z-index': '999999'
        }
      }
    ],
    // 背景丝带插件
    [
      "ribbon",
      {
        size: 90,     // width of the ribbon, default: 90
        opacity: 0.8, // opacity of the ribbon, default: 0.3
        zIndex: -1    // z-index property of the background, default: -1
      }
    ],

    // 打赏插件
    [
      '@vuepress-reco/vuepress-plugin-bulletin-popover',
      {
        width: '260px', // 默认 260px
        title: '消息提示',
        body: [
          {
            type: 'title',
            content: '关注公众号',
            style: 'text-aligin: center;'
          },
          {
            type: 'image',
            src: '/images/gongzhonghao.jpg'
          }
        ],
        footer: [
          {
            type: 'button',
            text: '打赏',
            link: '/blogs/view/other.html'
          }
        ]
      }
    ],

    [
      //鼠标点击特效插件
      "cursor-effects",
      {
        size: 3,                    // size of the particle, default: 2
        shape: ['circle'],  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
    [
      //动态标题插件 先安装在配置， npm install vuepress-plugin-dynamic-title --save
      "dynamic-title",
      {
        showIcon: "/01.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
    ],

    // vssue版本
    // [
    //   '@vuepress-reco/comments', {
    //     solution: 'vssue',
    //     options: {
    //       title: 'vuepress-theme-reco',
    //       platform: 'github',
    //       owner: 'cuehuabuleng',
    //       repo: 'personal-website',
    //       clientId: '42fbd5134e8d1fce513c',
    //       clientSecret: 'e0076c4dd54699b66be707b6acd987da6da712fe',
    //     }
    //   }
    // ],

    // valine版本
    [
      '@vuepress-reco/comments',
      {
        solution: 'valine',
        // https://leancloud.cn/dashboard/applist.html#/apps
        options: {
          appId: 'mJLKmhMXUh5LaXSoyIurNTAb-gzGzoHsz',// your appId
          appKey: 'HDWokRPBWqEDcWxrITLcQ4f7', // your appKey
          visitor: true // 阅读量统计
        }
      }
    ],

    //pwa插件 
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    }],
  ]
}  