import { BaseElementNode, NodeTransform, TemplateNode, findDir, trackSlotScopes } from '@vue/compiler-core'
import { remove } from '@vue/shared'

const ELEMENT = 1
const TEMPLATE = 3

// 创建 template 节点
const createTemplateNode = (props: BaseElementNode['props'], children: BaseElementNode['children'], loc: BaseElementNode['loc']): TemplateNode => ({
  type: ELEMENT,
  tagType: TEMPLATE,
  tag: 'template',
  props,
  children,
  codegenNode: undefined,
  ns: 0,
  isSelfClosing: false,
  loc
})

export const transformSlot: NodeTransform = (node, ctx) => {
  if (node.type != ELEMENT || node.tagType == TEMPLATE) return
  const { props } = node

  // 查找元素是否有 v-slot
  // e.g. <div #xxx />
  const vSlot = findDir(node, 'slot')
  if (!vSlot) return

  remove(props, vSlot)

  // <div #xxx />
  // ↓ ↓ ↓
  // <template #xxx><div /></template>
  const template = createTemplateNode([vSlot], [node], vSlot.loc)
  ctx.replaceNode(template)

  return trackSlotScopes(template, ctx)
}
