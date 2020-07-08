import { shallowMount } from '@vue/test-utils';
import Reverse from '@/views/Reverse.vue';
describe('ReversePage', () => {
  const wrapper = shallowMount(Reverse);

  it('Return reverse value', () => {
    wrapper.setData({ inputData: '1234' });
    expect(wrapper.vm.reverse).toBe('4321');
  });
});
