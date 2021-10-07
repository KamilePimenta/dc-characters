import { mount } from '@vue/test-utils'
import Card from '@/components/Card.vue'
import imgHeroExpected from '@/assets/img/batman.png'
import imgSymbolExpected from '@/assets/svg/batman.svg'

const hero = {
  name: 'Batman',
  slug: 'batman',
  history: '<p>Uma parte da história.</p>',
  color: 'yellow',
}

describe('Show content of Card.vue', () => {
  test('Validate img path and alternative text', () => {
    const wrapper = mount(Card, {
      propsData: {
        data: hero
      }
    })
    const imageHero = wrapper.find('.card-img')
    expect(imageHero.attributes('src')).toEqual(imgHeroExpected)
    expect(imageHero.attributes('alt')).toEqual(`Picture of ${hero.name}`)

    const imageSymbol = wrapper.find('.card-symbol')
    expect(imageSymbol.attributes('src')).toEqual(imgSymbolExpected)
    expect(imageSymbol.attributes('alt')).toEqual(`Symbol of ${hero.name}`)
  })

  test('Validate history of hero', () => {
    const wrapper = mount(Card, {
      propsData: {
        data: hero
      }
    })

    const history = wrapper.find('.card-text')
    expect(history.html()).toBe(`<div class="card-text">${hero.history}</div>`)
  })
});
