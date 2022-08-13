### 功能 1：用于合并代码

```bash
// 拉取要合并的远程仓库的对应分支
git pull  --rebase  团队开发的远程仓库地址  团队开发远程仓库对应分支
// 如果有冲突，解决冲突，解决一个冲突后,添加修改
git  add .
// 如果还有冲突，继续解决
git rebase --continue
//解决完所有冲突后，提交代码到自己开发分支的远程仓库
git push 自己开发的远程仓库地址  以及对应的分支

最后在gitlab上去请求合并，等待项目负责人合并你的代码
```

### 功能 2：用于合并多次提交

```bash
// 合并从当前head到15b(commit id)
git rebase -i 15b
或:
// 合并最近的两次提交
git rebase -i HEAD~2
```

> 执行这个命令后会跳到一个 vi 编辑器
> 里面的提示有：
> pick：保留该 commit（缩写:p）
> reword：保留该 commit，但我需要修改该 commit 的注释（缩写:r）
> edit：保留该 commit, 但我要停下来修改该提交(不仅仅修改注释)（缩写:e）
> squash：将该 commit 和前一个 commit 合并（缩写:s）
> fixup：将该 commit 和前一个 commit 合并，但我不要保留该提交的注释信息（缩写:f）
> exec：执行 shell 命令（缩写:x）
> drop：我要丢弃该 commit（缩写:d）
