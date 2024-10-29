let scrollbarWidth

export default () => {
  if (scrollbarWidth !== undefined) return scrollbarWidth

  const outer = document.createElement('div')
  outer.style.visibility = 'hidden'
  outer.style.width = '100px'
  outer.style.overflow = 'scroll'
  document.body.appendChild(outer)

  const inner = document.createElement('div')
  inner.style.width = '100%'
  outer.appendChild(inner)

  const outerWidth = outer.offsetWidth
  const innerWidth = inner.offsetWidth
  scrollbarWidth = outerWidth - innerWidth

  document.body.removeChild(outer)

  return scrollbarWidth
}