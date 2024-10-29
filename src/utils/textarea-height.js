const CONTEXT_STYLE = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-left',
  'padding-right',
  'border-width',
  'border-style',
  'box-sizing'
]

const HIDDEN_STYLE = `
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  word-break:break-word;
`;

export default (target) => {
  if (!target) return
  const style = window.getComputedStyle(target)
  const context = CONTEXT_STYLE.map((name) => `${name}:${style.getPropertyValue(name)}`).join(';')
  const textarea = document.createElement('div')
  document.body.appendChild(textarea)
  textarea.setAttribute('style', `${context};${HIDDEN_STYLE}`)
  textarea.innerText = target.value || target.placeholder || 'ZENLESS'
  const height = textarea.offsetHeight
  document.body.removeChild(textarea)
  return height
}