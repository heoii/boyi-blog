module.exports = {
  title: '泊一的博客',
  description: '由VuePress搭建',
  theme: 'reco',
  base: '/boyi-blog/',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  themeConfig: {
    subSidebar: 'auto',
    // sidebarDepth: 2,
    nav: [
      { text: '首页', link: '/' },
      { text: 'VuePress', link: '/vuepressQuestion/' },
      { text: 'Git', link: '/gitIntroduce/' },
      {
        text: '泊一的博客',
        items: [
          { text: 'CSDN', link: 'https://blog.csdn.net/w_D_lufei?type=blog' },
        ],
      },
    ],
    sidebar: {
      '/vuepressQuestion/': [
        {
          title: 'VuePress',
          children: [
            ['answer', 'VuePress使用中遇到的问题'],
            ['reco', 'vuepress-theme-reco使用问题'],
          ],
        },
      ],
      '/gitIntroduce/': [
        // {
        //   title: 'Git介绍以及基本运用',
        //   children: [
        //     // {
        //     //   title: 'gitbase',
        //     // },
        //     ['gitbase', 'Git介绍以及基本运用'],
        //   ],
        // },
        'gitbase',
        {
          title: 'Git常用指令',
          children: [
            ['gitrebase', 'git rebase详解'],
            ['gitreset', 'git reset详解'],
          ],
        },
      ],
    },
    // sidebar: [
    //   {
    //     title: 'VuePress',
    //     collapsable: false,
    //     children: [
    //       {
    //         title: 'VuePress使用中遇到的问题',
    //         path: '/vuepressQuestion/answer',
    //       },
    //       {
    //         title: 'vuepress-theme-reco使用问题',
    //         path: '/vuepressQuestion/reco',
    //       },
    //     ],
    //   },
    //   {
    //     title: 'Git',
    //     collapsable: false,
    //     children: [
    //       { title: 'Git介绍以及基本运用', path: '/gitIntroduce/gitbase' },
    //       // { title: 'git工作流', path: '/gitIntroduce/gitflow' },
    //       {
    //         title: 'Git常用指令——git reset详解',
    //         path: '/gitIntroduce/gitreset',
    //       },
    //       {
    //         title: 'Git常用指令——git rebase详解',
    //         path: '/gitIntroduce/gitrebase',
    //       },
    //     ],
    //   },
    // ],
  },
}
