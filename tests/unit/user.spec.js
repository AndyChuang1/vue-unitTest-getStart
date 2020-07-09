import { shallowMount } from '@vue/test-utils';
import User from '@/views/User.vue';
const mockUser = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};
jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: mockUser }),
}));
// This sets the mock adapter on the default instance

describe('User Test', () => {
  let wrapper;
  // We run shallowMount() inside beforeEach() so a component is mounted before every test.
  //因為這裡 是在created裡 觸發資料 所以必須把拿到資料並mount上去 再進行測試 才找的到wrapper.find('#text').text()
  beforeEach(() => {
    wrapper = shallowMount(User);
  });

  it('Get User', async () => {
    // const wrapper = shallowMount(Weather);
    // const button = wrapper.find('#getWeather');
    // await button.trigger('click');
    wrapper.vm.$nextTick(() => {
      console.log('Test : ' + wrapper.find('#text').text());
      expect(wrapper.find('#text').text()).toEqual('Bret');
    });
  });
});
