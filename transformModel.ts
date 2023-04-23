import { NodeTransform, findDir, createSimpleExpression } from '@vue/compiler-core'

const ELEMENT = 1

export const transformModel: NodeTransform = node => {
  if (node.type != ELEMENT) return

  const VModel = findDir(node, 'model')
  if (!VModel || VModel.arg != null) return

  VModel.arg = createSimpleExpression('value', true, undefined, 3)
}
