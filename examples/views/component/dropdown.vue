<template>
  <div class="component">
    <div class="component-title">{{ $t('component.dropdown.title') }}</div>
    <div class="component-header">{{ $t('component.dropdown.usage') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-dropdown>
          <z-button hollow icon="arrow-bottom">
            <span>{{ $t('component.dropdown.button') }}</span>
          </z-button>
          <template #dropdown>
            <z-dropdown-item command="30">{{ $t('component.dropdown.act-1') }}</z-dropdown-item>
            <z-dropdown-item command="40">{{ $t('component.dropdown.act-2') }}</z-dropdown-item>
            <z-dropdown-item command="50">{{ $t('component.dropdown.act-3') }}</z-dropdown-item>
            <z-dropdown-item command="60" disabled>{{ $t('component.dropdown.act-4') }}</z-dropdown-item>
          </template>
        </z-dropdown>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">{{ $t('component.dropdown.click') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-dropdown trigger="click">
          <z-button hollow icon="arrow-bottom">
            <span>{{ $t('component.dropdown.button') }}</span>
          </z-button>
          <template #dropdown>
            <z-dropdown-item command="30">{{ $t('component.dropdown.act-1') }}</z-dropdown-item>
            <z-dropdown-item command="40">{{ $t('component.dropdown.act-2') }}</z-dropdown-item>
            <z-dropdown-item command="50">{{ $t('component.dropdown.act-3') }}</z-dropdown-item>
            <z-dropdown-item command="60" disabled>{{ $t('component.dropdown.act-4') }}</z-dropdown-item>
          </template>
        </z-dropdown>
      </div>
      <source-code collapse :code="codes.click"></source-code>
    </div>
    <div class="component-header">{{ $t('component.dropdown.hiding') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-dropdown :hide-on-command="false">
          <z-button hollow icon="arrow-bottom">
            <span>{{ $t('component.dropdown.button') }}</span>
          </z-button>
          <template #dropdown>
            <z-dropdown-item command="30">{{ $t('component.dropdown.act-1') }}</z-dropdown-item>
            <z-dropdown-item command="40">{{ $t('component.dropdown.act-2') }}</z-dropdown-item>
            <z-dropdown-item command="50">{{ $t('component.dropdown.act-3') }}</z-dropdown-item>
            <z-dropdown-item command="60" disabled>{{ $t('component.dropdown.act-4') }}</z-dropdown-item>
          </template>
        </z-dropdown>
      </div>
      <source-code collapse :code="codes.hidden"></source-code>
    </div>
    <div class="component-header">{{ $t('component.dropdown.size') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-dropdown size="extra">
          <z-button size="extra" hollow icon="arrow-bottom">
            <span>{{ $t('component.dropdown.extra') }}</span>
          </z-button>
          <template #dropdown>
            <z-dropdown-item command="30">{{ $t('component.dropdown.act-1') }}</z-dropdown-item>
            <z-dropdown-item command="40">{{ $t('component.dropdown.act-2') }}</z-dropdown-item>
            <z-dropdown-item command="50">{{ $t('component.dropdown.act-3') }}</z-dropdown-item>
            <z-dropdown-item command="60" disabled>{{ $t('component.dropdown.act-4') }}</z-dropdown-item>
          </template>
        </z-dropdown>
        <z-dropdown size="large">
          <z-button size="large" hollow icon="arrow-bottom">
            <span>{{ $t('component.dropdown.large') }}</span>
          </z-button>
          <template #dropdown>
            <z-dropdown-item command="30">{{ $t('component.dropdown.act-1') }}</z-dropdown-item>
            <z-dropdown-item command="40">{{ $t('component.dropdown.act-2') }}</z-dropdown-item>
            <z-dropdown-item command="50">{{ $t('component.dropdown.act-3') }}</z-dropdown-item>
            <z-dropdown-item command="60" disabled>{{ $t('component.dropdown.act-4') }}</z-dropdown-item>
          </template>
        </z-dropdown>
      </div>
      <div class="component-preview-line">
        <z-dropdown>
          <z-button hollow icon="arrow-bottom">
            <span>{{ $t('component.dropdown.default') }}</span>
          </z-button>
          <template #dropdown>
            <z-dropdown-item command="30">{{ $t('component.dropdown.act-1') }}</z-dropdown-item>
            <z-dropdown-item command="40">{{ $t('component.dropdown.act-2') }}</z-dropdown-item>
            <z-dropdown-item command="50">{{ $t('component.dropdown.act-3') }}</z-dropdown-item>
            <z-dropdown-item command="60" disabled>{{ $t('component.dropdown.act-4') }}</z-dropdown-item>
          </template>
        </z-dropdown>
        <z-dropdown size="small">
          <z-button size="small" hollow icon="arrow-bottom">
            <span>{{ $t('component.dropdown.small') }}</span>
          </z-button>
          <template #dropdown>
            <z-dropdown-item command="30">{{ $t('component.dropdown.act-1') }}</z-dropdown-item>
            <z-dropdown-item command="40">{{ $t('component.dropdown.act-2') }}</z-dropdown-item>
            <z-dropdown-item command="50">{{ $t('component.dropdown.act-3') }}</z-dropdown-item>
            <z-dropdown-item command="60" disabled>{{ $t('component.dropdown.act-4') }}</z-dropdown-item>
          </template>
        </z-dropdown>
        <z-dropdown size="mini">
          <z-button size="mini" hollow icon="arrow-bottom">
            <span>{{ $t('component.dropdown.mini') }}</span>
          </z-button>
          <template #dropdown>
            <z-dropdown-item command="30">{{ $t('component.dropdown.act-1') }}</z-dropdown-item>
            <z-dropdown-item command="40">{{ $t('component.dropdown.act-2') }}</z-dropdown-item>
            <z-dropdown-item command="50">{{ $t('component.dropdown.act-3') }}</z-dropdown-item>
            <z-dropdown-item command="60" disabled>{{ $t('component.dropdown.act-4') }}</z-dropdown-item>
          </template>
        </z-dropdown>
      </div>
      <source-code collapse :code="codes.size"></source-code>
    </div>
    <div class="component-header">Dropdown Attributes</div>
    <attribute-table :data="dropdownAttributes"></attribute-table>
    <div class="component-header">Dropdown Slots</div>
    <slot-table :data="dropdownSlots"></slot-table>
    <div class="component-header">Dropdown Events</div>
    <event-table :data="dropdownEvents"></event-table>
    <div class="component-header">DropdownItem Attributes</div>
    <attribute-table :data="dropdownItemAttributes"></attribute-table>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { $t } from '@/locale'

const codes = computed(() => ({
  general: `<z-dropdown>
  <z-button hollow icon="arrow-bottom">
    <span>${$t('component.dropdown.button')}</span>
  </z-button>
  <template #dropdown>
    <z-dropdown-item command="30">${$t('component.dropdown.act-1')}</z-dropdown-item>
    <z-dropdown-item command="40">${$t('component.dropdown.act-2')}</z-dropdown-item>
    <z-dropdown-item command="50">${$t('component.dropdown.act-3')}</z-dropdown-item>
    <z-dropdown-item command="60" disabled>${$t('component.dropdown.act-4')}</z-dropdown-item>
  </template>
</z-dropdown>`,
  click: `<z-dropdown trigger="click">
  <z-button hollow icon="arrow-bottom">
    <span>${$t('component.dropdown.button')}</span>
  </z-button>
  <template #dropdown>
    <z-dropdown-item command="30">${$t('component.dropdown.act-1')}</z-dropdown-item>
    <z-dropdown-item command="40">${$t('component.dropdown.act-2')}</z-dropdown-item>
    <z-dropdown-item command="50">${$t('component.dropdown.act-3')}</z-dropdown-item>
    <z-dropdown-item command="60" disabled>${$t('component.dropdown.act-4')}</z-dropdown-item>
  </template>
</z-dropdown>`,
  hidden: `<z-dropdown :hide-on-command="false">
  <z-button hollow icon="arrow-bottom">
    <span>${$t('component.dropdown.button')}</span>
  </z-button>
  <template #dropdown>
    <z-dropdown-item command="30">${$t('component.dropdown.act-1')}</z-dropdown-item>
    <z-dropdown-item command="40">${$t('component.dropdown.act-2')}</z-dropdown-item>
    <z-dropdown-item command="50">${$t('component.dropdown.act-3')}</z-dropdown-item>
    <z-dropdown-item command="60" disabled>${$t('component.dropdown.act-4')}</z-dropdown-item>
  </template>
</z-dropdown>`,
  size: `<z-dropdown size="extra">
  <z-button size="extra" hollow icon="arrow-bottom">
    <span>${$t('component.dropdown.extra')}</span>
  </z-button>
  <template #dropdown>
    <z-dropdown-item command="30">${$t('component.dropdown.act-1')}</z-dropdown-item>
    <z-dropdown-item command="40">${$t('component.dropdown.act-2')}</z-dropdown-item>
    <z-dropdown-item command="50">${$t('component.dropdown.act-3')}</z-dropdown-item>
    <z-dropdown-item command="60" disabled>${$t('component.dropdown.act-4')}</z-dropdown-item>
  </template>
</z-dropdown>
<z-dropdown size="large">
  <z-button size="large" hollow icon="arrow-bottom">
    <span>${$t('component.dropdown.large')}</span>
  </z-button>
  <template #dropdown>
    <z-dropdown-item command="30">${$t('component.dropdown.act-1')}</z-dropdown-item>
    <z-dropdown-item command="40">${$t('component.dropdown.act-2')}</z-dropdown-item>
    <z-dropdown-item command="50">${$t('component.dropdown.act-3')}</z-dropdown-item>
    <z-dropdown-item command="60" disabled>${$t('component.dropdown.act-4')}</z-dropdown-item>
  </template>
</z-dropdown>
<z-dropdown>
  <z-button hollow icon="arrow-bottom">
    <span>${$t('component.dropdown.default')}</span>
  </z-button>
  <template #dropdown>
    <z-dropdown-item command="30">${$t('component.dropdown.act-1')}</z-dropdown-item>
    <z-dropdown-item command="40">${$t('component.dropdown.act-2')}</z-dropdown-item>
    <z-dropdown-item command="50">${$t('component.dropdown.act-3')}</z-dropdown-item>
    <z-dropdown-item command="60" disabled>${$t('component.dropdown.act-4')}</z-dropdown-item>
  </template>
</z-dropdown>
<z-dropdown size="small">
  <z-button size="small" hollow icon="arrow-bottom">
    <span>${$t('component.dropdown.small')}</span>
  </z-button>
  <template #dropdown>
    <z-dropdown-item command="30">${$t('component.dropdown.act-1')}</z-dropdown-item>
    <z-dropdown-item command="40">${$t('component.dropdown.act-2')}</z-dropdown-item>
    <z-dropdown-item command="50">${$t('component.dropdown.act-3')}</z-dropdown-item>
    <z-dropdown-item command="60" disabled>${$t('component.dropdown.act-4')}</z-dropdown-item>
  </template>
</z-dropdown>
<z-dropdown size="mini">
  <z-button size="mini" hollow icon="arrow-bottom">
    <span>${$t('component.dropdown.mini')}</span>
  </z-button>
  <template #dropdown>
    <z-dropdown-item command="30">${$t('component.dropdown.act-1')}</z-dropdown-item>
    <z-dropdown-item command="40">${$t('component.dropdown.act-2')}</z-dropdown-item>
    <z-dropdown-item command="50">${$t('component.dropdown.act-3')}</z-dropdown-item>
    <z-dropdown-item command="60" disabled>${$t('component.dropdown.act-4')}</z-dropdown-item>
  </template>
</z-dropdown>`
}))
const dropdownAttributes = computed(() => [{
  prop: 'trigger',
  desc: $t('attribute.dropdown.trigger'),
  type: 'string',
  values: 'hover / click',
  default: 'hover'
}, {
  prop: 'size',
  desc: $t('attribute.dropdown.size'),
  type: 'string',
  values: 'extra / large / small / mini'
}, {
  prop: 'hide-on-command',
  desc: $t('attribute.dropdown.hide-on-command'),
  type: 'boolean',
  default: 'true'
}])
const dropdownSlots = computed(() => [{
  name: 'default',
  desc: $t('slot.dropdown.default')
}, {
  name: 'dropdown',
  desc: $t('slot.dropdown.dropdown')
}])
const dropdownEvents = computed(() => [{
  name: 'command',
  desc: $t('event.dropdown.command'),
  params: $t('event.dropdown.command-params')
}, {
  name: 'trigger',
  desc: $t('event.dropdown.trigger'),
  params: $t('event.dropdown.trigger-params')
}])
const dropdownItemAttributes = computed(() => [{
  prop: 'command',
  desc: $t('attribute.dropdown-item.command'),
  type: 'string / number'
}, {
  prop: 'disabled',
  desc: $t('attribute.dropdown-item.disabled'),
  type: 'boolean',
  default: 'false'
}])
</script>