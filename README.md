# vue-book
学习 vue 实现 微信网上商城
# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

# 请求地址

HTTP GET '/static/data'

# 返回对象
{
    announcement: '今日上架的图书全部八折', // 快讯的内容
    slides: [           // 热门推荐图书
    {id: 1, img_url: require('@/assets/logo.png')},
    {id: 2, img_url: require('@/assets/images/home.svg')}
    ],
    latesetUpdated: [           // 新书上交
    {
        id: 1,                  //编号
        titile: 'android1',     //书名
        authors: [              //作者
        '啊所达到',
        '啊所',
        '达到'
        ],
        img_url: require('@/assets/logo.png') //图书图片
    },
    {
        id: 2,
        titile: 'android2',
        authors: [
        '啊所达到',
        '啊所',
        '达到'
        ],
        img_url: require('@/assets/logo.png')
    },
    {
        id: 2,
        titile: 'android3',
        authors: [
        '啊所达到',
        '啊所',
        '达到'
        ],
        img_url: require('@/assets/logo.png')
    }
    ],
    recommended: [
    {
        id: 1,
        titile: 'android1',
        authors: [
        '啊所达到',
        '啊所',
        '达到'
        ],
        img_url: require('@/assets/logo.png')
    },
    {
        id: 2,
        titile: 'android2',
        authors: [
        '啊所达到',
        '啊所',
        '达到'
        ],
        img_url: require('@/assets/logo.png')
    },
    {
        id: 3,
        titile: 'android3',
        authors: [
        '啊所达到',
        '啊所',
        '达到'
        ],
        img_url: require('@/assets/logo.png')
    }
    ]
}
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).




