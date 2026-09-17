import { slugify } from './text'

/**
 * Injects stable ids into h2/h3 headings inside an HTML string (Tiptap
 * output has none by default) and returns both the annotated HTML and a
 * flat outline, so the same pass feeds the rendered content and the TOC.
 */
export function withTableOfContents(html) {
  if (!html) return { html: '', headings: [] }

  const container = document.createElement('div')
  container.innerHTML = html

  const headings = []
  const used = new Set()

  container.querySelectorAll('h2, h3').forEach((el) => {
    const text = el.textContent.trim()
    if (!text) return

    let id = slugify(text)
    let suffix = 2
    while (used.has(id)) {
      id = `${slugify(text)}-${suffix++}`
    }
    used.add(id)

    el.id = id
    headings.push({ id, text, level: Number(el.tagName.slice(1)) })
  })

  return { html: container.innerHTML, headings }
}
