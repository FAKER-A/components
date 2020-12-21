import { mount, MountingOptions, VueWrapper } from '@vue/test-utils'
import { DefineComponent } from 'vue'
import IxAlert from '../src/Alert.vue'
import { AlertProps } from '../src/types'

describe('Alert.vue', () => {
  let AlertMount: (
    options?: MountingOptions<Partial<AlertProps>>,
  ) => VueWrapper<InstanceType<DefineComponent<AlertProps>>>

  beforeEach(() => {
    AlertMount = (options = {}) => {
      return mount<AlertProps>(IxAlert, {
        ...options,
      })
    }
  })

  test('render work', () => {
    const wrapper = AlertMount()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
