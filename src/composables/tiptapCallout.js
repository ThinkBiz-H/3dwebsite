import { Node, mergeAttributes } from '@tiptap/core'

/**
 * A simple wrapping block for "callout" boxes (info/warning/success).
 * Renders as <div data-callout data-variant="...">, styled globally in
 * style.css so the same markup looks right whether it comes from the
 * editor or straight out of Firestore on the public post page.
 */
export const Callout = Node.create({
  name: 'callout',
  group: 'block',
  content: 'block+',
  defining: true,

  addAttributes() {
    return {
      variant: {
        default: 'info',
        parseHTML: (el) => el.getAttribute('data-variant') || 'info',
        renderHTML: (attrs) => ({ 'data-variant': attrs.variant }),
      },
    }
  },

  parseHTML() {
    return [{ tag: 'div[data-callout]' }]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 'data-callout': '' }), 0]
  },

  addCommands() {
    return {
      setCallout:
        (variant = 'info') =>
        ({ commands }) => {
          return commands.wrapIn(this.name, { variant })
        },
      unsetCallout:
        () =>
        ({ commands }) => {
          return commands.lift(this.name)
        },
    }
  },
})
