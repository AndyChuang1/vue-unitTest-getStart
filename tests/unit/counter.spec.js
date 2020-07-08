import { shallowMount } from '@vue/test-utils';
import Counter from '@/views/Counter/Counter.vue';

describe('Counter', () => {
  const wrapper = shallowMount(Counter);

  it('button click should increment the count', async () => {
    expect(wrapper.text()).toContain('0');
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(wrapper.text()).toContain('1');
  });
});
