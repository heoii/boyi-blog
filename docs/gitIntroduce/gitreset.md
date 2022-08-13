## 作用

> `git reset` 命令用于回退版本，可以指定退回某一次提交的版本。

## 使用

### HEAD 说明

- HEAD 表示当前版本

- HEAD^ 上一个版本

- HEAD^^ 上上一个版本

- HEAD^^^ 上上上一个版本

- 以此类推...

### 可以使用 ～数字表示

- HEAD~0 表示当前版本

- HEAD~1 上一个版本

- HEAD~2 上上一个版本

- HEAD~3 上上上一个版本

- 以此类推...

### git reset 命令语法格式

> git reset [--soft | --mixed | --hard] [HEAD]

#### git reset --soft

> 将 HEAD 引用指向给定提交。`索引（暂存区）`和`工作目录`的内容是`不变`的，在三个命令中对现有版本库状态改动最小。(改变`本地仓库`中的版本,被回退的那些版本的修改会被放在`暂存区`，可以再次提交)

```bash
git reset --soft HEAD
```

#### git reset --mixed(默认模式 可以直接写 git reset)

> HEAD 引用指向给定提交，并且`索引（暂存区）`内容也跟着`改变`，`工作目录`内容`不变`。这个命令会将索引（暂存区）变成你刚刚暂存该提交全部变化时的状态，会显示工作目录中有什么修改。(就是用`本地仓库`的版本覆盖了`暂存区`的,回退的那些版本的修改会放在`工作目录`，可以先加到`暂存区`，然后再提交)

```bash
 git reset HEAD^                  # 回退所有内容到上一个版本
 git reset HEAD^ helloworld.html  # 回退 hello.php 文件的版本到上一个版本
 git reset  052e(commit id)      # 回退到指定版本
```

#### git reset --hard (慎用)

> HEAD 引用指向给定提交，`索引（暂存区）`内容和`工作目录`内容都会`改变`给定提交时的状态。也就是在给定提交后所修改的内容都会丢失(新文件会被删除，不在工作目录中的文件恢复，未清除回收站的前提)。(就是用`本地仓库`的版本覆盖`暂存区`与`工作目录`,被回退的那些版本的修改会直接舍弃，好像它们没有来过一样)

#### git reflog(对于-- hard 模式下的回退)

> 当一不小心执行了 hard 模式，想要进行版本回退

```bash
git reflog    //获得commit_id
git reset --hard commit_id //就能回到对应的版本
```

## 总结

<table>
<thead>
<tr>
   <td> </td>
    <td colspan="3"> git reset产生的影响</td>
</tr>
</thead>
<tbody>
<tr>
<td>选项</td>
<td>本地仓库（HEAD）</td>
<td>暂存区</td>
<td>工作目录</td>
</tr>
<tr>
<td>--soft</td>
<td>有</td>
<td>无</td>
<td>无</td>
</tr>
<tr>
<td>--mixed（默认）</td>
<td>有</td>
<td>有</td>
<td>无</td>
</tr>
<tr>
<td>--hard</td>
<td>有</td>
<td>有</td>
<td>有</td>
</tr>
</tbody>
</table>
