const animationSync = () => {
  let colorCurTime
  let sizeCurTime

  document.getAnimations().sort((p, n) => (p.startTime ?? Infinity) - (n.startTime ?? Infinity)).forEach((item) => {
    switch (item.animationName) {
      case 'z_ani_background':
      case 'z_ani_border_color':
      case 'z_ani_color':
      case 'z_ani_outline_color':
        colorCurTime ? (item.currentTime = colorCurTime) : (colorCurTime = item.currentTime)
        break
      case 'z_ani_size':
      case 'z_ani_skew_size':
      case 'z_ani_outline_size':
        sizeCurTime ? (item.currentTime = sizeCurTime) : (sizeCurTime = item.currentTime)
        break
    }
    return item
  })

  requestAnimationFrame(animationSync)
}

requestAnimationFrame(animationSync)
