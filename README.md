
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
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 模块说明
> 简单的模块

  discover 发现

  game 游戏

  settings 设置
> 核心模块

  news 首页新闻

  cart 汽车

  foreign 国外

  inland 国内新闻

# 运行顺序
index.html --> main.js --> App.vue --> router.js --> 底部标签模块(discover,game,settings) --> 首页新闻 --> news:index --> news:简单模块(cart,foreign,inland --> news:newDetail)
