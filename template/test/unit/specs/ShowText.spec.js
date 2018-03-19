import Vue from 'vue'
import ShowText from '@/components/ShowText'

describe('ShowText.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(ShowText)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent)
      {{#if_eq runner "karma"}}.to.equal(''){{/if_eq}}{{#if_eq runner "jest"}}.toEqual(''){{/if_eq}}
  })
})
