import { installComponent } from '@idux/components/core/utils'
import IxAlert from './src/Alert.vue'

IxAlert.install = installComponent(IxAlert)

export { IxAlert }
export type { IxAlertComponent } from './src/types'
