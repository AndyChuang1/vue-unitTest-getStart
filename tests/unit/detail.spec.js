import { mount } from '@vue/test-utils';
import Detail from '@/components/About/Detail.vue';

describe('detail.vue', () => {
  it('display  a non authorized message', () => {
    const msg = 'Andy';
    const wrapper = mount(Detail, {
      propsData: {
        msg,
      },
    });
    expect(wrapper.find('h1').text()).toBe('Please Login');
  });

  it('display a hello message', () => {
    const msg = 'Andy';
    const wrapper = mount(Detail, {
      propsData: {
        msg,
        isAdmin: true,
      },
    });
    console.log(wrapper.find('.hello').text());
    expect(wrapper.find('.hello').text()).toBe('Hello Andy !');
  });
});
