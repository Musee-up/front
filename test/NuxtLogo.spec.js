import { mount } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Navbar)
    expect(wrapper.vm).toBeTruthy()
  })
})
