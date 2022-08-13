## 无法热更新

打开项目的`package.json`,修改配置`scripts`

```shell
# 原来
"dev": "vuepress dev docs"
# 修改为下面
"dev": "vuepress dev docs --temp .temp"
```

缺点:会生成一个`.temp`文件,使用`git`的，可以在`.gitignore`添加`.temp`忽略提交即可

## 报错直接中断

遇到错误会直接终止运行,npm 包更新时也不会自动更新,暂时没有找到好的解决方案，只能重新运行

## 边栏标题显示的层数

官网上提到了这样一个属性:`sidebarDepth`,可以通过在`config.js`中配置`themeConfig.sidebarDepth`来设置嵌套层级。
默认情况下，侧边栏会自动显示当前页面的标题(h2~h3)组成的链接。

| 值  | 说明                                            |
| --- | ----------------------------------------------- |
| 0   | 禁用标题（headers）链接                         |
| 1   | 默认的深度是 1，它将提取到 h2 的标题            |
| 2   | 可设置的最大值，再大无效,同时提取 h2 和 h3 标题 |
