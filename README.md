# vue3-compiler-learn

深入学习模板编译原理

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-jnw48c?file=src%2FApp.vue&terminal=dev)

<br />

**由于 vue3 修改和移除了 vue2 的部分特性**

比如：

- 移除了 `.sync` 修饰符
- `v-slot` 只能用于 `组件` 或 `＜template＞` 标签。

为了更好的深入 vue3 模板编译原理，我决定尝试在编译时对 AST 进行转换，以解决上面问题为目标来 **`👉练练手👈`**。

<br /><br />

## [📄 transformSync.ts](https://github.com/huodoushigemi/vue3-sync-modifier/blob/main/transformSync.js)

> 把 `.sync` 转化为 `@update:xxx`

```html
<my-component :value.sync="count" />
```

> 转换后

```html
<my-component :value="count" @update:value="count = $event" />
```

<br />

## [📄 transformSlot.ts](https://github.com/huodoushigemi/vue3-sync-modifier/blob/main/transformSlot.js)

> 把 `v-slot` 支持到普通元素

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

## [📄 …….ts]()

更多内容持续更新中……
