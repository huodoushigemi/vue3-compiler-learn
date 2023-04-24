import { NodeTransform, findDir, createSimpleExpression } from '@vue/compiler-core'

const ELEMENT = 1

export const transformModel: NodeTransform = node => {
  if (node.type != ELEMENT) return

  const VModel = findDir(node, 'model')

  // v-model 没有传入绑定的属性，则将属性绑定到 value
  // e.g. v-model => v-model:value
  // e.g. v-model:xxx => v-model:xxx
  if (VModel && VModel.arg == null) {
    VModel.arg = createSimpleExpression('value', true, undefined, 3)
  }
}
