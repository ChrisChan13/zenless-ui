export default {
  global: {
    code: {
      show: '显示代码',
      hide: '隐藏代码'
    },
    attr: {
      prop: '参数',
      desc: '说明',
      type: '类型',
      values: '可选值',
      default: '默认值'
    },
    event: {
      name: '事件名',
      desc: '说明',
      params: '回调参数'
    },
    slot: {
      name: '插槽名',
      desc: '说明'
    },
    method: {
      name: '方法名',
      desc: '说明'
    },
    404: {
      home: '回到首页'
    }
  },
  layout: {
    lang: 'Switch to English',
    menu: {
      changelog: '更新日志',
      'getting-started': '快速上手',
      general: '通用组件',
      icon: 'Icon 图标',
      button: 'Button 按钮',
      link: 'Link 链接',
      navigation: '导航组件',
      menu: 'Menu 导航菜单',
      tabs: 'Tabs 标签页',
      dropdown: 'Dropdown 下拉菜单',
      pagination: 'Pagination 分页',
      'data-entry': '数据录入',
      radio: 'Radio 单选框',
      checkbox: 'Checkbox 多选框',
      input: 'Input 输入框',
      textarea: 'Textarea 输入框',
      select: 'Select 选择器',
      switch: 'Switch 开关',
      slider: 'Slider 滑动输入条',
      form: 'Form 表单',
      'data-display': '数据展示',
      table: 'Table 表格',
      tag: 'Tag 标签',
      progress: 'Progress 进度条',
      badge: 'Badge 徽标',
      card: 'Card 卡片',
      collapse: 'Collapse 折叠面板',
      feedback: '交互反馈',
      tooltip: 'Tooltip 文字提示',
      message: 'Message 消息提示',
      modal: 'Modal 对话框',
      drawer: 'Drawer 抽屉',
      other: '其他组件',
      scrollbar: 'Scrollbar 滚动视图',
      backtop: 'Backtop 回到顶部'
    },
    float: {
      italic: '全局斜体',
      bold: '全局粗体'
    }
  },
  'getting-started': {
    title: '快速上手',
    brief: 'Zenless 是一套基于 Vue 3.0 的仿 <i><b>绝区零</b></i> 桌面端组件库。',
    install: '安装',
    import: '引入 Zenless',
    'import-desc': '在 main.js 中写入以下内容：',
    config: '全局配置',
    'config-desc': `在引入 Zenless 时，可以传入全局配置对象，目前支持<code>isBold</code>与<code>isItalic</code>字段。<code>isBold</code>用于设置组件是否使用粗体，<code>isItalic</code>设置组件是否使用斜体（仅部分组件适用斜体）。操作如下：`,
    'config-part': `<code>isBold</code>和<code>isItalic</code>同样支持在流程中修改，具体操作如下：`,
    i18n: '国际化',
    'i18n-desc': 'Zenless 组件默认使用中文，如果你希望使用其他语言，你可以参考下面的方案：',
    start: '开始使用',
    'start-desc': '现在就可以编写代码了，各个组件的使用方法请参阅它们各自的文档。',
    final: '最后 \\[ o_x ]/',
    'final-desc': `<ul>
  <li>此项目并未百分百复刻绝区零的各组件表现，包含部分简化以及个人理解，只因个人能力有限</li>
  <li>此项目结合<code>rAF</code>和<code>document.getAnimations</code>来同步各组件之间部分动画的进程，可能造成性能浪费</li>
  <li>此项目组件不丰富、功能凑合用、代码健壮性欠佳，没有针对 ARIA、SEO 等做优化</li>
</ul>`,
    'final-hint': `请立即投入业务场景中使用！<br>请立即投入业务场景中使用！<br>请立即投入业务场景中使用（bushi`
  },
  component: {
    icon : {
      title: 'Icon 图标',
      usage: '使用方法',
      'usage-desc': `直接通过设置类名为<code>z-icon-iconName</code>，或使用<code>z-icon</code>组件。例如：`,
      tips: 'Tips',
      'tips-desc': `你可以引入自己准备的图标字体，将图标字体类名替换<code>z-icon-</code>作为类名的前缀，从而达到拓展图标库图标的效果。`,
      icons: '图标集合'
    },
    button: {
      title: 'Button 按钮',
      usage: '使用方法',
      default: '默认按钮',
      primary: '主要按钮',
      success: '成功按钮',
      info: '信息按钮',
      warning: '警告按钮',
      danger: '危险按钮',
      plain: '朴素按钮',
      hollow: '镂空按钮',
      ether: '以太按钮',
      fire: '火系按钮',
      electric: '电系按钮',
      ice: '冰系按钮',
      physical: '物理按钮',
      highlight: '醒目按钮',
      disabled: '禁用状态',
      icon: '图标按钮',
      loading: '加载中',
      size: '不同尺寸',
      extra: '超大按钮',
      large: '大型按钮',
      small: '小型按钮',
      mini: '超小按钮'
    },
    link: {
      title: 'Link 文字链接',
      usage: '基础用法',
      default: '默认链接',
      primary: '主要链接',
      success: '成功链接',
      info: '信息链接',
      warning: '警告链接',
      danger: '危险链接',
      plain: '朴素链接',
      hollow: '镂空链接',
      ether: '以太链接',
      fire: '火系链接',
      electric: '电系链接',
      ice: '冰系链接',
      physical: '物理链接',
      highlight: '醒目链接',
      disabled: '禁用状态',
      underline: '下划线',
      'without-underline': '无下划线',
      'with-underline': '有下划线',
      icon: '图标',
      confirm: '确认',
      cancel: '取消'
    },
    menu: {
      title: 'Menu 导航菜单',
      usage: '基础用法',
      'nav-1': '导航一',
      'nav-2': '导航二',
      'nav-3': '导航三',
      'nav-4': '导航四',
      'opt-1': '选项一',
      'opt-2': '选项二',
      'opt-3': '选项三',
      'opt-4': '选项四',
      'opt-5': '选项五',
      'opt-6': '选项六',
      accordion: '手风琴效果'
    },
    tabs: {
      title: 'Tabs 标签页',
      usage: '基础用法',
      'tab-1': '基础',
      'tab-2': '技能',
      'tab-3': '装备',
      custom: '自定义标签页',
      disabled: '禁用标签页'
    },
    dropdown: {
      title: 'Dropdown 下拉菜单',
      usage: '基础用法',
      button: '下拉菜单',
      'act-1': '等级 Lv.30',
      'act-2': '等级 Lv.40',
      'act-3': '等级 Lv.50',
      'act-4': '等级 Lv.60',
      click: '点击触发',
      hiding: '菜单隐藏方式',
      size: '不同尺寸',
      extra: '超大菜单',
      large: '大型菜单',
      default: '默认菜单',
      small: '小型菜单',
      mini: '超小菜单'
    },
    pagination: {
      title: 'Pagination 分页',
      usage: '基础用法',
      minimal: '极简模式'
    },
    radio: {
      title: 'Radio 单选框',
      usage: '基础用法',
      'opt-1': '备选项',
      'opt-2': '备选项',
      'opt-3': '备选项',
      disabled: '禁用状态',
      group: '单选框组',
      size: '不同尺寸',
      extra: '超大选项',
      large: '大型选项',
      default: '默认选项',
      small: '小型选项',
      mini: '超小选项',
      button: '按钮样式'
    },
    checkbox: {
      title: 'Checkbox 多选框',
      usage: '基础用法',
      'opt-1': '备选项',
      'opt-2': '备选项',
      'opt-3': '备选项',
      disabled: '禁用状态',
      group: '多选框组',
      limit: '可选项目数量限制',
      size: '不同尺寸',
      indeterminate: '半选状态',
      all: '全选',
      extra: '超大选项',
      large: '大型选项',
      default: '默认选项',
      small: '小型选项',
      mini: '超小选项',
      button: '按钮样式'
    },
    input: {
      title: 'Input 输入框',
      usage: '基础用法',
      placeholder: '请输入',
      disabled: '禁用状态',
      clearable: '可清空',
      password: '密码框',
      'pwd-placeholder': '请输入密码',
      mixed: '前缀和后缀',
      combined: '复合输入框',
      'combined-code': '验证码',
      'combined-send': '发送',
      size: '不同尺寸'
    },
    textarea: {
      title: 'Textarea 输入框',
      usage: '基础用法',
      placeholder: '请输入',
      disabled: '禁用状态',
      rows: '设置行数',
      'auto-size': '自适应高度'
    },
    select: {
      title: 'Select 选择器',
      usage: '基础用法',
      placeholder: '请选择',
      'opt-1': '等级 Lv.30',
      'opt-2': '等级 Lv.40',
      'opt-3': '等级 Lv.50',
      'opt-4': '等级 Lv.60',
      disabled: '禁用状态',
      clearable: '可清空',
      custom: '自定义模板',
      size: '不同尺寸'
    },
    switch: {
      title: 'Switch 开关',
      usage: '基础用法',
      disabled: '禁用状态'
    },
    slider: {
      title: 'Slider 滑动输入条',
      usage: '基础用法',
      tooltip: '显示 Tooltip',
      disabled: '禁用状态'
    },
    form: {
      title: 'Form 表单',
      usage: '基础用法',
      inline: '行内表单',
      align: '对齐方式',
      left: '左对齐',
      right: '右对齐',
      top: '顶部对齐'
    },
    table: {
      title: 'Table 表格',
      usage: '基础用法',
      'col-type': '信号类型',
      'col-name': '信号列表',
      'col-from': '频段类型',
      'col-date': '调频时间',
      data: [{
        type: '代理人',
        name: '艾莲',
        color: '#ffb500',
        from: '独家频段',
        date: '2024-07-09 20:13:29'
      }, {
        type: '代理人',
        name: '妮可',
        color: '#e900ff',
        from: '独家频段',
        date: '2024-07-09 20:13:29'
      }, {
        type: '音擎',
        name: '「月相」-晦',
        from: '独家频段',
        date: '2024-07-09 20:13:29'
      }, {
        type: '音擎',
        name: '「电磁暴」-叁式',
        from: '独家频段',
        date: '2024-07-09 20:13:29'
      }, {
        type: '音擎',
        name: '「湍流」-斧型',
        from: '独家频段',
        date: '2024-07-09 20:13:29'
      }]
    },
    tag: {
      title: 'Tag 标签',
      usage: '基础用法',
      default: '默认标签',
      primary: '标签一',
      success: '标签二',
      info: '标签三',
      warning: '标签四',
      danger: '标签五',
      plain: '朴素标签',
      hollow: '镂空标签',
      ether: '以太标签',
      fire: '火系标签',
      electric: '电系标签',
      ice: '冰系标签',
      physical: '物理标签',
      closable: '可移除标签',
      list: ['标签一', '标签二', '标签三', '标签四', '标签五'],
      size: '不同尺寸',
      extra: '超大标签',
      large: '大型标签',
      small: '小型标签',
      mini: '超小标签'
    },
    progress: {
      title: 'Progress 进度条',
      usage: '基础用法',
      circle: '进度圈'
    },
    badge: {
      title: 'Badge 徽标',
      usage: '基础用法',
      default: '默认徽标',
      primary: '主要徽标',
      success: '成功徽标',
      info: '信息徽标',
      warning: '警告徽标',
      plain: '朴素徽标',
      hollow: '镂空徽标',
      ether: '以太徽标',
      fire: '火系徽标',
      electric: '电系徽标',
      ice: '冰系徽标',
      physical: '物理徽标',
      highlight: '醒目徽标',
      dot: '小圆点',
    },
    card: {
      title: 'Card 卡片',
      usage: '基础用法',
      'demo-title': '[ 情报 ] Zenless UI 发布',
      'demo-content': '今天是 2024 年 10 月 30 日，Zenless UI v1.0 正式发布！',
      custom: '自定义内容',
      'custom-item': '列表内容',
    },
    collapse: {
      title: 'Collapse 折叠面板',
      usage: '基础用法',
      'data-1': [{
        title: '额外能力：风暴潮',
        content: '队伍中存在与自身属性或阵营相同的角色时触发'
      }, {
        title: '额外能力：优雅猎群',
        content: '队伍中存在与自身属性或阵营相同的角色时触发'
      }, {
        title: '额外能力：优雅舞会',
        content: '队伍中存在与自身属性或阵营相同的角色时触发'
      }],
      'data-2': [{
        title: '录像店等级 1',
        content: '经营状况：小众门店 —— 默默无闻的街区录像店，没有多少额外的营业收益。'
      }, {
        title: '录像店等级 2',
        content: '经营状况：引人瞩目 —— 偶尔有新客人被吸引至此，目常收入能覆盖店铺经营成本。'
      }, {
        title: '录像店等级 3',
        content: '经营状况：略有名气 -- 有了不少定期前来的熟客，店铺在维持周转之外还有结余。'
      }, {
        title: '录像店等级 4',
        content: '经营状况：广受追捧 —— 有不少老顾客会将这里推荐给朋友，店铺目常收入稳赚不赔。'
      }, {
        title: '录像店等级 5',
        content: `经营状况：区域扬名 —— 附近有口皆碑的独特店铺，每日经营收入已经相当可观。`
      }, {
        title: '录像店等级 6',
        content: `经营状况：当红店铺 —— 店铺的名号在附近街区甚广，每天都有大量资金进账。`
      }],
      plain: '朴素面板',
      accordion: '手风琴效果',
      custom: '自定义面板标题',
      disabled: '面板禁用效果'
    },
    tooltip: {
      title: 'Tooltip 文字提示',
      usage: '基础用法',
      'bl-text': 'bottom-left 文字提示内容',
      bl: '下左',
      'bottom-text': 'bottom 文字提示内容',
      bottom: '下方',
      'br-text': 'bottom-right 文字提示内容',
      br: '下右',
      'rt-text': 'right-top 文字提示内容',
      rt: '右上',
      'right-text': 'right 文字提示内容',
      right: '右方',
      'rb-text': 'right-bottom 文字提示内容',
      rb: '右下',
      'lt-text': 'left-top 文字提示内容',
      lt: '左上',
      'left-text': 'left 文字提示内容',
      left: '左方',
      'lb-text': 'left-bottom 文字提示内容',
      lb: '左下',
      'tl-text': 'top-left 文字提示内容',
      tl: '上左',
      'top-text': 'top 文字提示内容',
      top: '上方',
      'tr-text': 'top-right 文字提示内容',
      tr: '上右',
      disabled: '禁用状态',
      prompt: '文字提示内容',
      'disabled-button': '禁用 Tooltip',
      custom: '自定义内容',
      'custom-button': '自定义 Tooltip'
    },
    message: {
      title: 'Message 消息提示',
      usage: '基础用法',
      show: '打开 Message',
      type: '不同状态',
      success: '成功 Message',
      warning: '警告 Message',
      error: '错误 Message',
      import: '引用方式',
      'import-desc': `此时调用方法为<code>message(options)</code>。其中 options 可以为 string，将视为仅传入 options.message。同时也为每个 type 定义了各自的方法，如<code>message.success(options)</code>。`,
      text: '这是一条消息提示',
      'success-text': '恭喜，这是一条成功消息',
      'warning-text': '提示，这是一条警告消息',
      'error-text': '抱歉，这是一条错误消息'
    },
    modal: {
      title: 'Modal 对话框',
      usage: '基础用法',
      open: '打开 Modal',
      'modal-title': '提示',
      'modal-text': '这是一段信息',
      fullscreen: '全屏模式'
    },
    drawer: {
      title: 'Drawer 对话框',
      usage: '基础用法',
      open: '打开 Drawer',
      'drawer-title': '提示',
      'drawer-text': '这是一段信息',
      fullscreen: '全屏模式'
    },
    scrollbar: {
      title: 'Scrollbar 滚动视图',
      usage: '基础用法'
    },
    backtop: {
      title: 'Backtop 回到顶部',
      usage: '基础用法',
      'usage-desc': '查看屏幕最右下角按钮'
    }
  },
  attribute: {
    icon: {
      name: '图标名称，省略“z-icon-”前缀',
      size: '图标大小，number 类型默认使用 px 单位',
      color: '图标颜色'
    },
    button: {
      size: '尺寸',
      type: '类型',
      icon: '按钮图标',
      loading: '加载中状态',
      disabled: '禁用状态',
      plain: '朴素按钮',
      round: '圆角按钮',
      circle: '圆形按钮',
      hollow: '镂空按钮',
      highlight: '醒目按钮',
      'native-type': '原生 type 属性'
    },
    link: {
      type: '类型',
      highlight: '醒目链接',
      underline: '下划线',
      disabled: '禁用链接',
      href: '原生 href 属性',
      icon: '链接图标'
    },
    menu: {
      'v-model': '绑定值，选中的 menu-item 的 name 的值',
      accordion: '手风琴模式',
      'default-open': '默认展开的 sub-menu 的 name 的值或数组'
    },
    'sub-menu': {
      name: '唯一标识',
      title: '菜单项标题',
      disabled: '禁用状态',
      icon: '菜单项图标'
    },
    'menu-item': {
      name: '唯一标识',
      title: '菜单项标题',
      disabled: '禁用状态',
      icon: '菜单项图标'
    },
    tabs: {
      'v-model': '绑定值，选中的 tab-panel 的 name 的值',
      placement: '标签的位置'
    },
    'tab-panel': {
      label: '选项卡标题',
      name: '唯一标识',
      disabled: '禁用状态',
      lazy: '延迟渲染，即选中时再渲染对应选项卡内容'
    },
    dropdown: {
      trigger: '触发下拉的行为',
      size: '菜单尺寸',
      'hide-on-command': '是否在点击菜单项后隐藏菜单'
    },
    'dropdown-item': {
      command: '指令',
      disabled: '是否禁用'
    },
    pagination: {
      'v-model': '当前页',
      'page-size': '页大小',
      total: '总条目数',
      'prev-text': '上一页文字',
      'next-text': '下一页文字',
      minimal: '极简内容'
    },
    radio: {
      'v-model': '绑定值，选中的 radio 的 value',
      value: 'radio input 的 value',
      disabled: '禁用状态',
      size: '尺寸',
      name: '原生 name 属性'
    },
    'radio-group': {
      'v-model': '绑定值，选中的 radio 的 value',
      disabled: '禁用状态',
      size: '尺寸'
    },
    checkbox: {
      'v-model': '绑定值，选中的 checkbox 的 value',
      value: 'checkbox input 的 value',
      disabled: '禁用状态',
      size: '尺寸',
      name: '原生 name 属性',
      indeterminate: '半选状态'
    },
    'checkbox-group': {
      'v-model': '绑定值，选中的 checkbox 的 value',
      disabled: '禁用状态',
      size: '尺寸',
      min: '可选数量最小值',
      max: '可选数量最大值'
    },
    input: {
      'v-model': '绑定值',
      type: '类型',
      'type-values': 'text 和其他原生 input 的 type 值',
      disabled: '是否禁用',
      name: '原生属性',
      tabindex: '原生属性',
      maxlength: '原生属性',
      minlength: '原生属性',
      placeholder: '输入框占位文本',
      clearable: '是否可清空',
      size: '输入框尺寸',
      'prefix-icon': '输入框头部图标',
      'suffix-icon': '输入框尾部图标',
      autocomplete: '原生属性',
      autofocus: '原生属性',
      readonly: '原生属性',
      'text-align': '输入框文字对齐方式',
      'text-align-values': '同 css 中 text-align 的值'
    },
    textarea: {
      'v-model': '绑定值',
      disabled: '是否禁用',
      name: '原生属性',
      rows: '原生属性',
      tabindex: '原生属性',
      maxlength: '原生属性',
      minlength: '原生属性',
      placeholder: '输入框占位文本',
      clearable: '是否可清空',
      size: '输入框尺寸',
      autocomplete: '原生属性',
      autofocus: '原生属性',
      readonly: '原生属性',
      'text-align': '输入框文字对齐方式',
      'text-align-values': '同 css 中 text-align 的值',
      'auto-size': '自适应内容高度'
    },
    select: {
      'v-model': '绑定值',
      name: '选择器的 name 属性',
      disabled: '是否禁用',
      placeholder: '占位符',
      clearable: '是否可清空',
      size: '选择器的尺寸',
      'empty-text': '选项为空时显示的文字',
      'empty-text-default': '暂无数据... \\[ o_x ]/'
    },
    option: {
      value: '选项的值',
      label: '选项的标签',
      'label-default': '与 value 相同',
      disabled: '是否禁用'
    },
    switch: {
      'v-model': '绑定值',
      value: 'switch input 的 value',
      name: '原生 name 属性',
      disabled: '禁用状态'
    },
    slider: {
      'v-model': '绑定值',
      min: '最小值',
      max: '最大值',
      step: '步长',
      disabled: '禁用状态',
      tooltip: '显示 tooltip'
    },
    form: {
      inline: '行内表单模式',
      'label-width': '表单标签的宽度',
      'label-position': '表单标签的位置'
    },
    'form-item': {
      label: '表单标签的内容',
      'label-width': '表单标签的宽度',
      required: '是否必填'
    },
    table: {
      data: '显示的数据',
      border: '是否带有纵向边框',
      'empty-text': '空数据时显示的文本内容',
      'empty-text-default': '暂无数据... \\[ o_x ]/'
    },
    'table-column': {
      prop: '对应列内容的字段名',
      label: '显示的标题',
      width: '对应列的宽度'
    },
    tag: {
      size: '尺寸',
      type: '类型',
      plain: '朴素按钮',
      round: '圆角按钮',
      hollow: '镂空按钮',
      closable: '是否可关闭'
    },
    progress: {
      type: '进度条类型',
      size: '环形进度圈大小（只在 type 为 circle 时可用）',
      percent: '百分比',
      color: '进度条颜色'
    },
    badge: {
      type: '类型',
      'is-dot': '小圆点',
      value: '显示值'
    },
    card: {
      image: '卡片图片',
      avatar: '卡片头像',
      nickname: '卡片昵称',
      title: '卡片标题',
      content: '卡片描述'
    },
    collapse: {
      'v-model': '绑定值，激活的面板',
      accordion: '手风琴模式',
      plain: '朴素面板'
    },
    'collapse-item': {
      title: '面板的标题',
      name: '面板的标识',
      disabled: '禁用状态'
    },
    tooltip: {
      content: '显示的内容',
      placement: 'tooltip 出现的位置',
      visible: '是否显示',
      disabled: '禁用状态'
    },
    modal: {
      'v-model': '是否显示 modal',
      title: 'modal 的标题',
      mask: '是否展示遮罩',
      'mask-closable': '点击蒙层是否允许关闭',
      closable: '是否显示关闭按钮，fullscreen 模式不支持',
      fullscreen: '全屏模式',
      'show-footer': '是否展示按钮操作区',
      'show-cancel': '是否展示取消按钮',
      'cancel-text': '取消按钮的文字',
      'cancel-text-default': '取消',
      'confirm-text': '确认按钮的文字',
      'confirm-text-default': '确认'
    },
    drawer: {
      'v-model': '是否显示 drawer',
      title: 'drawer 的标题',
      mask: '是否展示遮罩',
      'mask-closable': '点击蒙层是否允许关闭',
      closable: '是否显示关闭按钮，fullscreen 模式不支持',
      fullscreen: '全屏模式',
      'show-footer': '是否展示按钮操作区',
      'show-cancel': '是否展示取消按钮',
      'cancel-text': '取消按钮的文字',
      'cancel-text-default': '取消',
      'confirm-text': '确认按钮的文字',
      'confirm-text-default': '确认'
    },
    scrollbar: {
      fixed: '设置内容不超过 container 时是否显示滚动条，\n可单独设置 x 轴和 y 轴',
      'hide-scroll': '隐藏滚动条，优先级高于 fixed',
      resizable: '尺寸是否会变化，若 container 尺寸不会发生变化，\n设置为 false 可以优化性能'
    },
    backtop: {
      target: '触发滚动的元素',
      'visible-height': '显示按钮的滚动高度阈值',
      right: '按钮的窗口右边距',
      bottom: '按钮的窗口底部边距'
    }
  },
  slot: {
    'sub-menu': {
      default: '子菜单',
      title: '菜单项标题'
    },
    'tab-panel': {
      default: '选项卡的内容',
      label: '选项卡的标题'
    },
    dropdown: {
      default: '触发下拉的元素',
      dropdown: '下拉列表，z-dropdown-item 组件'
    },
    input: {
      prefix: '输入框头部内容',
      suffix: '输入框尾部内容',
      prepend: '输入框前置内容',
      append: '输入框后置内容'
    },
    select: {
      default: 'option 列表',
      empty: '选项为空时显示的内容'
    },
    'form-item': {
      default: '表单项内容',
      label: '表单标签的内容'
    },
    table: {
      empty: '空数据时显示的自定义内容'
    },
    'table-column': {
      default: '自定义列的内容，参数为 { row, column, index }',
      header: '自定义表头的内容，参数为 { column }'
    },
    tooltip: {
      default: '触发 tooltip 的内容',
      content: 'tooltip 显示的内容'
    },
    modal: {
      default: 'modal 的内容',
      title: 'modal 标题区的内容',
      footer: 'modal 按钮操作区的内容'
    },
    drawer: {
      default: 'drawer 的内容',
      title: 'drawer 标题区的内容',
      footer: 'drawer 按钮操作区的内容'
    }
  },
  event: {
    menu: {
      change: '菜单激活回调',
      'change-params': '选中的菜单项的 name'
    },
    tabs: {
      change: '选项激活回调',
      'change-params': '选中的选项的 name'
    },
    dropdown: {
      command: '点击菜单项触发的事件回调',
      'command-params': 'dropdown-item 的 command',
      trigger: '下拉列表出现/隐藏时触发',
      'trigger-params': '出现则为 true，隐藏则为 false'
    },
    pagination: {
      change: '当前页改变时触发',
      'change-params': '当前页'
    },
    radio: {
      change: '绑定值变化时触发的回调',
      'change-params': '选中的 radio 的 value 值'
    },
    'radio-group': {
      change: '绑定值变化时触发的回调',
      'change-params': '选中的 radio 的 value 值'
    },
    checkbox: {
      change: '绑定值变化时触发的回调',
      'change-params': '选中的 checkbox 的 value 值'
    },
    'checkbox-group': {
      change: '绑定值变化时触发的回调',
      'change-params': '选中的 checkbox 的 value 值'
    },
    input: {
      blur: 'input 失去焦点',
      focus: 'input 获得焦点',
      change: 'input 内容改变',
      input: 'input 的值改变',
      clear: 'input 点击清空'
    },
    textarea: {
      blur: 'textarea 失去焦点',
      focus: 'textarea 获得焦点',
      change: 'textarea 内容改变',
      input: 'textarea 的值改变'
    },
    select: {
      change: '选中值发生变化时触发',
      'change-params': '当前选中的值',
      clear: '点击清空时触发'
    },
    switch: {
      change: 'switch 状态变化时触发的回调',
      'change-params': '新状态的值'
    },
    slider: {
      change: '值改变时触发',
      'change-params': '改变后的值'
    },
    tag: {
      close: '关闭 tag 时触发的事件'
    },
    collapse: {
      change: '激活面板改变时触发的回调',
      'change-params': '激活的面板'
    },
    modal: {
      open: 'modal 打开的回调',
      close: 'modal 关闭的回调，关闭按钮 或 遮罩层 触发',
      cancel: 'modal 取消的回调',
      confirm: 'modal 确认的回调'
    },
    drawer: {
      open: 'drawer 打开的回调',
      close: 'drawer 关闭的回调，关闭按钮 或 遮罩层 触发',
      cancel: 'drawer 取消的回调',
      confirm: 'drawer 确认的回调'
    }
  },
  option: {
    message: {
      message: '消息文字',
      type: '主题',
      duration: '显示时间，毫秒'
    }
  },
  method: {
    message: {
      success: '显示 success 主题的 message，参数与 message options 一致',
      warning: '显示 warning 主题的 message，参数与 message options 一致',
      error: '显示 error 主题的 message，参数与 message options 一致'
    }
  }
}