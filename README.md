# vue3-compiler-learn

以代码实践 深入学习模板编译原理

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-jnw48c?file=src%2FApp.vue&terminal=dev)

<br />

**由于 vue3 修改和移除了 vue2 的部分特性**

**比如：**

- 移除了 `.sync` 修饰符
- `v-slot` 只能用于 `组件` 或 `＜template＞` 标签
- `v-if` 优先级比 `v-for` 高
- `v-model` 默认变成了 `v-model:modelValue`

为了更好的深入 vue3 模板编译原理，我决定尝试在编译时对 AST 进行转换，以解决上面问题为目标来 **`👉练练手👈`**。

**目标：**
- 实现对 `sync` 修饰符的支持
- 将 `v-slot` 指令可用于 div 等普通元素
- 将 `v-for`、`v-if` 回调到和 `vue2` 一样的优先级
- 将 `v-model` 默认绑定到 `value` 属性

<br /><br />

## [📄 transformSync.ts](https://github.com/huodoushigemi/vue3-compiler-learn/blob/main/transformSync.ts)

> 把 `.sync` 转化为 `@update:xxx` [**[演示]**](https://stackblitz.com/edit/vitejs-vite-jnw48c?file=src%2FApp.vue%3AL23)

```html
<my-component :value.sync="count" />
```

> 转换后

```html
<my-component :value="count" @update:value="count = $event" />
```

<br />

## [📄 transformSlot.ts](https://github.com/huodoushigemi/vue3-compiler-learn/blob/main/transformSlot.ts)

> 把 `v-slot` 支持到普通元素 [**[演示]**](https://stackblitz.com/edit/vitejs-vite-jnw48c?file=src%2FApp.vue%3AL20)

```html
<my-component>
  <div #footer></div>
</my-component>
```

> 转换后

```html
<my-component>
  <template #footer>
    <div></div>
  </template>
</my-component>
```

<br />

## [📄 transformForIf.ts](https://github.com/huodoushigemi/vue3-compiler-learn/blob/main/transformForIf.ts)

> 让 `v-for` 优先级高于 `v-if` [**[演示]**](https://stackblitz.com/edit/vitejs-vite-jnw48c?file=src%2Fcomponents%2FTestForIf.vue)

```html
<span v-for="i in 10" v-if="i % 2">{{ i }}</span>
```

> 转换后

```html
<template v-for="i in 10">
  <template v-if="i % 2">
    <span>{{ i }}</span>
  </template>
</template>
```

<br />

## [📄 transformModel.ts](https://github.com/huodoushigemi/vue3-compiler-learn/blob/main/transformModel.ts)

> 将 `v-model` 默认为 `v-model:value` [**[演示]**](https://stackblitz.com/edit/vitejs-vite-jnw48c?file=src%2FApp.vue%3AL29,src%2Fcomponents%2FTestModel.vue)

```html
<my-component v-model="value" />
```

> 转换后

```html
<my-component v-model:value="value" />
```

<br />

## [📄 …….ts]()

更多内容持续更新中……

如果你有更多想法，欢迎给我 PR

---

## 👍 点个赞吧 ✨ 👈
