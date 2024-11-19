export default {
  global: {
    code: {
      show: 'Show Code',
      hide: 'Hide Code'
    },
    attr: {
      prop: 'Attribute',
      desc: 'Description',
      type: 'Type',
      values: 'Accepted',
      default: 'Default'
    },
    event: {
      name: 'Event Name',
      desc: 'Description',
      params: 'Parameters'
    },
    slot: {
      name: 'Slot Name',
      desc: 'Description'
    },
    method: {
      name: 'Method',
      desc: 'Description'
    },
    404: {
      home: 'Home Page'
    },
    menu: {
      text: 'MENU'
    }
  },
  layout: {
    lang: '切换中文',
    menu: {
      changelog: 'Changelog',
      'getting-started': 'Quick Start',
      general: 'Basic',
      icon: 'Icon',
      button: 'Button',
      link: 'Link',
      navigation: 'Navigation',
      menu: 'Menu',
      tabs: 'Tabs',
      dropdown: 'Dropdown',
      pagination: 'Pagination',
      'data-entry': 'Data Entry',
      radio: 'Radio',
      checkbox: 'Checkbox',
      input: 'Input',
      textarea: 'Textarea',
      select: 'Select',
      switch: 'Switch',
      slider: 'Slider',
      form: 'Form',
      'data-display': 'Data Display',
      table: 'Table',
      tag: 'Tag',
      progress: 'Progress',
      badge: 'Badge',
      card: 'Card',
      collapse: 'Collapse',
      feedback: 'Feedback',
      tooltip: 'Tooltip',
      message: 'Message',
      modal: 'Modal',
      drawer: 'Drawer',
      other: 'Other',
      scrollbar: 'Scrollbar',
      backtop: 'Backtop',
      pattern: 'Pattern'
    },
    float: {
      italic: 'Global Italic',
      bold: 'Global Bold'
    }
  },
  'getting-started': {
    title: 'Quick Start',
    brief: 'Zenless is a Vue.js 3 UI Library inspired by <i><b>Zenless Zone Zero</i></b>.',
    install: 'Installation',
    import: 'Import Zenless',
    'import-desc': 'In main.js:',
    config: 'Global Config',
    'config-desc': `When importing Zenless, you can define a global config object. For now this object has two properties:<code>isBold</code>and<code>isItalic</code>. The property<code>isBold</code>sets the default font-weight to bold for all components and the property<code>isItalic</code>sets the default font-style to italic for only part of all components:`,
    'config-part': `You can also define<code>isBold</code>and<code>isItalic</code>any time you like:`,
    i18n: 'Internationalization',
    'i18n-desc': `The default language of Zenless is Chinese. If you wish to use another language, you'll need to do some i18n configuration:`,
    start: 'Start Coding',
    'start-desc': `Now you have implemented Vue and Zenless to your project, and it's time to write your code. Please refer to each component's documentation to learn how to use them.`,
    final: 'At Last \\[ o_x ]/',
    'final-desc': `<ul>
  <li>Didn't implement manifestations of all Zenless Zone Zero components one-to-one perfectly. There will be some simplifications, cuz my lack of ability.</li>
  <li>Using<code>rAF</code>and<code>document.getAnimations</code>to synchronize animations of each component. Which might result in wasted performance.</li>
  <li>Not optimized for ARIA, SEO, etc.</li>
</ul>`,
    'final-hint': `GET ZENLESS NOW!<br>GET ZENLESS NOW!<br>GET ZENLESS NOW!`
  },
  component: {
    icon : {
      title: 'Icon',
      usage: 'Usage',
      'usage-desc': `Just assign the class name to<code>z-icon-iconName</code>, or use<code>z-icon</code>component.`,
      tips: 'Tips',
      'tips-desc': `Import your own icon-font lib, replace those icons' class name to<code>z-icon-iconName</code>format to extend Zenless' icon lib.`,
      icons: 'Icons'
    },
    button: {
      title: 'Button',
      usage: 'Usage',
      default: 'Default',
      primary: 'Primary',
      success: 'Success',
      info: 'Info',
      warning: 'Warning',
      danger: 'Danger',
      plain: 'Plain',
      hollow: 'Hollow',
      ether: 'Ether',
      fire: 'Fire',
      electric: 'Electric',
      ice: 'Ice',
      physical: 'Physical',
      highlight: 'Highlight',
      disabled: 'Disabled Button',
      icon: 'Icon Button',
      loading: 'Loading Button',
      size: 'Sizes',
      extra: 'Extra',
      large: 'Large',
      small: 'Small',
      mini: 'Mini'
    },
    link: {
      title: 'Link',
      usage: 'Usage',
      default: 'Default',
      primary: 'Primary',
      success: 'Success',
      info: 'Info',
      warning: 'Warning',
      danger: 'Danger',
      ether: 'Ether',
      fire: 'Fire',
      electric: 'Electric',
      ice: 'Ice',
      physical: 'Physical',
      highlight: 'Highlight',
      disabled: 'Disabled Link',
      underline: 'Underline',
      'without-underline': 'Without Underline',
      'with-underline': 'With Underline',
      icon: 'Icon',
      confirm: 'Confirm',
      cancel: 'Cancel'
    },
    menu: {
      title: 'Menu',
      usage: 'Usage',
      'nav-1': 'Navigator One',
      'nav-2': 'Navigator Two',
      'nav-3': 'Navigator Three',
      'nav-4': 'Navigator Four',
      'opt-1': 'Item One',
      'opt-2': 'Item Two',
      'opt-3': 'Item Three',
      'opt-4': 'Item Four',
      'opt-5': 'Item Five',
      'opt-6': 'Item Six',
      accordion: 'Accordion'
    },
    tabs: {
      title: 'Tabs',
      usage: 'Usage',
      'tab-1': 'Base Stats',
      'tab-2': 'Skills',
      'tab-3': 'Equipment',
      custom: 'Custom Tab',
      disabled: 'Disabled Tab'
    },
    dropdown: {
      title: 'Dropdown',
      usage: 'Usage',
      button: 'Dropdown List',
      'act-1': 'Lv.30',
      'act-2': 'Lv.40',
      'act-3': 'Lv.50',
      'act-4': 'Lv.60',
      click: 'Click to Trigger',
      hiding: 'Hiding Behavior',
      size: 'Sizes',
      extra: 'Extra List',
      large: 'Large List',
      default: 'Default List',
      small: 'Small List',
      mini: 'Mini List'
    },
    pagination: {
      title: 'Pagination',
      usage: 'Usage',
      minimal: 'Minimal'
    },
    radio: {
      title: 'Radio',
      usage: 'Usage',
      'opt-1': 'Option A',
      'opt-2': 'Option B',
      'opt-3': 'Option C',
      disabled: 'Disabled Radio',
      group: 'Radio Group',
      size: 'Size',
      extra: 'Extra Option',
      large: 'Large Option',
      default: 'Default Option',
      small: 'Small Option',
      mini: 'Mini Option',
      button: 'Button Style'
    },
    checkbox: {
      title: 'Checkbox',
      usage: 'Usage',
      'opt-1': 'Option A',
      'opt-2': 'Option B',
      'opt-3': 'Option C',
      disabled: 'Disabled',
      group: 'Checkbox Group',
      limit: 'Limited Items Checked',
      indeterminate: 'Indeterminate',
      all: 'Check All',
      size: 'Size',
      extra: 'Extra Option',
      large: 'Large Option',
      default: 'Default Option',
      small: 'Small Option',
      mini: 'Mini Option',
      button: 'Button Style'
    },
    input: {
      title: 'Input',
      usage: 'Usage',
      placeholder: 'Please Input',
      disabled: 'Disabled',
      clearable: 'Clearable',
      password: 'Password',
      'pwd-placeholder': 'Please Input Password',
      mixed: 'Mixed Input',
      combined: 'Combined Input',
      'combined-code': 'Captcha',
      'combined-send': 'Send',
      size: 'Sizes'
    },
    textarea: {
      title: 'Textarea',
      usage: 'Usage',
      placeholder: 'Please Input',
      disabled: 'Disabled',
      rows: 'Rows of Textarea',
      'auto-size': 'Autosize Textarea'
    },
    select: {
      title: 'Select',
      usage: 'Usage',
      placeholder: 'Select',
      'opt-1': 'Lv.30',
      'opt-2': 'Lv.40',
      'opt-3': 'Lv.50',
      'opt-4': 'Lv.60',
      disabled: 'Disabled',
      clearable: 'Clearable',
      custom: 'Custom Template',
      size: 'Sizes'
    },
    switch: {
      title: 'Switch',
      usage: 'Usage',
      disabled: 'Disabled'
    },
    slider: {
      title: 'Slider',
      usage: 'Usage',
      tooltip: 'Show Tooltip',
      disabled: 'Disabled'
    },
    form: {
      title: 'Form',
      usage: 'Usage',
      inline: 'Inline Form',
      align: 'Alignment',
      left: 'Left',
      right: 'Right',
      top: 'Top'
    },
    table: {
      title: 'Table',
      usage: 'Usage',
      'col-type': 'Signal Type',
      'col-name': 'Signal',
      'col-from': 'Channel Type',
      'col-date': 'Search Time',
      data: [{
        type: 'Agents',
        name: 'Ellen Joe',
        color: '#ffb500',
        from: 'Exclusive Channel',
        date: '2024-07-09 20:13:29'
      }, {
        type: 'Agents',
        name: 'Nicole Demara',
        color: '#e900ff',
        from: 'Exclusive Channel',
        date: '2024-07-09 20:13:29'
      }, {
        type: 'W-Engines',
        name: '[Lunar] Decrescent',
        from: 'Exclusive Channel',
        date: '2024-07-09 20:13:29'
      }, {
        type: 'W-Engines',
        name: '[Magnetic Storm] Charlie',
        from: 'Exclusive Channel',
        date: '2024-07-09 20:13:29'
      }, {
        type: 'W-Engines',
        name: '[Vortex] Hatchet',
        from: 'Exclusive Channel',
        date: '2024-07-09 20:13:29'
      }]
    },
    tag: {
      title: 'Tag',
      usage: 'Usage',
      default: 'Default',
      primary: 'Tag 1',
      success: 'Tag 2',
      info: 'Tag 3',
      warning: 'Tag 4',
      danger: 'Tag 5',
      plain: 'Plain',
      hollow: 'Hollow',
      ether: 'Ether',
      fire: 'Fire',
      electric: 'Electric',
      ice: 'Ice',
      physical: 'Physical',
      closable: 'Closable Tag',
      list: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
      size: 'Sizes',
      extra: 'Extra',
      large: 'Large',
      small: 'Small',
      mini: 'Mini'
    },
    progress: {
      title: 'Progress',
      usage: 'Usage',
      circle: 'Circular Progress Bar'
    },
    badge: {
      title: 'Badge',
      usage: 'Usage',
      default: 'Default',
      primary: 'Primary',
      success: 'Success',
      info: 'Info',
      warning: 'Warning',
      ether: 'Ether',
      fire: 'Fire',
      electric: 'Electric',
      ice: 'Ice',
      physical: 'Physical',
      dot: 'Little Dot',
    },
    card: {
      title: 'Card',
      usage: 'Usage',
      'demo-title': '[ NEWS ] Zenless Ver.1.0',
      'demo-content': 'Today is Oct.30 2024, the v1.0 of Zenless finally OUT NOW!',
      custom: 'Custom Template',
      'custom-item': 'List Item',
    },
    collapse: {
      title: 'Collapse',
      usage: 'Usage',
      'data-1': [{
        title: 'Additional Ability: Rising Storm',
        content: 'When another character in your squad shares the same Attribute of Faction'
      }, {
        title: 'Additional Ability: Elegant Predator',
        content: 'When another character in your squad shares the same Attribute of Faction'
      }, {
        title: 'Additional Ability: Banquet of Perfection',
        content: 'When another character in your squad shares the same Attribute of Faction'
      }],
      'data-2': [{
        title: 'Video Store Lv.1',
        content: 'Business Performance: Niche Store -- A humble neighborhood video store, quietly trading its path with limited extra income.'
      }, {
        title: 'Video Store Lv.2',
        content: 'Business Performance: Earning Some Glances -- Occasionally, new faces find their way here, ensuring daily earnings that manage to keep the store afloat.'
      }, {
        title: 'Video Store Lv.3',
        content: 'Business Performance: Earing Loyalty -- A number of regular patrons grace your doorstep, and the store consistently stays in the black.'
      }, {
        title: 'Video Store Lv.4',
        content: 'Business Performance: Customer-Approved -- With a loyal clientele, you are often recommended to friends by repeat customers, securing a steady and profitable daily income.'
      }, {
        title: 'Video Store Lv.5',
        content: `Business Performance: A Local Icon -- You've become a well-regarded unique store in the neighborhood, generating a constant influx of substantial daily earnings.`
      }, {
        title: 'Video Store Lv.6',
        content: `Business Performance: Trendsetting Store -- The store's reputation has spread widely in the surrounding area, and significant amounts of money flow in every day.`
      }],
      plain: 'Plain',
      accordion: 'Accordion',
      custom: 'Custom Template',
      disabled: 'Disabled'
    },
    tooltip: {
      title: 'Tooltip',
      usage: 'Usage',
      'bl-text': 'Bottom Left Prompt Text',
      bl: 'BL',
      'bottom-text': 'Bottom Prompt Text',
      bottom: 'Bottom',
      'br-text': 'Bottom Right Prompt Text',
      br: 'BR',
      'rt-text': 'Right Top Prompt Text',
      rt: 'RT',
      'right-text': 'Right Prompt Text',
      right: 'Right',
      'rb-text': 'Right Bottom Prompt Text',
      rb: 'RB',
      'lt-text': 'Left Top Prompt Text',
      lt: 'LT',
      'left-text': 'Left Prompt Text',
      left: 'Left',
      'lb-text': 'Left Bottom Prompt Text',
      lb: 'LB',
      'tl-text': 'Top Left Prompt Text',
      tl: 'TL',
      'top-text': 'Top Prompt Text',
      top: 'Top',
      'tr-text': 'Top Right Prompt Text',
      tr: 'TR',
      disabled: 'Disabled',
      prompt: 'Prompt Text',
      'disabled-button': 'Disabled Tooltip',
      custom: 'Custom Template',
      'custom-button': 'Customized Tooltip'
    },
    message: {
      title: 'Message',
      usage: 'Usage',
      show: 'Show Message',
      type: 'Types',
      success: 'Success Message',
      warning: 'Warning Message',
      error: 'Error Message',
      import: 'Import Message',
      'import-desc': `In this case you should call<code>message(options)</code>. If the given "options" is a string, it equals to "options.message". We have also registered methods for different types, e.g.<code>message.success(options)</code>.`,
      text: 'This is a message.',
      'success-text': 'Congrats, this is a success message.',
      'warning-text': 'Warning, this is a warning message.',
      'error-text': 'Oops, this is a error message.'
    },
    modal: {
      title: 'Modal',
      usage: 'Usage',
      open: 'Open Modal',
      'modal-title': 'Title',
      'modal-text': 'This is a message.',
      fullscreen: 'Fullscreen'
    },
    drawer: {
      title: 'Drawer',
      usage: 'Usage',
      open: 'Open Drawer',
      'drawer-title': 'Title',
      'drawer-text': 'This is a message.',
      fullscreen: 'Fullscreen'
    },
    scrollbar: {
      title: 'Scrollbar',
      usage: 'Usage'
    },
    backtop: {
      title: 'Backtop',
      usage: 'Usage',
      'usage-desc': 'Checkout the bottom-right button of the screen'
    },
    pattern: {
      title: 'Pattern',
      usage: 'Usage'
    }
  },
  attribute: {
    icon: {
      name: `icon's name, without the "z-icon-" prefix`,
      size: `icon's size, "px" for type number`,
      color: `icon's color`
    },
    button: {
      size: `button's size`,
      type: `button's type`,
      icon: `button's icon name`,
      loading: 'loading button',
      disabled: 'disabled button',
      plain: 'plain button',
      round: 'round button',
      circle: 'circle button',
      hollow: 'hollow button',
      highlight: 'highlighted button',
      'native-type': `native button's type`
    },
    link: {
      type: `link's type`,
      highlight: 'highlighted link',
      underline: 'whether has underline',
      disabled: 'disabled link',
      href: `native link's href`,
      icon: `link's icon name`
    },
    menu: {
      'v-model': `binding value, activated menu-item's name`,
      accordion: 'accordion mode',
      'default-open': 'name(s) of currently active sub-menu(s)'
    },
    'sub-menu': {
      name: 'unique identification',
      title: `sub-menu's title`,
      disabled: 'disabled sub-menu',
      icon: `sub-menu's icon name`
    },
    'menu-item': {
      name: 'unique identification',
      title: `menu-item's title`,
      disabled: 'disabled menu-item',
      icon: `menu-item's icon name`
    },
    tabs: {
      'v-model': `binding value, activated tab-panel's name`,
      placement: 'position of tabs'
    },
    'tab-panel': {
      label: `tab-panel's title`,
      name: 'unique identification',
      disabled: 'disabled tab-panel',
      lazy: 'lazily rendered, render when activated'
    },
    dropdown: {
      trigger: 'how to trigger',
      size: `menu's size`,
      'hide-on-command': 'hide menu after click menu-item'
    },
    'dropdown-item': {
      command: 'a command to dispatched',
      disabled: 'disabled menu-item'
    },
    pagination: {
      'v-model': 'binding value, current page number',
      'page-size': 'item count of each page',
      total: 'total item count',
      'prev-text': 'text for the prev button',
      'next-text': 'text for the next button',
      minimal: 'minimal pagination'
    },
    radio: {
      'v-model': `binding value,\nchosen radio's input value`,
      value: `radio input's value`,
      disabled: 'disabled radio',
      size: `radio's size`,
      name: `native radio input's name`
    },
    'radio-group': {
      'v-model': `binding value,\nchosen radio's input value`,
      disabled: 'disabled radios',
      size: `radios' size`
    },
    checkbox: {
      'v-model': `binding value, checked\ncheckbox's input value`,
      value: `checkbox input's value`,
      disabled: 'disabled checkbox',
      size: `checkbox's size`,
      name: `native checkbox input's name`,
      indeterminate: `same as native\ncheckbox's indeterminate`
    },
    'checkbox-group': {
      'v-model': `binding value, checked\ncheckbox's input value`,
      disabled: 'disabled checkboxes',
      size: `checkboxes' size`,
      min: 'minimum number of\ncheckbox checked',
      max: 'maximum number of\ncheckbox checked'
    },
    input: {
      'v-model': 'binding value',
      type: `input's type`,
      'type-values': 'text and other native input types',
      disabled: 'disabled input',
      name: `native input's name`,
      tabindex: `native input's tabindex`,
      maxlength: `native input's maxlength`,
      minlength: `native input's minlength`,
      placeholder: `input's placeholder`,
      clearable: 'clearable input',
      size: `input's size`,
      'prefix-icon': `input's prefix icon`,
      'suffix-icon': `input's suffix icon`,
      autocomplete: `native input's autocomplete`,
      autofocus: `native input's autofocus`,
      readonly: `native input's readonly`,
      'text-align': `input's text alignment`,
      'text-align-values': 'same as text-align in CSS'
    },
    textarea: {
      'v-model': 'binding value',
      disabled: 'disabled textarea',
      name: `native input's name`,
      rows: `native input's rows`,
      tabindex: `native input's tabindex`,
      maxlength: `native input's maxlength`,
      minlength: `native input's minlength`,
      placeholder: `textarea's placeholder`,
      size: `textarea's size`,
      autocomplete: `native input's autocomplete`,
      autofocus: `native input's autofocus`,
      readonly: `native input's readonly`,
      'text-align': `textarea's text alignment`,
      'text-align-values': 'same as text-align in CSS',
      'auto-size': 'adaptive height of textarea'
    },
    select: {
      'v-model': 'binding value',
      name: `selector input's name`,
      disabled: 'disabled selector',
      placeholder: `selector's placeholder`,
      clearable: 'clearable selector',
      size: `selector's size`,
      'empty-text': 'displayed text when\nthere is no options',
      'empty-text-default': 'No Data... \\[ o_x ]/'
    },
    option: {
      value: `option's value`,
      label: `option's label`,
      'label-default': 'equals to value',
      disabled: 'disabled option'
    },
    switch: {
      'v-model': 'binding value',
      value: `switch input's value`,
      name: `native switch input's name`,
      disabled: 'disabled switch'
    },
    slider: {
      'v-model': 'binding value',
      min: 'minimum value',
      max: 'maximum value',
      step: 'step size',
      disabled: 'disabled slider',
      tooltip: 'display tooltip value'
    },
    form: {
      inline: `form's inline mode`,
      'label-width': 'width of label',
      'label-position': 'position of label'
    },
    'form-item': {
      label: `form-item's label`,
      'label-width': 'width of label',
      required: 'required field'
    },
    table: {
      data: `table's data`,
      border: `display table's vertical border`,
      'empty-text': 'displayed text when there is no data',
      'empty-text-default': 'No Data... \\[ o_x ]/'
    },
    'table-column': {
      prop: `field's name`,
      label: `column's label`,
      width: `column's width`
    },
    tag: {
      size: `tag's size`,
      type: `tag's type`,
      plain: 'plain tag',
      round: 'round tag',
      hollow: 'hollow tag',
      closable: 'closable tag'
    },
    progress: {
      type: `progress bar's type`,
      size: `circle progress bar's size (available when type is circle)`,
      percent: 'percentage of the progress',
      color: `progress bar's color`
    },
    badge: {
      type: `badge's type`,
      'is-dot': 'display as a little dot,\nwithout value',
      value: 'displayed value'
    },
    card: {
      image: `card's banner`,
      avatar: `card's avatar`,
      nickname: `card's nickname`,
      title: `card's title`,
      content: `card's content`
    },
    collapse: {
      'v-model': 'binding value, currently active panel(s)',
      accordion: 'accordion mode',
      plain: 'plain collapse'
    },
    'collapse-item': {
      title: `panel's title`,
      name: 'unique identification',
      disabled: 'disabled panel'
    },
    tooltip: {
      content: 'display content',
      placement: `tooltip's position`,
      visible: 'visibility of tooltip',
      disabled: 'disabled tooltip'
    },
    modal: {
      'v-model': 'binding value, visibility of modal',
      title: `modal's title`,
      mask: 'display modal mask',
      'mask-closable': 'closed by clicking the modal mask',
      closable: 'show a close button, disabled for fullscreen mode',
      fullscreen: 'fullscreen modal',
      'show-footer': `show modal's footer`,
      'show-cancel': 'show a cancel button',
      'cancel-text': `cancel button's text`,
      'cancel-text-default': 'Cancel',
      'confirm-text': `confirm button's text`,
      'confirm-text-default': 'OK'
    },
    drawer: {
      'v-model': 'binding value, visibility of drawer',
      title: `drawer's title`,
      mask: 'display drawer mask',
      'mask-closable': 'closed by clicking the drawer mask',
      closable: 'show a close button, disabled for fullscreen mode',
      fullscreen: 'fullscreen drawer',
      'show-footer': `show drawer's footer`,
      'show-cancel': 'show a cancel button',
      'cancel-text': `cancel button's text`,
      'cancel-text-default': 'Cancel',
      'confirm-text': `confirm button's text`,
      'confirm-text-default': 'OK'
    },
    scrollbar: {
      fixed: `whether to display the scrollbar when the content\ndoesn't overflow the container, allow to\nset the x axis scrollbar or y axis scrollbar separately`,
      'hide-scroll': 'hiding the scrollbar, the priority is over than fixed',
      resizable: `is the container's size changeable? if not,\nset to false to optimize performance of scrollbar`
    },
    backtop: {
      target: 'the target that triggered scroll',
      'visible-height': `the minimum scroll height value to show the button`,
      right: 'right distance',
      bottom: 'bottom distance'
    },
    pattern: {
      type: `pattern's type`
    }
  },
  slot: {
    'sub-menu': {
      default: 'submenu list',
      title: `sub-menu's title`
    },
    'tab-panel': {
      default: `tab-panel's content`,
      label: `tab-panel's title`
    },
    dropdown: {
      default: 'content of dropdown to attach the trigger listener',
      dropdown: 'content of dropdown menu, usually a z-dropdown-item element'
    },
    input: {
      prefix: `input's prefix content`,
      suffix: `input's suffix content`,
      prepend: 'content to prepend before input',
      append: 'content to append before input'
    },
    select: {
      default: 'option list',
      empty: 'content when there is no options'
    },
    'form-item': {
      default: `form-item's content`,
      label: `form-item's label`
    },
    table: {
      empty: 'displayed content when there is no data'
    },
    'table-column': {
      default: 'customized content for table column, the scoped parameter is { row, column, index }',
      header: 'customized content for table header, the scoped parameter is { column }'
    },
    tooltip: {
      default: 'content of tooltip to attach the trigger listener',
      content: `tooltip's display content`
    },
    modal: {
      default: `modal's content`,
      title: `modal's title`,
      footer: `modal's footer`
    },
    drawer: {
      default: `drawer's content`,
      title: `drawer's title`,
      footer: `drawer's footer`
    }
  },
  event: {
    menu: {
      change: 'callback function when menu is activated',
      'change-params': 'name of activated menu'
    },
    tabs: {
      change: 'callback function when tab is activated',
      'change-params': 'name of activated tab'
    },
    dropdown: {
      command: 'triggers when dropdown-item is clicked',
      'command-params': `dropdown-item's command`,
      trigger: 'triggers when dropdown menu appears/disappears',
      'trigger-params': 'true when it appears, and false otherwise'
    },
    pagination: {
      change: 'triggers when current page number changed',
      'change-params': 'new current page number'
    },
    radio: {
      change: 'triggers when radio selected',
      'change-params': `value of chosen radio's input value`
    },
    'radio-group': {
      change: 'triggers when radio selected',
      'change-params': `value of chosen radio's input value`
    },
    checkbox: {
      change: 'triggers when checkbox checked',
      'change-params': `value of checked checkbox's input value`
    },
    'checkbox-group': {
      change: 'triggers when checkbox checked',
      'change-params': `value of checked checkbox's input value`
    },
    input: {
      blur: 'input blurs',
      focus: 'input focus',
      change: `input's content changed`,
      input: `input's value changed`,
      clear: 'click the clear button'
    },
    textarea: {
      blur: 'textarea blurs',
      focus: 'textarea focus',
      change: `textarea's content changed`,
      input: `textarea's value changed`
    },
    select: {
      change: 'triggers when the value changed',
      'change-params': 'current selected value',
      clear: 'click the clear button'
    },
    switch: {
      change: 'triggers when value changed',
      'change-params': 'new current value'
    },
    slider: {
      change: 'triggers when value changed',
      'change-params': 'new current value'
    },
    tag: {
      close: 'click the close button'
    },
    collapse: {
      change: 'triggers when active panel(s) changed',
      'change-params': 'activated panel(s)'
    },
    modal: {
      open: 'triggers when modal opened',
      close: 'triggers when modal closed, triggered by close button or modal mask',
      cancel: 'triggers when modal canceled',
      confirm: 'triggers when modal confirmed'
    },
    drawer: {
      open: 'triggers when drawer opened',
      close: 'triggers when drawer closed, triggered by close button or drawer mask',
      cancel: 'triggers when drawer canceled',
      confirm: 'triggers when drawer confirmed'
    }
  },
  option: {
    message: {
      message: 'message text',
      type: 'message type',
      duration: 'display duration, millisecond'
    }
  },
  method: {
    message: {
      success: 'display a success message, same with message options',
      warning: 'display a warning message, same with message options',
      error: 'display an error message, same with message options'
    }
  }
}