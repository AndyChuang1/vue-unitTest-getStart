import { shallowMount } from '@vue/test-utils';
import Weather from '@/views/Weather.vue';
const weatherURL =
  'https://api.openweathermap.org/data/2.5/weather?id=1670651&appid=7dad838277c0cc8fdf1a241d7c180753&units=metric';
const mockWeather = {
  coord: { lon: 139, lat: 35 },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01n',
    },
  ],
  base: 'stations',
  main: {
    temp: 281.52,
    feels_like: 278.99,
    temp_min: 280.15,
    temp_max: 283.71,
    pressure: 1016,
    humidity: 93,
  },
  wind: {
    speed: 0.47,
    deg: 107.538,
  },
  clouds: {
    all: 2,
  },
  dt: 1560350192,
  sys: {
    type: 3,
    id: 2019346,
    message: 0.0065,
    country: 'JP',
    sunrise: 1560281377,
    sunset: 1560333478,
  },
  timezone: 32400,
  id: 1851632,
  name: 'Shuzenji',
  cod: 200,
};
jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: mockWeather }),
}));
// This sets the mock adapter on the default instance

describe('Weather Test', () => {
  let wrapper;
  // We run shallowMount() inside beforeEach() so a component is mounted before every test.
  //因為這裡 是在created裡 觸發資料 所以必須把拿到資料並mount上去 再進行測試 才找的到wrapper.find('#text').text()
  beforeEach(() => {
    wrapper = shallowMount(Weather);
  });

  it('Get Weather', async () => {
    // const wrapper = shallowMount(Weather);
    // const button = wrapper.find('#getWeather');
    // await button.trigger('click');
    wrapper.vm.$nextTick(() => {
      console.log('Test : ' + wrapper.find('#text').text());
      console.log('Test : ' + wrapper.vm.weather);
      expect(wrapper.find('#text').text()).toEqual('Clear');
    });
  });
});
