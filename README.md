# 介绍

`重写vue的v-for，在v-for渲染时增加data-index属性`

## vue版本要求

`该项目适用于vue2.x的项目`

## 使用方式

`npm i vue-v-for-hook --save`
```
// main.js
import VueVForHook from 'vue-v-for-hook'

Vue.use(VueVForHook, {
  indexName: '自定义index名称，可选，默认为data-index'
})
```
```
// xxx.vue 组件内
<div v-for="item in 10" :key="item">{{item}}</div>
```

## 效果

```
<div data-index="0">0</div>
<div data-index="1">1</div>
<div data-index="2">2</div>
<div data-index="3">3</div>
<div data-index="4">4</div>
...
```