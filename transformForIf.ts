import { remove } from '@vue/shared'
import { NodeTransform, findDir, findProp } from '@vue/compiler-core'

import { createTemplateNode } from './transformSlot'

const ELEMENT = 1

export const transformForIf: NodeTransform = node => {
  if (node.type != ELEMENT) return

  node.children.forEach((child, i) => {
    if (child.type != ELEMENT) return

    const VFor = findDir(child, 'for')
    if (!VFor) return

    const VIf = findDir(child, 'if')
    if (!VIf) return

    const key = findProp(child, 'key')

    remove(child.props, VFor)
    remove(child.props, VIf)
    remove(child.props, key)

    const templateIf = createTemplateNode([VIf], [child], VIf.loc)
    const templateFor = createTemplateNode([VFor, key], [templateIf], VFor.loc)

    node.children[i] = templateFor
  })
}
