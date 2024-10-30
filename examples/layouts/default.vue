<template>
  <div class="container" id="container">
    <z-scrollbar ref="scrollBarRef" class="container-wrap">
      <div class="header">
        <div class="header-wrap">
          <div class="header-content">
            <router-link class="logo" :to="{ name: 'home' }">
              <img src="/zenless.png" alt="Zenless UI">
              <span>Zenless</span>
            </router-link>
            <div class="nav">
              <z-link class="nav-item" target="_blank" rel="noreferrer" href="https://github.com/ChrisChan13/zenless-ui">
                <z-button hollow>
                  <svg class="nav-icon" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                  </svg>
                  <span>Github</span>
                </z-button>
              </z-link>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <z-menu
          v-model="routeName"
          :default-open="defaultOpen"
          class="side-nav"
          @change="onMenuChange"
        >
          <!-- <z-menu-item name="changelog">更新日志</z-menu-item> -->
          <z-menu-item name="getting-started">快速上手</z-menu-item>
          <z-sub-menu name="component-general" title="通用组件">
            <z-menu-item name="component-icon">Icon 图标</z-menu-item>
            <z-menu-item name="component-button">Button 按钮</z-menu-item>
            <z-menu-item name="component-link">Link 链接</z-menu-item>
          </z-sub-menu>
          <z-sub-menu name="component-navigation" title="导航组件">
            <z-menu-item name="component-menu">Menu 导航菜单</z-menu-item>
            <z-menu-item name="component-tabs">Tabs 标签页</z-menu-item>
            <z-menu-item name="component-dropdown">Dropdown 下拉菜单</z-menu-item>
            <z-menu-item name="component-pagination">Pagination 分页</z-menu-item>
          </z-sub-menu>
          <z-sub-menu name="component-data-entry" title="数据录入">
            <z-menu-item name="component-radio">Radio 单选框</z-menu-item>
            <z-menu-item name="component-checkbox">Checkbox 多选框</z-menu-item>
            <z-menu-item name="component-input">Input 输入框</z-menu-item>
            <z-menu-item name="component-textarea">Textarea 输入框</z-menu-item>
            <z-menu-item name="component-select">Select 选择器</z-menu-item>
            <z-menu-item name="component-switch">Switch 开关</z-menu-item>
            <z-menu-item name="component-slider">Slider 滑动输入条</z-menu-item>
            <z-menu-item name="component-form">Form 表单</z-menu-item>
          </z-sub-menu>
          <z-sub-menu name="component-data-display" title="数据展示">
            <z-menu-item name="component-table">Table 表格</z-menu-item>
            <z-menu-item name="component-tag">Tag 标签</z-menu-item>
            <z-menu-item name="component-progress">Progress 进度条</z-menu-item>
            <z-menu-item name="component-badge">Badge 徽标</z-menu-item>
            <z-menu-item name="component-card">Card 卡片</z-menu-item>
            <z-menu-item name="component-collapse">Collapse 折叠面板</z-menu-item>
          </z-sub-menu>
          <z-sub-menu name="component-feedback" title="交互反馈">
            <z-menu-item name="component-tooltip">Tooltip 文字提示</z-menu-item>
            <z-menu-item name="component-message">Message 消息提示</z-menu-item>
            <z-menu-item name="component-modal">Modal 对话框</z-menu-item>
            <z-menu-item name="component-drawer">Drawer 抽屉</z-menu-item>
          </z-sub-menu>
          <z-sub-menu name="component-other" title="其他组件">
            <z-menu-item name="component-scrollbar">Scrollbar 滚动视图</z-menu-item>
            <z-menu-item name="component-backtop">Backtop 回到顶部</z-menu-item>
          </z-sub-menu>
        </z-menu>
        <router-view></router-view>
      </div>
    </z-scrollbar>
    <div class="float-btn">
      <z-tooltip content="全局斜体" placement="left">
        <z-button circle icon="italic" size="extra" :highlight="zenless.isItalic" @click="switchFontStyle"></z-button>
      </z-tooltip>
      <z-tooltip content="全局粗体" placement="left">
        <z-button circle icon="bold" size="extra" :highlight="zenless.isBold" @click="switchFontWeight"></z-button>
      </z-tooltip>
    </div>
    <z-backtop :target="scrollTarget" :right="120" :bottom="80"></z-backtop>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useZenless } from 'zenless-ui'

const router = useRouter()
const route = useRoute()
const zenless = useZenless()

const routeName = ref(route.name)
const scrollBarRef = ref(null)
const defaultOpen = ['component-general', 'component-navigation', 'component-data-entry', 'component-data-display', 'component-feedback', 'component-other']

const scrollTarget = computed(() => {
  if (scrollBarRef.value) {
    return scrollBarRef.value.scrollTarget
  }
})
watch(() => route.name, (value) => {
  routeName.value = value
})

const onMenuChange = (name) => {
  router.push({ name })
}
const switchFontStyle = () => {
  zenless.isItalic = !zenless.isItalic
}
const switchFontWeight = () => {
  zenless.isBold = !zenless.isBold
}
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
  background: black;
  @include linear-pattern-background;
  color: white;
  &-wrap {
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    :deep(>.z-scrollbar__wrap>.z-scrollbar__vertical) {
      top: 86px;
    }
  }
}
.header {
  height: 80px;
  &-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 80px;
    box-sizing: border-box;
    z-index: 10;
    background: rgba(0, 0, 0, 0.65);
    @include grid-pattern-background;
    backdrop-filter: blur(6px);
  }
  &-content {
    margin: 0 auto;
    width: 1140px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >.logo {
      display: flex;
      align-items: center;
      font-size: 32px;
      line-height: 1em;
      font-weight: bold;
      color: black;
      text-shadow: 0 1px 0 white, 1px 0 0 white, 0 -1px 0 white, -1px 0 0 white;
      text-decoration: none;
      user-select: none;
      >span {
        margin-top: -8px;
        text-indent: -22px;
        overflow: hidden;
        letter-spacing: 1px;
      }
      >img {
        width: 40px;
        height: 40px;
        display: block;
      }
    }
  }
  .nav {
    display: flex;
    align-items: center;
    &-item {
      margin-left: 10px;
      border-radius: $--round-border-radius;
    }
    &-icon {
      position: absolute;
      left: 7px;
      fill: #fff;
    }
    .z-button:has(.nav-icon) {
      padding-left: 58px;
      &:active .nav-icon {
        fill: #000;
      }
    }
  }
}
.content {
  .side-nav {
    position: fixed;
    left: 50%;
    top: 90px;
    width: 220px;
    height: calc(100% - 100px);
    transform: translateX(calc(-1140px / 2));
  }
}
.float-btn {
  position: fixed;
  right: 120px;
  bottom: 142px;
  display: flex;
  flex-direction: column;
  z-index: 10;
  .z-tooltip {
    margin-left: 0;
    margin-top: 10px;
  }
}
</style>