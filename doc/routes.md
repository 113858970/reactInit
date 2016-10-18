# routes

## router of home page
```bash
/ # home page
  /how-to-go-pc
  /plans # 学习计划列表
  /electives # 选修课列表
  /courses/{:id}
    / # 课程详情
    /comments # 课程评价
    /assessment # 训练挑战
      /practice # 习题训练
  /series/{:id} # 系列课程
  /exams/{:id} # 考试
    / # 考试详情
    /process # 答题
    /rank # 排行榜
    /history #
      / # 考试记录
      /{:id} # 答卷回顾
  #courseware
  /surveys/{:id} # 问卷
  /practice/{:id} # 练习
  /video/{:id} # 视频
  /audio/{:id} # 音频
  /image/{:id} # 图片
  /doc/{:id} # 文档

```

## router of profile page

```bash
/profile # 个人首页
  /plans # 我的学习
  /exams # 我的考试
  /favorites # 我的收藏
```
