<template>
  <div></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { AlertProps } from './types'

export default defineComponent({
  name: 'IxAlert',
  props: {},
  setup(props: AlertProps) {
    // init
    console.log(props)
  },
})
</script>
