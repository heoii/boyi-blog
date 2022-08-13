![在这里插入图片描述](https://img-blog.csdnimg.cn/20201101161443780.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70#pic_center)

#### 基本操作

[git 介绍以及基本运用](https://blog.csdn.net/w_D_lufei/article/details/103005197)
</br>
</br>

#### `本地仓库`文件回退到`暂存区/工作区`

##### `git reset`

[git 常用指令——git reset 详解](https://blog.csdn.net/w_D_lufei/article/details/109411482)
<br/>

#### `暂存区`文件回退到`工作区`

##### `git checkout`

[git 常用指令——git checkout 详解](https://blog.csdn.net/w_D_lufei/article/details/109429173)
<br/>

#### 与远程仓库合并的步骤

先合并好，之后再提交自己的远程仓库，再请求 merge

##### `git rebase`

[git 常用指令——git rebase 详解](https://blog.csdn.net/w_D_lufei/article/details/109426835)

1.  `git remote add` 远程仓库别名 远程仓库地址 // 添加团队项目的远程仓库地址
2.  `git remote -v` // 查看是否成功
3.  `git pull --rebase` 远程仓库别名 dev(远程仓库分支) //合并代码、解决冲突
4.  修改冲突后，`git add.` //添加修改后的代码
5.  `git rebase --continue` // 如果还有冲突继续解决
6.  `shift`+` :` 输入` wq` 保存更改后退出 //用命令行保存刚才的更改
7.  解决完冲突 `git push` 自己的远程仓库地址（origin） 所开发的分支
