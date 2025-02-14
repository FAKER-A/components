<template>
  <ix-tooltip v-bind="options" @visibleChange="onVisibleChange">
    <template #title>
      <div class="ix-popover-inner">
        <div v-if="hasTitle" class="ix-popover-title">
          <slot name="title">{{ title }}</slot>
        </div>
        <div class="ix-popover-inner-content">
          <slot name="content">{{ content }}</slot>
        </div>
      </div>
    </template>
    <slot />
  </ix-tooltip>
</template>

<script lang="ts">
import type { SetupContext } from 'vue'
import type { PopoverProps } from './types'

import { computed, defineComponent } from 'vue'
import { IxTooltip } from '@idux/components/tooltip'
import { hasSlot, PropTypes } from '@idux/cdk/utils'
import { useGlobalConfig } from '@idux/components/config'

export default defineComponent({
  name: 'IxPopover',
  components: { IxTooltip },
  props: {
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    placement: PropTypes.oneOf([
      'auto',
      'auto-start',
      'auto-end',
      'top',
      'left',
      'bottom',
      'right',
      'top-start',
      'top-end',
      'bottom-start',
      'right-start',
      'right-end',
      'left-start',
      'left-end',
    ] as const),
    visible: PropTypes.bool,
    trigger: PropTypes.oneOf(['click', 'focus', 'hover'] as const),
    showDelay: PropTypes.number,
    hideDelay: PropTypes.number,
    destroyOnHide: PropTypes.bool,
    autoAdjust: PropTypes.bool,
  },
  emits: ['update:visible'],
  setup(props: PopoverProps, { emit, slots }: SetupContext) {
    const options = computed(() => {
      const config = useGlobalConfig('popover')
      return {
        visible: props.visible,
        placement: props.placement ?? config.placement,
        trigger: props.trigger ?? config.trigger,
        showDelay: props.showDelay ?? config.showDelay,
        hideDelay: props.hideDelay ?? config.hideDelay,
        destroyOnHide: props.destroyOnHide ?? config.destroyOnHide,
        autoAdjust: props.autoAdjust ?? config.autoAdjust,
        clsPrefix: 'ix-popover',
      }
    })

    const hasTitle = computed(() => {
      return !!(hasSlot(slots, 'title') || props.title)
    })

    const onVisibleChange = (visible: boolean) => {
      emit('update:visible', visible)
    }

    return { options, onVisibleChange, hasTitle }
  },
})
</script>
