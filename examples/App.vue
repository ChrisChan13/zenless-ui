<template>
  <router-view></router-view>
</template>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}
.component {
  width: 1140px;
  margin: 0 auto;
  padding: 50px 0 50px 270px;
  &-title {
    font-size: 28px;
    font-weight: bold;
    margin: 20px 0 50px;
  }
  &-header {
    font-size: 22px;
    font-weight: bold;
    margin: 50px 0 20px;
  }
  &-content {
    font-size: 14px;
    margin: 14px 0;
    code {
      margin: 0 5px;
      padding: .2em .4em;
      background: #222;
      border-radius: 5px;
    }
    ul {
      padding-left: 18px;
    }
  }
  &-codeblock {
    background: #222;
    border-radius: 5px;
    overflow: hidden;
  }
  &-preview {
    background: #222;
    border-radius: 16px;
    box-shadow: inset 0 1px 3px #333;
    position: relative;
    padding: 30px 0;
    &:has(>.source-code) {
      padding-bottom: 0;
    }
    &.is-dark {
      background: #000;
      .source-code-expand.is-sticky {
        background: #000;
      }
    }
    &-line {
      margin: 0 30px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      font-size: 14px;
      &:not(:last-of-type) {
        margin-bottom: 10px;
      }
    }
  }
}
.source-code {
  margin-top: 30px;
}
.z-table__cell {
  white-space: break-spaces;
}
</style>