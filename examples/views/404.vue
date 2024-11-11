<template>
  <div class="component">
    <div class="not-found">
      <h1>404</h1>
      <h3>页面似乎找不到了 \[ o_x ]/</h3>
      <span>Page not found</span>
      <router-link :to="{ name: 'home' }">
        <z-button size="large">{{ $t('global.404.home') }}</z-button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  >h1 {
    font-size: 80px;
    font-style: italic;
  }
  >h3 {
    margin-top: 10px;
    font-size: 30px;
  }
  >span {
    margin-top: 10px;
    font-size: 16px;
    margin-bottom: 40px;
  }
}
</style>