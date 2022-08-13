#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m '个人博客初始搭建'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:heoii/boyi-blog.git

cd -