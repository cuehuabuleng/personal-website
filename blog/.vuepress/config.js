module.exports = {
  title: '东方根号三的博客',
  description: 'Just playing around',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/images/01.ico' }]
  ],
  theme: 'reco',
  themeConfig: {
    logo: '/images/02.png',
    type: 'blog',
    mode: 'auto', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    modePicker: true,// 默认 true，false 不显示模式调节按钮，true 则显示
    // 配置首页右侧信息栏的头像
    authorAvatar: '/images/avatar.gif',
    // 全局作者姓名
    author: '东方根号三',
    // 添加导航栏
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      { text: '个人网站', link: 'http://114.55.93.74:8009/#/home' },
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
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com'
      },
      // ...
    ],
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
  startYear: '2020-11-11',

  // 添加一些插件
  // 看板娘
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        clean: false,
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
          bottom: "190px",
          opacity: "0.9",
          zIndex: 99999
        }
      }
    ],
    [
      '@vuepress-reco/vuepress-plugin-pagation',
      {
        total: 2,
        perPage: 10,
        currentPage: 1,
        getCurrentPage: 1
      }
    ],
    [
      '@vuepress-reco/vuepress-plugin-bgm-player',
      {
        audios: [
          // 本地文件示例
          {
            name: '장가갈 수 있을까',
            artist: '咖啡少年',
            url: '/bgm/1.mp3',
            cover: '/bgm/1.jpg'
          },
          // 网络文件示例
          {
            name: '강남역 4번 출구',
            artist: 'Plastic / Fallin` Dild',
            url: 'https://assets.smallsunnyfox.com/music/2.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
          },
          {
            name: '用胳膊当枕头',
            artist: '최낙타',
            url: 'https://assets.smallsunnyfox.com/music/3.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
          }
        ],
        position: {
          right: '10px',
          bottom: '10px',
          'z-index': '999999'
        },
        autoShrink: true
      }
    ]
  ]
}  