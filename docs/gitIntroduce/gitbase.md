# Git 介绍以及基本运用

## 版本控制概念

### 什么是版本管理

版本管理是一种记录文件变化的方式，以便将来查阅特定版本的文件内容。

### 人为维护文档版本的问题

1. 文档数量多且命名不清晰导致文档版本混乱
2. 每次编辑文档需要复制，不方便
3. 多人同时编辑同一个文档，容易产生覆盖

## Git 是什么

Git 是一个**分布式版本管理控制系统**（缩写 VCS），它可以在任何时间点，将文档的状态作为更新记录保存起来，也可以在任何时间点，将更新记录恢复回来。

- `git`是一个**版本管理工具**
- `git`可以帮我们托管代码，每一次提交信息都会被记录在 git 仓库
- `git`可以帮我们管理代码，后续我们都是团队开发，每一个开发一个功能，通过 git 可以帮我们把代码进行整合

## Git 环境搭建

### Git 下载安装

- 下载网址：[https://www.git-scm.com/download/](https://www.git-scm.com/download/)
- 下载后双击安装，选择默认配置即可
- 安装完后，右键会出现`git`菜单，选中 `Git Bash Here`，弹出命令窗口
- 输入命令 `git --version` 查看`git`版本

<div align=center><img src="https://img-blog.csdnimg.cn/20191111195214363.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70"  ></div>

### Git 基本工作流程

| git 仓库（本地仓库） | 暂存区                                                                                                                                                | 工作区                |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| 用于存放提交记录     | 临时存放被修改文件<br>除非是绕过暂存区直接提交，否则 Git 想把修改提交上去，就`必须将修改存入暂存区最后才能commit`。每次提交的是暂存区所对应的文件快照 | 被 Git 管理的项目目录 |

<div align=center>
<img src="https://img-blog.csdnimg.cn/20191111195849327.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70" >
</div>

### 总结

- 工作目录：就是我们编写代码的地方
- 暂存区：修改过的文件放在暂存区，方便进行管理
- GIT 仓库：代码最终提交存放的位置(本地仓库)
- 执行流程： 工作目录中修改的文件 --> 提交到暂存区 --> 本地仓库

### Git 使用前配置

`Git`允许多人进行开发，所以我们需要配置用户名和邮箱，这样在`Git`仓库里面就能标明代码是谁进行的提交，方便进行管理

1. 配置提交人姓名：`git config --global user.name 提交人姓名`
2. 配置提交人邮箱：`git config --global user.email 提交人邮箱`
3. 查看 git 配置信息：`git config --list`

也可以通过命令行的形式进行的配置，也可以通过修改配置文件来进行修改，文件名字叫 `.gitconfig`，位置在 C:\Users\系统用户名\\.gitconfig

<div align=center>
<img src="https://img-blog.csdnimg.cn/20191111200418887.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70" >
</div>

**`注意`** 4. 如果要对配置信息进行修改，重复上述命令即可。 5. 配置只需要执行一次。下次建工作区的就不需要这样了

<div align=center>
<img src="https://img-blog.csdnimg.cn/20191111201540126.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70" >
</div>

## Git 使用

### 提交文件到`Git`仓库

需要使用到的命令：

#### 1.` git init` 初始化 git 仓库

此时在对应文件夹中会自动创建一个 `.git` 的**隐藏文件夹**，里面放的就是 git 相关配置信息与 git 仓库

<div align=center>
<img src="https://img-blog.csdnimg.cn/2019111121253093.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70" >
</div>

#### 2. `git add 文件列表` 追踪文件

此时文件是添加到了`暂存区`，还没有提交到 Git 仓库
可以再用 `git status` 查看 `文件名会变绿` 显示的是这次添加的文件

- `git add .` 可以添加当前项目所有新增与被修改的文件到`暂存区`

<div align=center>
<img src="https://img-blog.csdnimg.cn/20191111213746102.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70" >
</div>

#### 3. `git status` 查看文件状态

此时我们 index.html 文件还没有被 git 管理，如果需要被管理起来，需要操作下一个步骤

- `只能显示没有添加到暂存区(A)（没有被追踪）文件或者修改了没有添加到暂存区的文件（M）`
- `查看变更阶段是本地仓库文件提交到暂存区`

<div align=center>
<img src="https://img-blog.csdnimg.cn/20191111213527638.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70" >
</div>

#### 4. `git commit -m 提交信息` 向本地仓库中提交代码

<div align=center>
<img src="https://img-blog.csdnimg.cn/20191111213810794.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70" >
</div>

#### 5. `git log` 查看提交记录

- commit 后面这个这个提交的记录号 可以用这个来回退版本号
- `查看的阶段是 暂存区提交到本地仓库的记录`
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20191111213950922.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70)

### 对`暂存区`的各种操作

#### 将文件从`暂存区`中删除(回撤 git add 的操作)

```javascript
 git rm --cached [filename]
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191111215826329.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70)

#### 用`本地仓库`中的文件覆盖`暂存区`的文件

##### 重置暂存区的指定文件，与上一次 commit 保持一致，但`工作区不变`

```javascript
git reset  HEAD
```

#### 用`暂存区`中的文件覆盖`工作目录`中的文件

> 场景：当工作目录中添加的一些代码存在一些问题，但是又不记得修改了哪一些地方了，此时就可以用`暂存区`的文件来覆盖我们`工作目录`的文件

##### 恢复暂存区的指定文件到工作区

```javascript
git checkout [file]
```

##### 恢复某个 commit 的指定文件到暂存区和工作区

```javascript
git checkout [commit] [file]
```

##### 恢复暂存区的所有文件到工作区

```javascript
git checkout .
```

#### 恢复 git 仓库中指定版本的项目

> 场景：一般是用于恢复到某一个正常的版本

##### git reset --hard 提交 ID（git log 中 commit 后面的数字与字母组合）

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191111221439808.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70)

## Git 分支

- 为了便于理解，大家暂时可以认为分支就是当前工作目录中代码的一份副本。
- 使用分支，可以让我们从开发主线上分离出来，以免影响开发主线。

 <div align=center>
<img src="https://img-blog.csdnimg.cn/20191111221614700.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70">
 </div>
  
### 分支细分
#### 主分支（master）
第一次向 git 仓库中提交更新记录时自动产生的一个分支。这个属于是主分支，主分支中的代码是很稳定的代码，所以我们在开发的时候一般都不会把代码直接提交到主分支中，主分支中的代码一般都是用于线上的项目；我们一般在开发的时候，会把代码先同步到开发分支上，等功能完成并且测试没有问题了，我们才会同步到主分支上

  <div align=center>
<img src="https://img-blog.csdnimg.cn/20191111221750595.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70">
  </div>
  
#### 开发分支（develop）
作为开发的分支，基于 master 分支创建，这条分支就是用于我们日常开发的分支

  <div align=center>
<img src="https://img-blog.csdnimg.cn/20191111221837422.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70">
  </div>
  
#### 功能分支（feature）
作为开发具体功能的分支，基于开发分支创建，为了不影响整体的开发项目，我们在实现某一些有难度的功能时候，会创建功能分支，等到功能实现完毕，没有问题了我们才会同步到开发分支上

  <div align=center>
<img src="https://img-blog.csdnimg.cn/2019111122192540.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70">
  </div>
  
#### 小结
- 主分支是Git自动帮我们创建的 master，这条分支上的代码一般用于都是线上的项目
- 开发分支，在主分支上进行创建，一般用于我们开发的时候使用，也需要尽量保证其稳定性
- 功能分支，在开发分支上进行创建，用于实现某一个难度较大功能的时候使用
- 三者的合并流程为：功能分支 -> 开发分支 -> 主分支

### 分支相关命令

#### `git branch` 查看分支

`master 是当前分支的名字 *代表当前分支的指向`
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191111222833145.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70)

#### `git branch 分支名称` 创建分支

- 在哪条分支上输入的命令，就是在哪条分支上进行的创建
- git branch develop 创建了一个 develop 的分支
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20191112152204866.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70)

#### `git checkout 分支名称` 切换分支

- git checkout develop 切换到 develop 分支![在这里插入图片描述](https://img-blog.csdnimg.cn/20191112152424984.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70)
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20191112154644268.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70)
- 其他分支可以看到主分支里的文件
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20191112155103224.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70)
- 在主分支看不到其他分支里的文件（所以要合并）
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20191112155340377.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70)
- `注意：当切换分支的时候，需要把暂存区里面的文件进行提交，不然在暂存区里面的文件会跟着到切换的这条分支上`
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20191112160642466.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70)

#### `git merge 来源分支` 合并分支

- 如果当前分支的工作已经完成，就可以合并到到其他分支
- 需要分清谁要合并谁，例如我们在开发分支上完成了功能，应该合并到主分支上，所以我们要站在主分支角度来进行合并
- 虽然进行了合并，但是开发分支还是存在
  <div align=center>
<img src="https://img-blog.csdnimg.cn/20191112214051207.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70">
  </div>

#### `git branch -d 分支名称` 删除分支（分支被合并后才允许删除）（-D 强制删除）

- 分支工作已经完成，就可以进行删除
- git branch -d develop
- 如果分支没有进行合并，那么默认是不能被删除，这是由于 git 有分支保护机制
- 如果想强行删除，把-d 改成-D ： git branch -D develop
- 不能在自己的分支上删除自己

<div align=center>
<img src="https://img-blog.csdnimg.cn/20191112215352172.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70">
</div>

<div align=center>
<img src="https://img-blog.csdnimg.cn/2019111221424712.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70"></div>
 
### 暂时保存更改

> 在 git 中，可以暂时提取分支上所有的改动并存储，让开发人员得到一个干净的工作副本，临时转向其他工作。
> 应用场景：分支的临时切换

#### 存储临时改动： git stash

- 当不想提交没有完成好的文件到仓库，但不提交进行分支切换时会把自己的文件带到主分支时，这个相当于剪切，把暂存区的文件剪切一下

#### 恢复改动： git stash pop

- 相当于把剪切的暂存区文件粘贴回去

<div align=center>
<img src="https://img-blog.csdnimg.cn/20191112222321130.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70"></div>

<font color='red'>**注意：**</font>
<font color='red'>**在其他的分支中也能执行恢复改动，但是会把这些文件恢复到当前命令的分支，所以我们在恢复的时候需要注意，我们当时在哪个分支进行的开发**</font>

### `Git`忽略清单

> 将不需要被`git`管理的文件名字添加到此文件中，在执行`git`命令的时候，`git`就会忽略这些文件

```javascript
`git`忽略清单文件名称叫： `.gitignore`
```

这里提交时就不会把 node_modules 提交上去，当用户要使用时，可自行在命令行中输入 `node i `（`i` 是 install 的缩写）就可以安装好开发需要的各个模块

<div align=center>
<img src="https://img-blog.csdnimg.cn/2019111411475896.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dfRF9sdWZlaQ==,size_16,color_FFFFFF,t_70"></div>

### 仓库的详细说明-README.md

在仓库根目录添加一个 `readme.md` 文件即可，在里面写上内容，push 到服务器后，默认在`github`里面就能看到仓库的详细说明了

## `Git`相关命令整理

```javascript
git config --global user.name  //配置姓名
git config --global user.email  //配置邮箱
git config --list  //查看配置信息
git init 	//初始化本地仓库
git status 	 //查看文件状态
git add 文件名 	//添加某个文件到暂存区，如果写 . 代表当前文件夹下所有的文件、
git commit -m 日志说明   //提交到本地仓库
git log    //查看提交记录
git checkout 文件名    //撤销，让暂存区文件覆盖工作区间文件
git rm --cached 文件名   	//在暂存区移除相应文件
git reset --hard 提交ID  	//恢复到指定版本
git branch      //查看分支
git branch develop  //创建分支
git checkout 分支名  //切换分支
git checkout -b 分支名 //创建并切换分支
git merge  //合并分支
git branch -d 分支名称  //删除分支
git clone 地址 //克隆远程仓库
git push 地址 分支名  //往服务器推送
git pull 地址  //将服务器代码拉取到本地
git remote add 名称 地址 //给地址取别名
git push -u origin master  //-u的参数让git记录信息，下次只需要 git push 就能进行提交
ssh-keygen  //生成一对密钥
```
