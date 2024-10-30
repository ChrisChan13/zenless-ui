import { createWebHashHistory, createRouter } from 'vue-router'

import Layout from '@/layouts/default.vue'
import GettingStartedView from '@/views/getting-started.vue'
import NotFoundView from '@/views/404.vue'
import ButtonView from '@/views/component/button.vue'
import LinkView from '@/views/component/link.vue'
import IconView from '@/views/component/icon.vue'
import CollapseView from '@/views/component/collapse.vue'
import MenuView from '@/views/component/menu.vue'
import BacktopView from '@/views/component/backtop.vue'
import TagView from '@/views/component/tag.vue'
import BadgeView from '@/views/component/badge.vue'
import TabsView from '@/views/component/tabs.vue'
import TooltipView from '@/views/component/tooltip.vue'
import ScrollbarView from '@/views/component/scrollbar.vue'
import RadioView from '@/views/component/radio.vue'
import CheckboxView from '@/views/component/checkbox.vue'
import SliderView from '@/views/component/slider.vue'
import SwitchView from '@/views/component/switch.vue'
import InputView from '@/views/component/input.vue'
import TextareaView from '@/views/component/textarea.vue'
import SelectView from '@/views/component/select.vue'
import DropdownView from '@/views/component/dropdown.vue'
import PaginationView from '@/views/component/pagination.vue'
import CardView from '@/views/component/card.vue'
import ModalView from '@/views/component/modal.vue'
import DrawerView from '@/views/component/drawer.vue'
import MessageView from '@/views/component/message.vue'
import ProgressView from '@/views/component/progress.vue'
import TableView from '@/views/component/table.vue'
import FormView from '@/views/component/form.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    redirect: '/getting-started'
  },
  // {
  //   name: 'change-log',
  //   path: '/change-log'
  // },
  {
    path: '/getting-started',
    component: Layout,
    children: [
      {
        name: 'getting-started',
        path: '',
        component: GettingStartedView
      }
    ]
  },
  {
    path: '/component',
    component: Layout,
    children: [
      {
        name: 'component-button',
        path: 'button',
        component: ButtonView
      },
      {
        name: 'component-link',
        path: 'link',
        component: LinkView
      },
      {
        name: 'component-icon',
        path: 'icon',
        component: IconView
      },
      {
        name: 'component-collapse',
        path: 'collapse',
        component: CollapseView
      },
      {
        name: 'component-menu',
        path: 'menu',
        component: MenuView
      },
      {
        name: 'component-backtop',
        path: 'backtop',
        component: BacktopView
      },
      {
        name: 'component-tag',
        path: 'tag',
        component: TagView
      },
      {
        name: 'component-badge',
        path: 'badge',
        component: BadgeView
      },
      {
        name: 'component-tabs',
        path: 'tabs',
        component: TabsView
      },
      {
        name: 'component-tooltip',
        path: 'tooltip',
        component: TooltipView
      },
      {
        name: 'component-scrollbar',
        path: 'scrollbar',
        component: ScrollbarView
      },
      {
        name: 'component-radio',
        path: 'radio',
        component: RadioView
      },
      {
        name: 'component-checkbox',
        path: 'checkbox',
        component: CheckboxView
      },
      {
        name: 'component-slider',
        path: 'slider',
        component: SliderView
      },
      {
        name: 'component-switch',
        path: 'switch',
        component: SwitchView
      },
      {
        name: 'component-input',
        path: 'input',
        component: InputView
      },
      {
        name: 'component-textarea',
        path: 'textarea',
        component: TextareaView
      },
      {
        name: 'component-select',
        path: 'select',
        component: SelectView
      },
      {
        name: 'component-dropdown',
        path: 'dropdown',
        component: DropdownView
      },
      {
        name: 'component-pagination',
        path: 'pagination',
        component: PaginationView
      },
      {
        name: 'component-card',
        path: 'card',
        component: CardView
      },
      {
        name: 'component-modal',
        path: 'modal',
        component: ModalView
      },
      {
        name: 'component-drawer',
        path: 'drawer',
        component: DrawerView
      },
      {
        name: 'component-message',
        path: 'message',
        component: MessageView
      },
      {
        name: 'component-progress',
        path: 'progress',
        component: ProgressView
      },
      {
        name: 'component-table',
        path: 'table',
        component: TableView
      },
      {
        name: 'component-form',
        path: 'form',
        component: FormView
      }
    ]
  },
  {
    path: '/404',
    component: Layout,
    children: [
      {
        name: '404',
        path: '',
        component: NotFoundView
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(() => {
  const scrollbar = document.querySelector('.container>.container-wrap>.z-scrollbar__wrap')
  if (scrollbar) {
    scrollbar.scrollTop = 0
    scrollbar.scrollLeft = 0
  }
})

export default router