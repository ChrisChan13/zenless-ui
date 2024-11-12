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
              <div class="nav-item">
                <z-tooltip :content="$t('layout.lang')" placement="bottom">
                  <z-button class="lang" circle :highlight="translated" @click="switchLanguage">
                    <svg class="nav-icon" width="22" height="22" viewBox="0 0 24 24">
                      <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path>
                    </svg>
                  </z-button>
                </z-tooltip>
              </div>
              <z-link class="nav-item" target="_blank" href="https://github.com/ChrisChan13/zenless-ui">
                <z-button class="github">
                  <svg class="nav-icon" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                  </svg>
                  <span>Github</span>
                </z-button>
              </z-link>
              <div class="nav-item">
                <z-button class="menu" @click="toggleMenu()">{{ $t('global.menu.text') }}</z-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div v-show="menuVisible" class="side-mask" @click="toggleMenu()">
          <z-link class="github" target="_blank" href="https://github.com/ChrisChan13/zenless-ui">
            <z-button>
              <svg class="github-icon" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
              </svg>
              <span>Github</span>
            </z-button>
          </z-link>
        </div>
        <z-menu
          v-model="routeName"
          :default-open="defaultOpen"
          :class="['side-nav', { 'show': menuVisible }]"
          @change="onMenuChange"
        >
          <!-- <z-menu-item name="changelog">{{ $t('layout.menu.changelog') }}</z-menu-item> -->
          <z-menu-item name="getting-started">{{ $t('layout.menu.getting-started') }}</z-menu-item>
          <z-sub-menu name="component-general" :title="$t('layout.menu.general')">
            <z-menu-item name="component-icon">{{ $t('layout.menu.icon') }}</z-menu-item>
            <z-menu-item name="component-button">{{ $t('layout.menu.button') }}</z-menu-item>
            <z-menu-item name="component-link">{{ $t('layout.menu.link') }}</z-menu-item>
          </z-sub-menu>
          <z-sub-menu name="component-navigation" :title="$t('layout.menu.navigation')">
            <z-menu-item name="component-menu">{{ $t('layout.menu.menu') }}</z-menu-item>
            <z-menu-item name="component-tabs">{{ $t('layout.menu.tabs') }}</z-menu-item>
            <z-menu-item name="component-dropdown">{{ $t('layout.menu.dropdown') }}</z-menu-item>
            <z-menu-item name="component-pagination">{{ $t('layout.menu.pagination') }}</z-menu-item>
          </z-sub-menu>
          <z-sub-menu name="component-data-entry" :title="$t('layout.menu.data-entry')">
            <z-menu-item name="component-radio">{{ $t('layout.menu.radio') }}</z-menu-item>
            <z-menu-item name="component-checkbox">{{ $t('layout.menu.checkbox') }}</z-menu-item>
            <z-menu-item name="component-input">{{ $t('layout.menu.input') }}</z-menu-item>
            <z-menu-item name="component-textarea">{{ $t('layout.menu.textarea') }}</z-menu-item>
            <z-menu-item name="component-select">{{ $t('layout.menu.select') }}</z-menu-item>
            <z-menu-item name="component-switch">{{ $t('layout.menu.switch') }}</z-menu-item>
            <z-menu-item name="component-slider">{{ $t('layout.menu.slider') }}</z-menu-item>
            <z-menu-item name="component-form">{{ $t('layout.menu.form') }}</z-menu-item>
          </z-sub-menu>
          <z-sub-menu name="component-data-display" :title="$t('layout.menu.data-display')">
            <z-menu-item name="component-table">{{ $t('layout.menu.table') }}</z-menu-item>
            <z-menu-item name="component-tag">{{ $t('layout.menu.tag') }}</z-menu-item>
            <z-menu-item name="component-progress">{{ $t('layout.menu.progress') }}</z-menu-item>
            <z-menu-item name="component-badge">{{ $t('layout.menu.badge') }}</z-menu-item>
            <z-menu-item name="component-card">{{ $t('layout.menu.card') }}</z-menu-item>
            <z-menu-item name="component-collapse">{{ $t('layout.menu.collapse') }}</z-menu-item>
          </z-sub-menu>
          <z-sub-menu name="component-feedback" :title="$t('layout.menu.feedback')">
            <z-menu-item name="component-tooltip">{{ $t('layout.menu.tooltip') }}</z-menu-item>
            <z-menu-item name="component-message">{{ $t('layout.menu.message') }}</z-menu-item>
            <z-menu-item name="component-modal">{{ $t('layout.menu.modal') }}</z-menu-item>
            <z-menu-item name="component-drawer">{{ $t('layout.menu.drawer') }}</z-menu-item>
          </z-sub-menu>
          <z-sub-menu name="component-other" :title="$t('layout.menu.other')">
            <z-menu-item name="component-scrollbar">{{ $t('layout.menu.scrollbar') }}</z-menu-item>
            <z-menu-item name="component-backtop">{{ $t('layout.menu.backtop') }}</z-menu-item>
          </z-sub-menu>
        </z-menu>
        <router-view></router-view>
      </div>
    </z-scrollbar>
    <div class="float-btn">
      <z-tooltip :content="$t('layout.float.italic')" placement="left">
        <z-button circle icon="italic" size="extra" :highlight="zenless.isItalic" @click="switchFontStyle"></z-button>
      </z-tooltip>
      <z-tooltip :content="$t('layout.float.bold')" placement="left">
        <z-button circle icon="bold" size="extra" :highlight="zenless.isBold" @click="switchFontWeight"></z-button>
      </z-tooltip>
    </div>
    <z-backtop class="backtop" :target="scrollTarget" :right="120" :bottom="80"></z-backtop>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useZenless, locale } from 'zenless-ui'
import * as i18n from '@/locale'

const router = useRouter()
const route = useRoute()
const zenless = useZenless()
const i18nCtx = i18n.useI18n()

const routeName = ref(route.name)
const scrollBarRef = ref(null)
const defaultOpen = ['component-general', 'component-navigation', 'component-data-entry', 'component-data-display', 'component-feedback', 'component-other']
const translated = ref(false)
const menuVisible = ref(false)

const scrollTarget = computed(() => {
  if (scrollBarRef.value) {
    return scrollBarRef.value.scrollTarget
  }
})
watch(() => route.name, (value) => {
  routeName.value = value
})

onMounted(() => {
  if (route.query.lang === 'en') {
    localStorage.setItem('page_translated', true)
  }
  translated.value = localStorage.getItem('page_translated') === 'true'
  zenless.locale = translated.value ? locale.en : locale.zhCn
  i18nCtx.value = translated.value ? i18n.en : i18n.zhCn
  const isItalic = localStorage.getItem('component_is_italic')
  zenless.isItalic = isItalic === null || isItalic === 'true'
  zenless.isBold =  localStorage.getItem('component_is_bold') === 'true'
})

const onMenuChange = (name) => {
  router.push({ name })
  if (menuVisible.value) {
    toggleMenu()
  }
}
const switchFontStyle = () => {
  zenless.isItalic = !zenless.isItalic
  localStorage.setItem('component_is_italic', zenless.isItalic)
}
const switchFontWeight = () => {
  zenless.isBold = !zenless.isBold
  localStorage.setItem('component_is_bold', zenless.isBold)
}
const switchLanguage = () => {
  translated.value = !translated.value
  zenless.locale = translated.value ? locale.en : locale.zhCn
  i18nCtx.value = translated.value ? i18n.en : i18n.zhCn
  localStorage.setItem('page_translated', translated.value)
}
const toggleMenu = () => {
  menuVisible.value = !menuVisible.value
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
      .github:has(.nav-icon) {
        padding-left: 58px;
      }
      .lang .nav-icon {
        left: 8px;
      }
      &:has(.menu) {
        display: none;
      }
    }
    &-icon {
      position: absolute;
      left: 7px;
      fill: currentColor;
    }
  }
}
.content {
  .side-mask {
    display: none;
  }
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
@media screen and (max-width: 1205px) {
  .container {
    &-wrap {
      :deep(.z-scrollbar__bar) {
        display: none;
      }
    }
  }
  .header {
    &-content {
      width: 95vw;
    }
    .nav-item:has(.github) {
      display: none;
    }
    .nav-item:has(.menu) {
      display: block !important;
    }
  }
  .float-btn {
    right: 5vw;
    bottom: 164px;
  }
  .backtop {
    right: 5vw !important;
    bottom: 102px !important;
  }
  .content {
    .side-mask {
      display: block;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 13;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(6px);
      .github {
        position: absolute;
        right: 2.5vw;
        top: 20px;
        .z-button {
          padding-left: 58px;
        }
        &-icon {
          position: absolute;
          left: 7px;
          fill: currentColor;
        }
      }
    }
    .side-nav {
      left: 2.5vw;
      top: 2.5vw;
      width: 50vw;
      height: calc(100vh - 5vw);
      transform: translateX(-100vw);
      transition: transform 0.14s ease-in-out;
      z-index: 13;
      &.show {
        transform: translateX(0);
      }
    }
  }
}
</style>